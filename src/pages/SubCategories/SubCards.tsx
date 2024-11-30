import { Divider } from "primereact/divider";
import React from "react";
import { useHistory } from "react-router";

interface CardData {
  refQCategoryId: number;
  refCategoryLabel: string;
  refScore?: any;
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

  return (
    <div className="subCardContents ion-padding-top">
      {data.map((card) => (
        <>
          <div
            key={card.refQCategoryId}
            className="subCards"
            onClick={() => {
              if (card.refScore === null) {
                handleCardClick(card.refQCategoryId, card.refCategoryLabel);
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
                    fontSize: "20px",
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
                    <div style={{ color: "green" }}>{card.refScore}</div>
                  )}
                  {/* <svg
                    width="50"
                    height="50"
                    viewBox="0 0 36 36"
                    className="circularChart"
                  >
                    <path
                      className="circleBackground"
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray={`${card.completionPercentage}, 100`}
                      d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg> */}
                </div>
              </div>
              {/* <div className="cardSecHeader">
                <p>
                  Form Filled by: <span>{card.filledBy}</span>
                </p>
              </div>
              <div className="cardSecHeader">
                <p>Form Filled Date: {card.filledDate}</p>
              </div> */}
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default SubCards;
