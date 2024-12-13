import { Divider } from "primereact/divider";
import { InputNumber } from "primereact/inputnumber";
import React, { useEffect, useState } from "react";

interface NumberInputBoxT4Props {
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
  onClickOpt: (value: string, questionId: number, forwardQId: string) => void;
  onEdit: (questionType: any, value: any, forwardQId: string) => void;
}

const NumberInputBoxT4: React.FC<NumberInputBoxT4Props> = ({
  label,
  type,
  onClickOpt,
  onEdit,
}) => {
  const [value, setValue] = useState<number | null>(null);

  const handleButtonClick = () => {
    const forwardQId = label.options[0]?.forwardQId || "";
    onClickOpt(String(value), label.questionId, forwardQId);
    onEdit(label.questionType, value, forwardQId);
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
          <p className="question ">{label.questionText}</p>
          <div className="p-inputgroup flex-1">
            <InputNumber
              value={value}
              onChange={(e) => {
                setValue(e.value);
              }}
              min={1}
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

export default NumberInputBoxT4;
