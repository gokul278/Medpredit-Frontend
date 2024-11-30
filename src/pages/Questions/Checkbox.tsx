import { IonCheckbox } from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useState } from "react";

interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <div className="questions checkBox">
        <div className="question">
          <IonCheckbox
            mode="md"
            checked={checked}
            onIonChange={(e) => setChecked(e.detail.checked)}
          ></IonCheckbox>
          <label htmlFor="ingredient1" className="ml-2">
            {label}
          </label>
        </div>
        <Divider />
      </div>
    </div>
  );
};

export default Checkbox;
