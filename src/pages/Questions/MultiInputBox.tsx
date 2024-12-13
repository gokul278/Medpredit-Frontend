import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";

interface MultiInputBoxProps {
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
  placeholders?: string[];
  onEdit: (question: any, value: any, forwardQId: string) => void;
}

const MultiInputBox: React.FC<MultiInputBoxProps> = ({
  label,
  placeholders,
  onEdit,
}) => {
  const [values, setValues] = useState<string[]>(
    Array(placeholders?.length).fill("")
  );

  useEffect(() => {
    setValues([]); // Reset selection to empty array initially
  }, [label]);

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  return (
    <div>
      <div className="questions multiInput">
        <p className="question">{label.questionText}</p>
        {placeholders?.map((placeholder, index) => (
          <InputText
            key={index}
            value={values[index]}
            placeholder={placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleInputChange(index, e.target.value)
            }
          />
        ))}
        <Divider />
      </div>
    </div>
  );
};

export default MultiInputBox;
