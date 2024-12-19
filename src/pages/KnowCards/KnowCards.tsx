import React from "react";
import { useHistory } from "react-router-dom";

import risk from "../../assets/images/risk.jpg";
import symptoms from "../../assets/images/symptoms.jpg";
import vitals from "../../assets/images/vitals.jpg";
import blood from "../../assets/images/blood.jpg";
import menstrual from "../../assets/images/MENSTRURAL.jpg";

import "./KnowCards.css";

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

  function calculateFutureDate(daysToAdd:any) {
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

  return (
    <>
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
            The next report will be due in {14 - latestReport} days, on {calculateFutureDate(14-latestReport+1)}.
          </div>
        )}
      </div>
      <div className="listView"></div>
      <div className="grid-container ion-padding">
        {cardData.map((card) => (
          <div
            className={`grid-item ${
              latestReport > 14 || latestReport === null ? "" : "disabled-card"
            }`}
            key={card.refQCategoryId}
            onClick={() => {
              if (latestReport > 14 || latestReport === null) {
                handleCardClick(card.refQCategoryId, card.refCategoryLabel);
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
        ))}
      </div>
    </>
  );
};

export default KnowCards;
