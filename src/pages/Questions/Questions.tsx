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

import { useHistory, useParams } from "react-router-dom";
import MultiInputBox from "./MultiInputBox";
import Checkbox from "./Checkbox";
import YesNo from "./YesNo";
import axios from "axios";
import decrypt from "../../helper";
import SingleInputBox from "./SingleInputBox";
import HrsMins from "./HrsMins";
import NumberInputBoxT6 from "./NumberInputBoxT6";
import NumberInputBoxT4 from "./NumberInputBoxT4";

const Questions: React.FC = () => {
  const history = useHistory();
  // URL PARAMS
  const { refCategoryLabel, cardTitle } = useParams<{
    refCategoryLabel: string;
    cardTitle: string;
  }>();

  useEffect(() => {
    const getCategory = {
      id: cardTitle,
      label: refCategoryLabel,
    };

    localStorage.setItem("getQuestions", JSON.stringify(getCategory));
  }, []);

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
    { questionId: any; questionType: any; answer: any }[]
  >([]);

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
          console.log(data.questions);

          setQuestionsData(data.questions);
          console.log("data.questions", data.questions);
          setVisibleQuestions([data.questions[0]]);
        }
      });
  };

  const getNextQuestions = async (
    questionId: any,
    questionType: any,
    answer: any,
    forwardQId: any
  ) => {
    console.log("forwardQId:", questionType);
    console.log("Answer submitted for questionId:", questionId, answer);

    // Convert forwardQId to a number, if not null
    const nextQuestionId = forwardQId ? parseInt(forwardQId, 10) : null;

    // Update the responses state
    setResponses((prevResponses) => {
      const responseMap = new Map(
        prevResponses.map((res) => [
          res.questionId,
          { questionType: res.questionType, answer: res.answer },
        ])
      );

      responseMap.set(questionId, { questionType, answer });

      return Array.from(responseMap.entries()).map(([id, value]) => ({
        questionId: id,
        questionType: value.questionType,
        answer: value.answer,
      }));
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
    } else {
      // Submit responses if no next question exists
      const updatedResponses = responses; // Make sure `responses` reflects the current state

      console.log("Submitting responses:", updatedResponses);

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/postAnswers`,
          {
            patientId: patientId,
            categoryId: cardTitle,
            answers: updatedResponses,
            employeeId: localStorage.getItem("currentDoctorId")
              ? localStorage.getItem("currentDoctorId")
              : null,
            hospitalId: localStorage.getItem("hospitalId"),
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.status) {
          const getCategory = localStorage.getItem("getCategory");
          if (getCategory) {
            const getQuestionsToken = JSON.parse(getCategory);
            getQuestions();
            setResponses([]);
            history.push(
              `/subCategories/${getQuestionsToken.id}/${getQuestionsToken.label}`
            );
          } else {
            console.error("getCategory is null or undefined");
          }
        }

        console.log("Responses submitted successfully:", data);
      } catch (error) {
        console.error("Error submitting responses:", error);
      }
    }
  };

  const handleQuestionEdit = (
    questionId: any,
    questionType: any,
    refOptionId: number,
    forwardQnId: any
  ) => {
    if (responses) {
      responses.map((res) => {
        if (res.questionId === questionId) {
          console.log("Response found - editing");
          const index = visibleQuestions.findIndex(
            (visibleQns) => visibleQns.questionId === questionId
          );
          if (index !== -1) {
            const newVisibleQuestions = visibleQuestions.slice(0, index + 1);
            console.log("Visible qns", visibleQuestions);
            console.log("Response data", responses);
            console.log("Edited");
            setVisibleQuestions(newVisibleQuestions);
          }
        }
      });
    }
    getNextQuestions(questionId, questionType, refOptionId, forwardQnId);
  };

  const handleHrsEdit = (
    questionId: any,
    questionType: any,
    hrsValue: any,
    minsValue: any,
    forwardQnId: any
  ) => {
    console.log("questionType", questionType);
    if (responses) {
      responses.map((res) => {
        if (res.questionId === questionId) {
          console.log("Response found - editing");
          const index = visibleQuestions.findIndex(
            (visibleQns) => visibleQns.questionId === questionId
          );
          if (index !== -1) {
            const newVisibleQuestions = visibleQuestions.slice(0, index + 1);
            console.log("Visible qns", visibleQuestions);
            console.log("Response data", responses);
            console.log("Edited");
            setVisibleQuestions(newVisibleQuestions);
          }
        }
      });
    }

    const resultValue = hrsValue + ":" + minsValue;
    getNextQuestions(questionId, questionType, resultValue, forwardQnId);
  };

  useEffect(() => {
    if (token) {
      try {
        getQuestions();
      } catch (error) {
        console.log("Error fetching questions");
      }
    }
  }, [token]);

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
              {question.questionType === "6" && (
                <NumberInputBoxT6
                  type="number"
                  label={question}
                  onClickOpt={(value, questionId, forwardQId) => {
                    if (index === enabledIndex) {
                      console.log("-------------------->onEdit Triggered");
                      // getNextQuestions(
                      //   questionId,
                      //   question.questionType,
                      //   parseInt(value),
                      //   forwardQId
                      // );
                    }
                  }}
                  onEdit={(questionType, value, forwardQId) => {
                    handleQuestionEdit(
                      question.questionId,
                      questionType,
                      value,
                      forwardQId
                    );
                  }}
                />
              )}

              {question.questionType === "1" && (
                <YesNo
                  label={question}
                  onOptionSelect={(refOptionId, forwardQId) => {
                    if (index === enabledIndex) {
                      // getNextQuestions(
                      //   question.questionId,
                      //   refOptionId,
                      //   forwardQId
                      // );
                    }
                  }}
                  onEdit={(questionType, refOptionId, forwardQId) => {
                    handleQuestionEdit(
                      question.questionId,
                      questionType,
                      refOptionId,
                      forwardQId
                    );
                  }}
                />
              )}

              {question.questionType === "5" && (
                <HrsMins
                  type="text"
                  label={question}
                  onEdit={(questionType, hrsValue, minsValue, forwardQId) => {
                    handleHrsEdit(
                      question.questionId,
                      questionType,
                      hrsValue,
                      minsValue,
                      forwardQId
                    );
                  }}
                />
              )}

              {question.questionType === "4" && (
                <NumberInputBoxT4
                  type="number"
                  label={question}
                  onClickOpt={(value, questionId, forwardQId) => {
                    if (index === enabledIndex) {
                      console.log("-------------------->onEdit Triggered");
                      // getNextQuestions(
                      //   questionId,
                      //   question.questionType,
                      //   parseInt(value),
                      //   forwardQId
                      // );
                    }
                  }}
                  onEdit={(questionType, value, forwardQId) => {
                    handleQuestionEdit(
                      question.questionId,
                      questionType,
                      value,
                      forwardQId
                    );
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Questions;
