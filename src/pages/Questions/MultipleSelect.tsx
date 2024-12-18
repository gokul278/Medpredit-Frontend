import { Divider } from "primereact/divider";
import React, { useState, useEffect } from "react";

interface MultipleSelectProps {
  label: {
    questionType: string;
    questionText: string;
    questionId: number;
    options: {
      backwardQId: string;
      forwardQId: string;
      refOptionId: number;
      refOptionLabel: string;
    }[];
  };
  onOptionSelect: (selectedOptions: number[], forwardQIds: string[]) => void;
  onEdit: (selectedOptions: number[], forwardQIds: string[]) => void;
}

const MultipleSelect: React.FC<MultipleSelectProps> = ({
  label,
  onOptionSelect,
  onEdit,
}) => {
  const [selectedValues, setSelectedValues] = useState<number[]>([]);

  useEffect(() => {
    setSelectedValues([]);
  }, []);

  const handleButtonClick = (refOptionId: number, refNextQn: string) => {
    let updatedSelectedValues;

    if (selectedValues.includes(refOptionId)) {
      // If the option is already selected, remove it
      updatedSelectedValues = selectedValues.filter((id) => id !== refOptionId);
    } else {
      // Otherwise, add it to the selected values
      updatedSelectedValues = [...selectedValues, refOptionId];
    }

    setSelectedValues(updatedSelectedValues);

    // Extract forward question IDs for all selected options
    const forwardQIds = label.options
      .filter((option) => updatedSelectedValues.includes(option.refOptionId))
      .map((option) => option.forwardQId);

    // Call the callback functions with updated values
    onOptionSelect(updatedSelectedValues, forwardQIds);
    onEdit(updatedSelectedValues, forwardQIds);

    // Log the selected values and forward question IDs
    console.log("Selected Values:", updatedSelectedValues);
    console.log("Forward QIds:", forwardQIds);
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
                selectedValues.includes(option.refOptionId) ? "selected" : ""
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

export default MultipleSelect;
