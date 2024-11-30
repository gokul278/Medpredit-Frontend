import React from "react";
import { useHistory } from "react-router-dom";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
}

interface KnowCardsValues {
  cardData: CardData[];
}

const KnowCards: React.FC<KnowCardsValues> = ({ cardData }) => {
  const history = useHistory();

  const handleCardClick = (categoryId: number, categroyName: string) => {
    history.push(`/subCategories/${categoryId}/${categroyName}`);
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
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
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
