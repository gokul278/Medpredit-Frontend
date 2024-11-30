import {
  IonAlert,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import MultiInputBox from "./MultiInputBox";
import Checkbox from "./Checkbox";
import YesNo from "./YesNo";
import axios from "axios";
import decrypt from "../../helper";
import SingleInputBox from "./SingleInputBox";

const Questions: React.FC = () => {
  // URL PARAMS
  const { refCategoryLabel, cardTitle } = useParams<{
    refCategoryLabel: string;
    cardTitle: string;
  }>();

  // INTERFACE FOR QUESTIONS
  const [questionData, setQuestionsData] = useState<
    {
      questionType: string;
      questionText: string;
      questionId: any;
      options: [
        {
          backwardQId: string;
          forwardQId: string;
          refOptionId: number;
          refOptionLabel: string;
        }
      ];
    }[]
  >([]);

  const [visibleQuestions, setVisibleQuestions] = useState<
    {
      questionType: string;
      questionText: string;
      questionId: any;
      options: [
        {
          backwardQId: string;
          forwardQId: string;
          refOptionId: number;
          refOptionLabel: string;
        }
      ];
    }[]
  >([]);

  const [enabledIndex, setEnabledIndex] = useState<number>(0);

  const [responses, setResponses] = useState<
    { questionId: any; answer: string | number }[]
  >([]);

  const [showAlert, setShowAlert] = useState(false);
  const [editedQuestion, setEditedQuestion] = useState<{
    questionId: any;
    answer: string | number;
  } | null>(null);

  const tokenString: any = localStorage.getItem("userDetails");
  const patientId: any = localStorage.getItem("currentPatientId");
  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  const getQuestions = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/getQuestions`,
        {
          questionId: cardTitle,
          patientId: patientId,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        if (data.status) {
          setQuestionsData(data.questions);
          console.log("data.questions", data.questions);
          setVisibleQuestions([data.questions[0]]);
        }
      });
  };

  const handleAnswerChange = (
    questionId: any,
    answer: string | number,
    forwardQId: string | null
  ) => {
    const alreadyAnswered = responses.some(
      (res) => res.questionId === questionId
    );

    if (alreadyAnswered) {
      setEditedQuestion({ questionId, answer });
      setShowAlert(true);
    } else {
      getNextQuestions(questionId, answer, forwardQId);
    }
  };

  const confirmEditAnswer = () => {
    if (editedQuestion) {
      console.log("Edited answer:", editedQuestion);
      getNextQuestions(editedQuestion.questionId, editedQuestion.answer, null);
    }
    setEditedQuestion(null);
    setShowAlert(false);
  };

  const getNextQuestions = (
    questionId: any,
    answer: string | number,
    forwardQId: string | null
  ) => {
    console.log("forwardQId:", forwardQId);
    console.log("Answer submitted for questionId:", questionId, answer);

    // Convert forwardQId to a number, if not null
    const nextQuestionId = forwardQId ? parseInt(forwardQId, 10) : null;

    // Add response to the state
    setResponses((prevResponses) => {
      // Create a map to ensure unique questionId
      const responseMap = new Map(
        prevResponses.map((res) => [res.questionId, res.answer])
      );

      // Update the map with the latest value
      responseMap.set(questionId, answer);

      // Convert the map back to an array
      const updatedResponses = Array.from(responseMap.entries()).map(
        ([id, ans]) => ({
          questionId: id,
          answer: ans,
        })
      );

      // If forwardQId is null or no matching question is found, submit the responses
      if (
        !nextQuestionId ||
        !questionData.some((q) => parseInt(q.questionId, 10) === nextQuestionId)
      ) {
        console.log(
          "No matching question found or forwardQId is null:",
          forwardQId
        );
        console.log("Submitting responses:", updatedResponses);

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/postAnswers`,
            {
              patientId: patientId,
              categoryId: cardTitle,
              answers: updatedResponses,
            },
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Responses submitted successfully:", response.data);
          })
          .catch((error) => {
            console.error("Error submitting responses:", error);
          });

        return updatedResponses;
      }

      return updatedResponses;
    });

    // Find and reveal the next question, if it exists
    const nextQuestion = questionData.find(
      (q) => parseInt(q.questionId, 10) === nextQuestionId
    );

    if (nextQuestion) {
      setVisibleQuestions((prevVisibleQuestions) => [
        ...prevVisibleQuestions,
        nextQuestion,
      ]);
      setEnabledIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleQuestionEdit = (index: number, questionId: any) => {
    // Show confirmation dialog when a question is changed
    if (index === 2) {
      setShowAlert(true);
    }
  };

  const handleAlertConfirm = (questionId: any, forwardQId: string) => {
    // Clear responses after confirmation and reset visible questions from forwardQId
    setVisibleQuestions((prev) =>
      prev.filter((q) => parseInt(q.questionId, 10) <= questionId)
    );
    setResponses((prevResponses) =>
      prevResponses.filter((response) => response.questionId <= questionId)
    );

    // Show next questions based on forwardQId
    const nextQuestion = questionData.find((q) => q.questionId === forwardQId);

    if (nextQuestion) {
      setVisibleQuestions([nextQuestion]);
      setEnabledIndex(0);
    }

    setShowAlert(false);
  };

  useEffect(() => {
    if (token) {
      try {
        getQuestions();
      } catch (error) {
        console.log("Error fetching questions");
      }
    }
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{refCategoryLabel}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="questionContainers">
          {visibleQuestions.map((question, index) => (
            <div key={index}>
              {question.questionType === "3" && (
                <SingleInputBox
                  type="text"
                  label={question}
                  onClickOpt={(value, questionId, forwardQId) => {
                    if (index === enabledIndex) {
                      getNextQuestions(questionId, parseInt(value), forwardQId);
                    }
                  }}
                  onEdit={() => handleQuestionEdit(index, question.questionId)} // Edit event handler
                />
              )}
              {question.questionType === "1" && (
                <YesNo
                  label={question}
                  onOptionSelect={(refOptionId, forwardQId) => {
                    if (index === enabledIndex) {
                      getNextQuestions(
                        question.questionId,
                        refOptionId,
                        forwardQId
                      );
                    }
                  }}
                  onEdit={() => handleQuestionEdit(index, question.questionId)} // Edit event handler
                />
              )}
            </div>
          ))}
        </div>

        {/* Alert dialog for editing a question */}
        <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          header={"Confirm Edit"}
          message={"Are you sure you want to edit this answer?"}
          buttons={[
            {
              text: "No",
              role: "cancel",
            },
            {
              text: "Yes",
              handler: () => {
                const forwardQId = visibleQuestions[2]?.options[0]?.forwardQId; // Example forwardQId logic
                handleAlertConfirm(visibleQuestions[2].questionId, forwardQId);
              },
            },
          ]}
        />
      </IonContent>
    </IonPage>
  );
};

export default Questions;
