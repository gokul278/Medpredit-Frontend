import { Divider } from "primereact/divider";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";

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
  onEdit: (
    questionType: any,
    hrsValue: any,
    minsValue: any,
    forwardQId: string
  ) => void;
}

const HrsMins: React.FC<HrsInputBox> = ({ label, type, onEdit }) => {
  const [hrsValue, setHrsValue] = useState<number>();
  const [minsValue, setMinsValue] = useState<number>();

  const handleButtonClick = () => {
    const forwardQId = label.options[0]?.forwardQId || "";
    onEdit(label.questionType, hrsValue, minsValue, forwardQId);
  };

  return (
    <div className="questionsOutline">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          handleButtonClick();
        }}
      >
        <div className="questions inputText">
          <p className="question">{label.questionText}</p>
          <div className="p-inputgroup flex-1">
            <InputNumber
              value={hrsValue}
              placeholder="In Hrs"
              onChange={(e: any) => {
                setHrsValue(e.value);
              }}
              min={0}
              max={20}
              required
            />
            <InputNumber
              value={minsValue}
              placeholder="In Mins"
              onChange={(e: any) => {
                setMinsValue(e.value);
              }}
              min={0}
              max={59}
              required
            />
            <button type="submit">
              <span className="p-inputgroup-addon">
                <i className="pi pi-arrow-right"></i>
              </span>
            </button>
          </div>
          <Divider />
        </div>
      </form>
    </div>
  );
};

export default HrsMins;
