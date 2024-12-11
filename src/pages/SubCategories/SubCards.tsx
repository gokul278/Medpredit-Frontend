import { IonAlert } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";
import decrypt from "../../helper";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
  refScore?: any;
  refScoreId?: any;
  UserScoreVerify?: any
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

  const handleScoreValue = (categoryId: any, score: any) => {
    console.log(categoryId);
    if (categoryId === 8) {
      if (score >= 150) {
        return (
          <div
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>Score: {score}</div>
            <div>No Risk</div>
          </div>
        );
      } else if (score < 150) {
        return (
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Substantial Risk</div>
          </div>
        );
      }
    } else if (categoryId === 9) {
      if (score <= 13) {
        return (
          <div
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Low Stress</div>
          </div>
        );
      } else if (score >= 14 && score <= 26) {
        return (
          <div
            style={{
              color: "#FCC737",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Moderate Stress</div>
          </div>
        );
      } else if (score >= 27) {
        return (
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>High Perceived Stress</div>
          </div>
        );
      }
    } else if (categoryId === 11) {
      if (score <= 7) {
        return (
          <div
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Zone 1</div>
          </div>
        );
      } else if (score >= 8 && score <= 15) {
        return (
          <div
            style={{
              color: "#FCC737",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Zone 2</div>
          </div>
        );
      } else if (score >= 16 && score <= 19) {
        return (
          <div
            style={{
              color: "#F26B0F",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Zone 3</div>
          </div>
        );
      } else if (score >= 20) {
        return (
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Zone 4</div>
          </div>
        );
      }
    } else if (categoryId === 12) {
      if (score <= 7) {
        return (
          <div
            style={{
              color: "green",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div>Score: {score}</div>
            <div>Low risk</div>
          </div>
        );
      } else if (score > 7) {
        return (
          <div
            style={{
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ fontSize: "16px" }}>Score: {score}</div>
            <div style={{ fontSize: "14px" }}>Substantial Risk</div>
          </div>
        );
      }
    }
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
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              alt="Card Thumbnail"
            />
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
