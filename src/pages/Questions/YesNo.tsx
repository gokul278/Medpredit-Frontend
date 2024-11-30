import axios from "axios";
import { Divider } from "primereact/divider";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import decrypt from "../../helper";

interface YesNoProps {
  label: {
    questionType: string;
    questionText: string;
    questionId: number;
    options: [
      {
        backwardQId: string;
        forwardQId: string;
        refOptionId: number;
        refOptionLabel: string;
      }
    ];
  };

  onOptionSelect: (refOptionId: number, forwardQId: string) => void;
  onEdit: (questionId: number, forwardQId: string) => void;
}

const YesNo: React.FC<YesNoProps> = ({ label, onOptionSelect, onEdit }) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  useEffect(() => {}, []);

  const handleButtonClick = (refOptionId: any, refNextQn: any) => {
    setSelectedValue(refOptionId);
    console.log("refNextQn", refNextQn);
    console.log("refOptionId", refOptionId);
    onOptionSelect(refOptionId, refNextQn);
    onEdit(label.questionId, refNextQn);
  };

  return (
    <div>
      <div className="questions multiInput">
        <p className="question">{label.questionText}</p>
        <div className="buttonGroup">
          {label.options?.map((option) => (
            <button
              key={option.refOptionId}
              onClick={() =>
                handleButtonClick(option.refOptionId, option.forwardQId)
              }
              className={`optionButton ${
                selectedValue === option.refOptionId ? "selected" : ""
              }`}
            >
              {option.refOptionLabel}
            </button>
          ))}
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default YesNo;
