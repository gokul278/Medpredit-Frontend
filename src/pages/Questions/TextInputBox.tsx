import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

interface TextInputBoxProps {
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

const TextInputBox: React.FC<TextInputBoxProps> = ({
  label,
  type,
  onClickOpt,
  onEdit,
}) => {
  const [value, setValue] = useState<string | null>(null);

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
            <InputText
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
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

export default TextInputBox;
