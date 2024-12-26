import {
  IonAccordion,
  IonAccordionGroup,
  IonAlert,
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import decrypt from "../../helper";
import { Divider } from "primereact/divider";
import { ScoreVerify } from "../../ScoreVerify";
import { FaChevronRight, FaUserDoctor } from "react-icons/fa6";
import "./CurrentReport.css";

const CurrentReport: React.FC = () => {
  const history = useHistory();

  const { patient, patientId } = useParams<{
    patient: string;
    patientId: string;
  }>();

  const [doctorDetail, setDoctorDetail] = useState({
    doctorName: "",
    doctorId: "",
    hospital: "",
    hospitalAddress: "",
  });

  const [patientDetail, setPatientDetail] = useState({
    address1: "",
    address2: "",
    age: "",
    gender: "",
    patientId: "",
    patientName: "",
  });

  const [allCategory, setAllCategory] = useState<any[]>([]);

  const [allScore, setAllScore] = useState<any[]>([]);

  const [allScorVerify, setAllScoreVerify] = useState<any[]>([]);

  const [stressAnswer, setStressAnswer] = useState<any[]>([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("userDetails");
    const patientId = localStorage.getItem("currentPatientId");

    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getCurrentReportData `,
            {
              patientId: patientId,
              employeeId:
                tokenObject.roleType === 1
                  ? null
                  : localStorage.getItem("currentDoctorId"),
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

            setDoctorDetail({
              doctorName: data.doctorDetail.doctorName,
              doctorId: data.doctorDetail.doctorId,
              hospital: data.doctorDetail.hospital,
              hospitalAddress: data.doctorDetail.hospitalAddress,
            });

            setPatientDetail({
              address1: data.patientDetail.address1,
              address2: data.patientDetail.address2,
              age: data.patientDetail.age,
              gender: data.patientDetail.gender,
              patientId: data.patientDetail.patientId,
              patientName: data.patientDetail.patientName,
            });

            setAllScoreVerify(data.allScoreVerify);

            setAllCategory(data.allCategory);

            setAllScore(data.allScore);

            setStressAnswer(data.stressAnswer);

            console.log(data);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  }, []);

  const getTodayDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = today.getFullYear();

    return `${day}-${month}-${year}`;
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleFinalReport = () => {
    const tokenString = localStorage.getItem("userDetails");
    const patientId = localStorage.getItem("currentPatientId");

    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/createReport `,
            {
              patientId: patientId,
              employeeId:
                tokenObject.roleType === 1
                  ? null
                  : localStorage.getItem("currentDoctorId"),
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
              history.push(`/knowAbout/${patient}/${patientId}`);
            }

            console.log(data);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  };

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons
            onClick={() => {
              history.goBack();
            }}
            slot="start"
          >
            <IonBackButton
              mode="md"
              defaultHref={`/knowAbout/${patient}/${patientId}`}
            ></IonBackButton>
          </IonButtons>
          <IonTitle>
            <div>
              <div style={{ fontSize: "15px" }}>
                {patientDetail.patientName} (Age: {patientDetail.age})
              </div>
              <div style={{ fontSize: "14px" }}>
                Report Date {getTodayDate()}
              </div>
            </div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding" fullscreen>
        <IonAlert
          isOpen={isAlertOpen}
          cssClass="custom-alert"
          header="Are you sure to process the report ?"
          backdropDismiss={false}
          buttons={[
            {
              text: "Yes",
              role: "confirm",
              handler: () => {
                setIsAlertOpen(false);
                handleFinalReport();
              },
              cssClass: "yes-button",
            },
            {
              text: "No",
              role: "cancel",
              handler: () => {},
              cssClass: "no-button",
            },
          ]}
          onDidDismiss={() => setIsAlertOpen(false)}
        />

        <div
          style={{
            width: "100%",
            borderRadius: "5px",
            color: "#fff",
            fontWeight: "700",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={openModal}
        >
          <div
            style={{
              fontSize: "25px",
              background: "#1c70b0",
              padding: "10px 10px 5px 10px",
              borderRadius: "10px",
            }}
          >
            <FaUserDoctor />
          </div>
        </div>

        <IonModal
          isOpen={isOpen}
          id="doctorDetailsGraph"
          initialBreakpoint={1}
          onDidDismiss={closeModal}
          animated={false}
        >
          <div className="doctor-modal-content">
            {/* Header */}
            <div className="doctor-modal-header">Doctor Details</div>

            {/* Content */}
            <div className="doctor-modal-details">
              <div>
                Dr. {doctorDetail.doctorName} ({doctorDetail.doctorId})
              </div>
              <div>{doctorDetail.hospital},</div>
              <div>{doctorDetail.hospitalAddress}</div>
            </div>

            {/* Close Button */}
            <button className="doctor-modal-close-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </IonModal>

        <div>
          {allCategory && allCategory.length > 0
            ? allCategory.map((MainCategory: any) => (
                <>
                  {MainCategory.refQSubCategory === "0" ? (
                    <div
                      style={{
                        background: "#f7f7f7",
                        padding: "10px",
                        borderRadius: "5px",
                        marginTop: "20px",
                        boxShadow:
                          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
                      }}
                    >
                      <div style={{ fontSize: "16px" }}>
                        {MainCategory.refCategoryLabel}

                        <IonAccordionGroup>
                          {allCategory.map((subCategory) => {
                            const isMatchingCategory =
                              subCategory.refQSubCategory ===
                              MainCategory.refQCategoryId.toString();

                            return isMatchingCategory ? (
                              <>
                                {localStorage
                                  .getItem("currentPatientGender")
                                  ?.toString() === "male" &&
                                subCategory.refQCategoryId.toString() ===
                                  "5" ? (
                                  <></>
                                ) : (
                                  <IonAccordion
                                    key={subCategory.refQCategoryId}
                                    value={subCategory.refQCategoryId}
                                  >
                                    <IonItem slot="header" color="light">
                                      <IonLabel>
                                        {subCategory.refCategoryLabel}
                                      </IonLabel>
                                    </IonItem>
                                    <div className="ion-padding" slot="content">
                                      {allCategory.map((category, index) => (
                                        <>
                                          {subCategory.refQCategoryId === 5 ||
                                          subCategory.refQCategoryId === 6 ? (
                                            <>
                                              {index === 0 ? (
                                                <>
                                                  <div
                                                    style={{
                                                      textDecoration:
                                                        "underline",
                                                    }}
                                                  >
                                                    Insights
                                                  </div>
                                                  <div
                                                    style={{
                                                      marginTop: "10px",
                                                      display: "flex",
                                                      flexDirection: "column",
                                                      gap: "10px",
                                                      background: "#F2F9FF",
                                                      padding: "10px",
                                                      borderRadius: "5px",
                                                    }}
                                                  >
                                                    {allCategory
                                                      .filter(
                                                        (insights) =>
                                                          insights.refQSubCategory ===
                                                          subCategory.refQCategoryId.toString()
                                                      )
                                                      .map((insights, bbb) => (
                                                        <div
                                                          key={bbb}
                                                          style={{
                                                            marginTop: "10px",
                                                          }}
                                                        >
                                                          <div
                                                            style={{
                                                              color: "red",
                                                            }}
                                                          >
                                                            {
                                                              insights.refCategoryLabel
                                                            }
                                                          </div>
                                                          <div
                                                            style={{
                                                              marginTop: "5px",
                                                            }}
                                                          >
                                                            {allScore
                                                              .filter(
                                                                (answer) =>
                                                                  answer.refQCategoryId ===
                                                                  insights.refQCategoryId.toString()
                                                              )
                                                              .map(
                                                                (
                                                                  answer,
                                                                  aaa
                                                                ) => (
                                                                  <>
                                                                    {aaa ===
                                                                    0 ? (
                                                                      <div
                                                                        key={
                                                                          aaa
                                                                        }
                                                                      >
                                                                        {answer
                                                                          .refPTScore
                                                                          .length >
                                                                        0
                                                                          ? `${answer.refPTScore}`
                                                                          : "NULL"}
                                                                      </div>
                                                                    ) : null}
                                                                  </>
                                                                )
                                                              )}
                                                            {allCategory
                                                              .filter(
                                                                (element) =>
                                                                  element.refQSubCategory ===
                                                                  insights.refQCategoryId.toString()
                                                              )
                                                              .map(
                                                                (
                                                                  element,
                                                                  idx
                                                                ) => (
                                                                  <div
                                                                    key={idx}
                                                                    style={{
                                                                      marginTop:
                                                                        "10px",
                                                                      color:
                                                                        "red",
                                                                    }}
                                                                  >
                                                                    {
                                                                      element.refCategoryLabel
                                                                    }
                                                                    <div
                                                                      style={{
                                                                        marginTop:
                                                                          "5px",
                                                                      }}
                                                                    >
                                                                      {allScore
                                                                        .filter(
                                                                          (
                                                                            answer
                                                                          ) =>
                                                                            answer.refQCategoryId ===
                                                                            element.refQCategoryId.toString()
                                                                        )
                                                                        .map(
                                                                          (
                                                                            answer,
                                                                            index
                                                                          ) => (
                                                                            <div
                                                                              key={
                                                                                index
                                                                              }
                                                                            >
                                                                              {answer
                                                                                .refPTScore
                                                                                .length >
                                                                              0
                                                                                ? answer.refPTScore
                                                                                : "NULL"}
                                                                            </div>
                                                                          )
                                                                        )}
                                                                    </div>
                                                                  </div>
                                                                )
                                                              )}
                                                          </div>
                                                        </div>
                                                      ))}
                                                  </div>
                                                </>
                                              ) : null}
                                            </>
                                          ) : (
                                            <>
                                              {category.refQSubCategory ===
                                              subCategory.refQCategoryId.toString() ? (
                                                <IonAccordionGroup>
                                                  <IonAccordion
                                                    key={
                                                      category.refQCategoryId
                                                    }
                                                    value={
                                                      category.refQCategoryId
                                                    }
                                                  >
                                                    <IonItem
                                                      slot="header"
                                                      color="light"
                                                    >
                                                      <IonLabel>
                                                        {
                                                          category.refCategoryLabel
                                                        }
                                                      </IonLabel>
                                                    </IonItem>
                                                    <div
                                                      className="ion-padding"
                                                      slot="content"
                                                    >
                                                      {category.refQCategoryId ===
                                                      51 ? (
                                                        <></>
                                                      ) : (
                                                        <>
                                                          <div
                                                            style={{
                                                              display: "flex",
                                                              justifyContent:
                                                                "space-between",
                                                            }}
                                                          >
                                                            <div
                                                              style={{
                                                                textDecoration:
                                                                  "underline",
                                                              }}
                                                            >
                                                              Summary
                                                            </div>
                                                            <div>
                                                              <div>
                                                                {allScore.map(
                                                                  (answer) => {
                                                                    if (
                                                                      answer.refQCategoryId ===
                                                                      category.refQCategoryId.toString()
                                                                    ) {
                                                                      const totalScore: any =
                                                                        [];

                                                                      allScorVerify.forEach(
                                                                        (
                                                                          scoresVerify
                                                                        ) => {
                                                                          if (
                                                                            scoresVerify.refQCategoryId ==
                                                                            category.refQCategoryId
                                                                          ) {
                                                                            totalScore.push(
                                                                              scoresVerify
                                                                            );
                                                                          }
                                                                        }
                                                                      );

                                                                      return (
                                                                        <div
                                                                          key={
                                                                            answer.refQCategoryId
                                                                          }
                                                                        >
                                                                          <ScoreVerify
                                                                            userScoreVerify={
                                                                              totalScore
                                                                            } // Pass the totalScore directly
                                                                            refScore={
                                                                              answer.refPTScore
                                                                            }
                                                                          />
                                                                        </div>
                                                                      );
                                                                    }
                                                                    return null;
                                                                  }
                                                                )}
                                                              </div>
                                                            </div>
                                                          </div>
                                                          <Divider />
                                                        </>
                                                      )}
                                                      <div
                                                        style={{
                                                          textDecoration:
                                                            "underline",
                                                        }}
                                                      >
                                                        Insights
                                                      </div>
                                                      <div
                                                        style={{
                                                          marginTop: "10px",
                                                          display: "flex",
                                                          flexDirection:
                                                            "column",
                                                          gap: "10px",
                                                          background: "#F2F9FF",
                                                          padding: "10px",
                                                          borderRadius: "5px",
                                                        }}
                                                      >
                                                        {allCategory.map(
                                                          (insights) => (
                                                            <>
                                                              {insights.refQSubCategory ===
                                                              category.refQCategoryId.toString() ? (
                                                                <>
                                                                  <div
                                                                    style={{
                                                                      marginTop:
                                                                        "10px",
                                                                    }}
                                                                  >
                                                                    <div
                                                                      style={{
                                                                        color:
                                                                          "red",
                                                                      }}
                                                                    >
                                                                      {
                                                                        insights.refCategoryLabel
                                                                      }
                                                                    </div>
                                                                    <div
                                                                      style={{
                                                                        marginTop:
                                                                          "5px",
                                                                      }}
                                                                    >
                                                                      {allScore.map(
                                                                        (
                                                                          answer
                                                                        ) =>
                                                                          answer.refQCategoryId ===
                                                                          insights.refQCategoryId.toString() ? (
                                                                            <>
                                                                              {answer.refQCategoryId ===
                                                                              "21" ? (
                                                                                <>
                                                                                  {answer
                                                                                    .refPTScore
                                                                                    .length >
                                                                                  0 ? (
                                                                                    <>
                                                                                      {
                                                                                        answer.refPTScore.split(
                                                                                          ":"
                                                                                        )[0]
                                                                                      }{" "}
                                                                                      hrs{" "}
                                                                                      {
                                                                                        answer.refPTScore.split(
                                                                                          ":"
                                                                                        )[1]
                                                                                      }{" "}
                                                                                      mins
                                                                                    </>
                                                                                  ) : (
                                                                                    <>
                                                                                      Null
                                                                                    </>
                                                                                  )}
                                                                                </>
                                                                              ) : answer.refQCategoryId ===
                                                                                  "25" ||
                                                                                answer.refQCategoryId ===
                                                                                  "26" ||
                                                                                answer.refQCategoryId ===
                                                                                  "27" ||
                                                                                answer.refQCategoryId ===
                                                                                  "28" ? (
                                                                                <>
                                                                                  {answer.refPTScore
                                                                                    .split(
                                                                                      ","
                                                                                    )
                                                                                    .map(
                                                                                      (
                                                                                        score: any,
                                                                                        index: any
                                                                                      ) => (
                                                                                        <div
                                                                                          key={
                                                                                            index
                                                                                          }
                                                                                          style={{
                                                                                            marginTop:
                                                                                              "",
                                                                                          }}
                                                                                        >
                                                                                          {index +
                                                                                            1}

                                                                                          .{" "}
                                                                                          {
                                                                                            stressAnswer.find(
                                                                                              (
                                                                                                ans: any
                                                                                              ) =>
                                                                                                ans.refOptionId.toString() ===
                                                                                                score
                                                                                            )
                                                                                              ?.refOptionLabel
                                                                                          }
                                                                                        </div>
                                                                                      )
                                                                                    )}
                                                                                </>
                                                                              ) : (
                                                                                <>
                                                                                  {answer
                                                                                    .refPTScore
                                                                                    .length >
                                                                                  0 ? (
                                                                                    <>
                                                                                      {
                                                                                        answer.refPTScore
                                                                                      }
                                                                                    </>
                                                                                  ) : (
                                                                                    <>
                                                                                      Null
                                                                                    </>
                                                                                  )}
                                                                                </>
                                                                              )}
                                                                            </>
                                                                          ) : null
                                                                      )}

                                                                      <>
                                                                        {allCategory.map(
                                                                          (
                                                                            element
                                                                          ) =>
                                                                            element.refQSubCategory ===
                                                                            insights.refQCategoryId.toString() ? (
                                                                              <>
                                                                                <div
                                                                                  style={{
                                                                                    marginTop:
                                                                                      "10px",
                                                                                    color:
                                                                                      "red",
                                                                                  }}
                                                                                >
                                                                                  {
                                                                                    element.refCategoryLabel
                                                                                  }
                                                                                </div>
                                                                                <div
                                                                                  style={{
                                                                                    marginTop:
                                                                                      "5px",
                                                                                  }}
                                                                                >
                                                                                  {allScore.map(
                                                                                    (
                                                                                      answer
                                                                                    ) =>
                                                                                      answer.refQCategoryId ===
                                                                                      element.refQCategoryId.toString() ? (
                                                                                        <>
                                                                                          {answer
                                                                                            .refPTScore
                                                                                            .length >
                                                                                          0 ? (
                                                                                            <>
                                                                                              {
                                                                                                answer.refPTScore
                                                                                              }
                                                                                            </>
                                                                                          ) : (
                                                                                            <>
                                                                                              NULL
                                                                                            </>
                                                                                          )}
                                                                                        </>
                                                                                      ) : null
                                                                                  )}
                                                                                </div>
                                                                              </>
                                                                            ) : (
                                                                              <>

                                                                              </>
                                                                            )
                                                                        )}
                                                                      </>
                                                                    </div>
                                                                  </div>
                                                                </>
                                                              ) : null}
                                                            </>
                                                          )
                                                        )}
                                                      </div>
                                                    </div>
                                                  </IonAccordion>
                                                </IonAccordionGroup>
                                              ) : null}
                                            </>
                                          )}
                                        </>
                                      ))}
                                    </div>
                                  </IonAccordion>
                                )}
                              </>
                            ) : null;
                          })}
                        </IonAccordionGroup>
                      </div>
                    </div>
                  ) : null}
                </>
              ))
            : null}
        </div>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <button
            style={{
              width: "100%",
              height: "3rem",
              margin: "5px 0px",
              borderRadius: "5px",
              background: "linear-gradient(160deg, #077556, #2f9f97)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
            }}
            onClick={() => {
              setIsAlertOpen(true);
            }}
          >
            Generate Report
          </button>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default CurrentReport;
