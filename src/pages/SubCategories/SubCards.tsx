import { IonAlert } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import decrypt from "../../helper";

import physical from "../../assets/images/physical.png";
import stress from "../../assets/images/stress.png";
import tobacco from "../../assets/images/tobacco.png";
import alcohol from "../../assets/images/alcohol.png";
import dietry from "../../assets/images/DIATERY-01.png";
import bmi from "../../assets/images/bmi.png";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
  refScore?: any;
  refScoreId?: any;
  UserScoreVerify?: any;
}

interface SubCardsProps {
  data: CardData[];
  categoryId: string;
  categroyName: string;
}

const SubCards: React.FC<SubCardsProps> = ({
  data,
  categoryId,
  categroyName,
}) => {
  const history = useHistory();

  const handleCardClick = (cardTitle: any, refCategoryLabel: any) => {
    history.push(`/questions/${refCategoryLabel}/${cardTitle}`);
  };

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [selectedData, setSelectedData] = useState({
    cardTitle: "",
    refCategoryLabel: 0,
    refScoreId: "",
    refQCategoryId: 0,
  });

  const getImage = (refQCategoryId: number) => {
    switch (refQCategoryId) {
      case 8:
        return physical;
      case 9:
        return stress;
      case 10:
        return tobacco;
      case 11:
        return alcohol;
      case 12:
        return dietry;
      case 13:
        return bmi;
      default:
        return "https://via.placeholder.com/150";
    }
  };

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
            handleCardClick(
              selectedData.refCategoryLabel,
              selectedData.cardTitle
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

  const handleScoreValue = (UserScoreVerify: any, refScore: any) => {
    let label = "";
    let scoreValue = "";
    let color = "";

    UserScoreVerify.map((element: any) => {
      switch (element.refAction) {
        case "equal":
          if (refScore.toString() === element.refValue.toString()) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        case "lessThanEqual":
          if (parseFloat(refScore) <= parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        case "greaterThanEqual":
          if (parseFloat(refScore) >= parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        case "lessThan":
          if (parseFloat(refScore) < parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        case "greaterThan":
          if (parseFloat(refScore) > parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        case "rangeEqual":
          const [firstVal, secondVal] = element.refValue
            .split(",")
            .map(parseFloat);

          if (
            parseFloat(firstVal) <= parseFloat(refScore) &&
            parseFloat(refScore) <= parseFloat(secondVal)
          ) {
            label = element.refAnswerLabel;
            scoreValue = refScore;
            color = element.refScoreColor;
            break;
          }
          break;

        default:
          console.log("Unknown refAction:", element.refAction);
      }
    });

    return (
      <div
        style={{
          color: `${color}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>Score: {scoreValue}</div>
        <div>{label}</div>
      </div>
    );
  };

  return (
    <div className="subCardContents ion-padding-top">
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
      {data.map((card) => (
        <div key={card.refQCategoryId}>
          <div
            className="subCards"
            onClick={() => {
              if (card.refScore === null) {
                handleCardClick(card.refQCategoryId, card.refCategoryLabel);
              } else {
                setIsAlertOpen(true);
                setSelectedData({
                  refScoreId: card.refScoreId,
                  refCategoryLabel: card.refQCategoryId,
                  cardTitle: card.refCategoryLabel,
                  refQCategoryId: card.refQCategoryId,
                });
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <img src={getImage(card.refQCategoryId)} alt="Card Thumbnail" />
            <div className="cardConts">
              <div className="cardHeader">
                <p
                  className="factorHeading"
                  style={{
                    fontSize: "18px",
                    fontWeight: "600",
                    color: "#373A40",
                  }}
                >
                  {card.refCategoryLabel}
                </p>
                <div className="circularProgress">
                  {card.refScore === null ? (
                    <div style={{ color: "#607274" }}>
                      <i
                        className="pi pi-angle-right"
                        style={{ fontSize: "2rem" }}
                      ></i>
                    </div>
                  ) : (
                    <>{handleScoreValue(card.UserScoreVerify, card.refScore)}</>
                  )}
                </div>
              </div>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};

export default SubCards;
