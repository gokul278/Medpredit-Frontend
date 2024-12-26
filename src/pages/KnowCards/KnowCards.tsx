import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import risk from "../../assets/images/risk.jpg";
import symptoms from "../../assets/images/symptoms.jpg";
import vitals from "../../assets/images/vitals.jpg";
import blood from "../../assets/images/blood.jpg";
import menstrual from "../../assets/images/MENSTRURAL.jpg";
import Axios from "axios";

import "./KnowCards.css";
import decrypt from "../../helper";
import { IonAlert } from "@ionic/react";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
}

interface KnowCardsValues {
  cardData: CardData[];
  latestReport: any;
}

const KnowCards: React.FC<KnowCardsValues> = ({ cardData, latestReport }) => {
  console.log("cardData", cardData);
  const history = useHistory();

  const handleCardClick = (categoryId: number, categroyName: string) => {
    history.push(`/subCategories/${categoryId}/${categroyName}`);
  };

  function calculateFutureDate(daysToAdd: any) {
    const today = new Date(); // Get today's date
    today.setDate(today.getDate() + daysToAdd); // Add the given number of days
    return today.toLocaleDateString("en-GB"); // Format the date (dd-mm-yyyy)
  }

  const getImage = (refQCategoryId: number) => {
    switch (refQCategoryId) {
      case 4:
        return risk;
      case 5:
        return menstrual;
      case 6:
        return vitals;
      case 7:
        return blood;
      default:
        return "https://via.placeholder.com/150";
    }
  };

  const checkSore = (refQCategoryId: any, refCategoryLabel: any) => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        Axios.post(
          `${import.meta.env.VITE_API_URL}/getQuestionScore `,
          {
            patientId: localStorage.getItem("currentPatientId"),
            categoryId: refQCategoryId,
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        ).then((response) => {
          const data = decrypt(
            response.data[1],
            response.data[0],
            import.meta.env.VITE_ENCRYPTION_KEY
          );

          if (data.status) {
            setIsAlertOpen(true);
            setSelectedData({
              refScoreId: "0",
              refCategoryLabel: refCategoryLabel,
              cardTitle: refQCategoryId,
              refQCategoryId: refQCategoryId,
            });
          } else {
            history.push(`/questions/${refCategoryLabel}/${refQCategoryId}`);
          }
        });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [selectedData, setSelectedData] = useState({
    cardTitle: "",
    refCategoryLabel: 0,
    refScoreId: "",
    refQCategoryId: 0,
  });

  const handleremoveScore = () => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        Axios.post(
          `${import.meta.env.VITE_API_URL}/resetScore `,
          {
            refPatientId: localStorage.getItem("currentPatientId"),
            refQCategoryId: selectedData.refQCategoryId,
            refHospitalId: localStorage.getItem("hospitalId"),
            employeeId:
              tokenObject.roleType === 1
                ? null
                : localStorage.getItem("currentDoctorId"),
          },
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        ).then((response) => {
          const data = decrypt(
            response.data[1],
            response.data[0],
            import.meta.env.VITE_ENCRYPTION_KEY
          );

          if (data.status) {
            history.push(
              `/questions/${selectedData.refCategoryLabel}/${selectedData.refQCategoryId}`
            );
          }
        });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  };

  return (
    <>
      <IonAlert
        isOpen={isAlertOpen}
        cssClass="custom-alert"
        header="Do you want to re-enter the question?"
        backdropDismiss={false}
        buttons={[
          {
            text: "Yes",
            role: "confirm",
            handler: () => {
              setIsAlertOpen(false);
              handleremoveScore();
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
      <div>
        {latestReport > 14 || latestReport === null ? (
          <></>
        ) : (
          <div
            style={{
              color: "#000",
              fontSize: "14px",
              textAlign: "center",
              padding: "10px",
              margin: "10px",
              background: "#e6e6e6",
              borderRadius: "5px",
            }}
          >
            <div>
              The current report is valid till{" "}
              {calculateFutureDate(14 - latestReport)}
            </div>
            <div>
              {" "}
              New assessment take on{" "}
              {calculateFutureDate(14 - latestReport + 1)}
            </div>
          </div>
        )}
      </div>
      <div className="listView"></div>
      <div className="grid-container ion-padding">
        {cardData.map((card) => (
          <>
            {localStorage.getItem("currentPatientGender") === "male" &&
            card.refQCategoryId.toString() === "5" ? (
              <></>
            ) : (
              <div
                className={`grid-item ${
                  latestReport > 14 || latestReport === null
                    ? ""
                    : "disabled-card"
                }`}
                key={card.refQCategoryId}
                onClick={() => {
                  if (latestReport > 14 || latestReport === null) {
                    if (
                      card.refQCategoryId === 5 ||
                      card.refQCategoryId === 6
                    ) {
                      checkSore(card.refQCategoryId, card.refCategoryLabel);
                    } else {
                      handleCardClick(
                        card.refQCategoryId,
                        card.refCategoryLabel
                      );
                    }
                  }
                }}
              >
                <div className="knowCard">
                  <img
                    style={{
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                    src={getImage(card.refQCategoryId)}
                    alt={card.refCategoryLabel}
                  />
                  <p>{card.refCategoryLabel}</p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default KnowCards;
