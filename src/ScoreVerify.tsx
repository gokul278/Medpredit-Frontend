import { Text } from "@react-pdf/renderer";
import React from "react";

interface UserScoreElement {
  refAction: string;
  refValue: string;
  refAnswerLabel: string;
  refScoreColor: string;
}

interface HandleScoreValueProps {
  userScoreVerify: UserScoreElement[];
  refScore: number | string;
  status?: any;
}

export const ScoreVerify: React.FC<HandleScoreValueProps> = ({
  userScoreVerify,
  refScore,
  status,
}) => {
  const evaluateScore = (
    userScoreVerify: UserScoreElement[],
    refScore: number | string
  ) => {
    let label = "";
    let scoreValue = "";
    let color = "";

    console.log(refScore, userScoreVerify);

    userScoreVerify.forEach((element) => {
      switch (element.refAction) {
        case "equal":
          if (refScore.toString() === element.refValue.toString()) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        case "lessThanEqual":
          console.log("lessthanEqual");
          if (parseFloat(refScore as string) <= parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        case "greaterThanEqual":
          if (parseFloat(refScore as string) >= parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        case "lessThan":
          if (parseFloat(refScore as string) < parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        case "greaterThan":
          if (parseFloat(refScore as string) > parseFloat(element.refValue)) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        case "rangeEqual":
          const [firstVal, secondVal] = element.refValue
            .split(",")
            .map(parseFloat);

          if (
            firstVal <= parseFloat(refScore as string) &&
            parseFloat(refScore as string) <= secondVal
          ) {
            label = element.refAnswerLabel;
            scoreValue = refScore.toString();
            color = element.refScoreColor;
            console.log(label);
          }
          break;

        default:
          console.log("Unknown refAction:", element.refAction);
      }
    });

    return { label, scoreValue, color };
  };

  const { label, scoreValue, color } = evaluateScore(userScoreVerify, refScore);

  console.log(label);

  return (
    <>
      {status ? (
        <Text style={{ width: "70%", color: "#000" }}>
          : {label || "No Label Available"}
        </Text>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};
