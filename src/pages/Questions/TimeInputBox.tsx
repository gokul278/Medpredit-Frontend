import { Calendar } from "primereact/calendar";
import React, { useState } from "react";
import { Nullable } from "primereact/ts-helpers";
import { Divider } from "primereact/divider";

interface TimeInputBoxProps {
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
  onEdit: (questionType: any, value: any, forwardQId: string) => void;
}

const TimeInputBox: React.FC<TimeInputBoxProps> = ({ label, type, onEdit }) => {
  const [time, setTime] = useState<Nullable<Date>>(null);

  const forwardQId = label.options[0]?.forwardQId || "";

  // Trigger onEdit whenever time is updated
  const handleTimeChange = (e: any) => {
    setTime(e.value);
    onEdit(label.questionType, e.value, forwardQId);
  };

  return (
    <div>
      <div className="p-inputgroup flex-1">
        <Calendar
          id="calendar-timeonly"
          value={time}
          onChange={handleTimeChange}
          timeOnly
          placeholder="Enter Time"
          hourFormat="12"
          className="w-full"
        />
      </div>
      <Divider />
    </div>
  );
};

export default TimeInputBox;
