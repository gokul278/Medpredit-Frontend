import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";

interface MultiInputBoxProps {
  label: string;
  placeholders?: string[];
}

const MultiInputBox: React.FC<MultiInputBoxProps> = ({
  label,
  placeholders,
}) => {
  const [values, setValues] = useState<string[]>(
    Array(placeholders?.length).fill("")
  );

  const handleInputChange = (index: number, value: string) => {
    const updatedValues = [...values];
    updatedValues[index] = value;
    setValues(updatedValues);
  };

  return (
    <div>
      <div className="questions multiInput">
        <p className="question">{label}</p>
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
