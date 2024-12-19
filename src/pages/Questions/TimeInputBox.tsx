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

  const getFormate = (value: any) => {
    const formattedTime = value.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return formattedTime;
  };

  // Trigger onEdit whenever time is updated
  const handleTimeChange = (e: any) => {
    setTime(e.value);
  };

  return (
    <div className="questionsOutline">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onEdit(label.questionType, getFormate(time), forwardQId);
        }}
      >
        <div className="questions inputText">
          <p className="question ">{label.questionText}</p>
          <div className="p-inputgroup flex-1">
            <Calendar
              id="calendar-timeonly"
              value={time}
              onChange={handleTimeChange}
              timeOnly
              placeholder="Enter Time"
              hourFormat="12"
              className="w-full"
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

export default TimeInputBox;
