import {
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
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
import MultipleSelect from "./MultipleSelect";
import TextInputBox from "./TextInputBox";
import TimeInputBox from "./TimeInputBox";

const Questions: React.FC = () => {
  const history = useHistory();
  // URL PARAMS
  const { refCategoryLabel, cardTitle } = useParams<{
    refCategoryLabel: string;
    cardTitle: string;
  }>();

  const [submitButton, setSubmitButton] = useState(true);

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

  const [submittedAnswer, setSubmittedAnswer] = useState<any>();

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

  const getNextQuestions = (
    questionId: any,
    questionType: any,
    answer: any,
    forwardQId: any
  ) => {
    setSubmitButton(true);
    console.log("forwardQId:", forwardQId);
    console.log("Answer submitted for questionId:", questionId, answer);

    // Convert forwardQId to a number, if not null
    let nextQuestionId = forwardQId ? parseInt(forwardQId, 10) : null;

    // Update the responses state
    setResponses((prevResponses) => {
      const responseMap = new Map(
        prevResponses.map((res) => [
          res.questionId,
          { questionType: res.questionType, answer: res.answer },
        ])
      );

      responseMap.set(questionId, { questionType, answer });

      const updatedResponses = Array.from(responseMap.entries()).map(
        ([id, value]) => ({
          questionId: id,
          questionType: value.questionType,
          answer: value.answer,
        })
      );

      // Submit the final updated responses if no next question exists
      if (!nextQuestionId) {
        setSubmitButton(false);
        setSubmittedAnswer(updatedResponses); // Use the updated responses here
        console.log("Submitting responses:", updatedResponses);
      }

      return updatedResponses;
    });

    if (questionId === 33) {
      const prevQuestion = responses[1].answer;
      const currentQuestion = answer;
      console.log(prevQuestion, currentQuestion, forwardQId);

      if (currentQuestion === 118) {
        if (prevQuestion === 113) {
          const nextQuestion = questionData.find(
            (q) => parseInt(q.questionId, 10) === 39
          );

          if (nextQuestion) {
            setVisibleQuestions((prevVisibleQuestions) => [
              ...prevVisibleQuestions,
              nextQuestion,
            ]);
            setEnabledIndex((prevIndex) => prevIndex + 1);
          }
        } else {
          const nextQuestion = questionData.find(
            (q) => parseInt(q.questionId, 10) === 34
          );

          if (nextQuestion) {
            setVisibleQuestions((prevVisibleQuestions) => [
              ...prevVisibleQuestions,
              nextQuestion,
            ]);
            setEnabledIndex((prevIndex) => prevIndex + 1);
          }
        }
      } else {
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
      }
    } else {
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
    }
  };

  const submitResponse = () => {
    console.log("updatedResponses", submittedAnswer);
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/postAnswers`,
          {
            patientId: patientId,
            categoryId: cardTitle,
            answers: submittedAnswer,
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
        )
        .then((response) => {
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
              // history.push(
              //   `/subCategories/${getQuestionsToken.id}/${getQuestionsToken.label}`
              // );
              history.goBack();
              setSubmittedAnswer([]);
            } else {
              console.error("getCategory is null or undefined");
            }
          }
        });
    } catch (error) {
      console.error("Error submitting responses:", error);
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

  const handleMultipleSelectEdit = (
    questionId: any,
    questionType: any,
    selectedOptions: any[],
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
    getNextQuestions(questionId, questionType, selectedOptions, forwardQnId);
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

  const [backwardQ, setBackwardQ] = useState({
    id: 0,
    label: "",
  });

  useEffect(() => {
    const categoryString: any = localStorage.getItem("getCategory");
    const categoryObject = JSON.parse(categoryString);

    setBackwardQ({
      id: categoryObject.id,
      label: categoryObject.label,
    });
  }, []);

  const handleInfoClick = () => {
    if (cardTitle === "8") {
      history.push("/physicalActivity/showCards");
    }
    if (cardTitle === "10") {
      history.push("/tobacoo/showCards");
    }
    if (cardTitle === "9") {
      history.push("/stress/showCards");
    }
  };

  const handleInstructionsClick = () => {
    if (cardTitle === "8") {
      history.push("/physicalActivity/instructions");
    }
    if (cardTitle === "10") {
      history.push("/tobacoo/instructions");
    }
    if (cardTitle === "9") {
      history.push("/stress/instructions");
    }
  };

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref={`/subCategories/${backwardQ.id}/${backwardQ.label}`}
            ></IonBackButton>
          </IonButtons>
          <IonTitle>{refCategoryLabel}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={handleInfoClick}>Info</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={handleInstructionsClick}>
              Instructions
            </IonButton>
          </IonButtons>
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
              {question.questionType === "2" && (
                <MultipleSelect
                  label={question}
                  onOptionSelect={(selectedOptions, forwardQId) => {
                    if (index === enabledIndex) {
                      // getNextQuestions(
                      //   question.questionId,
                      //   refOptionId,
                      //   forwardQId
                      // );
                    }
                  }}
                  onEdit={(selectedOptions, forwardQId) => {
                    handleMultipleSelectEdit(
                      question.questionId,
                      question.questionType,
                      selectedOptions,
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

              {question.questionType === "3" && (
                <TextInputBox
                  type="text"
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

              {question.questionType === "7" && (
                <TimeInputBox
                  type="text"
                  label={question}
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
      <IonFooter>
        <IonToolbar>
          <button
            disabled={submitButton}
            onClick={submitResponse}
            style={{
              width: "100%",
              height: "3rem",
              margin: "5px 0px",
              borderRadius: "5px",
              background: submitButton
                ? "linear-gradient(160deg, #d3d3d3, #e0e0e0)" // Gray for disabled
                : "linear-gradient(160deg, #077556, #2f9f97)", // Green for enabled
              color: submitButton ? "#a0a0a0" : "#fff", // Lighter text color for disabled
              fontSize: "16px",
              cursor: submitButton ? "not-allowed" : "pointer", // Change cursor for disabled
            }}
          >
            Submit
          </button>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Questions;
