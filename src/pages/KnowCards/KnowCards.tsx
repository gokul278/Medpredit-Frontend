import React from "react";
import { useHistory } from "react-router-dom";

import risk from "../../assets/images/risk.jpg";
import symptoms from "../../assets/images/symptoms.jpg";
import vitals from "../../assets/images/vitals.jpg";
import blood from "../../assets/images/blood.jpg";
import menstrual from "../../assets/images/MENSTRURAL.jpg";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
}

interface KnowCardsValues {
  cardData: CardData[];
}

const KnowCards: React.FC<KnowCardsValues> = ({ cardData }) => {
  console.log("cardData", cardData);
  const history = useHistory();

  const handleCardClick = (categoryId: number, categroyName: string) => {
    history.push(`/subCategories/${categoryId}/${categroyName}`);
  };

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
      <div className="listView"></div>
      <div className="grid-container ion-padding">
        {cardData.map((card) => (
          <div
            className="grid-item"
            key={card.refQCategoryId}
            onClick={() =>
              handleCardClick(card.refQCategoryId, card.refCategoryLabel)
            }
          >
            <div className="knowCard">
              <img
                style={{
                  borderTopRightRadius: "10px",
                  borderTopLeftRadius: "10px",
                }}
                src={getImage(card.refQCategoryId)}
                alt={card.refCategoryLabel}
              />{" "}
              <p>{card.refCategoryLabel}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default KnowCards;
