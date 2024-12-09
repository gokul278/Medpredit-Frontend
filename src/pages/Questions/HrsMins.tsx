import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

interface HrsInputBox {
  type: string;
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
  onEdit: (hrsValue: any, minsValue: any, forwardQId: string) => void;
}

const HrsMins: React.FC<HrsInputBox> = ({ label, type, onEdit }) => {
  const [hrsValue, setHrsvalue] = useState<string>("");
  const [minsValue, setMinsValue] = useState<string>("");

  const handleButtonClick = () => {
    const forwardQId = label.options[0]?.forwardQId || "";
    onEdit(hrsValue, minsValue, forwardQId);
  };
  return (
    <div className="questionsOutline">
      {/* <p className="questionNumber">1</p> */}
      <div className="questions inputText">
        <p className="question ">{label.questionText}</p>
        <div className="p-inputgroup flex-1">
          <InputText
            value={hrsValue}
            type={type}
            placeholder="In Hrs"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setHrsvalue(e.target.value)
            }
          />
          <InputText
            value={minsValue}
            type={type}
            placeholder="In Mins"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMinsValue(e.target.value)
            }
          />
          <span className="p-inputgroup-addon" onClick={handleButtonClick}>
            <i className="pi pi-arrow-right"></i>
          </span>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default HrsMins;
