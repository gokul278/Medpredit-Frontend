import React from "react";
import { IonIcon } from "@ionic/react";

interface ListItemProps {
  icon: string;
  label: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label }) => {
  return (
    <div className="listItems">
      <div className="listContent">
        <IonIcon icon={icon} />
        <p>{label}</p>
      </div>
      <IonIcon className="chevronIcon" icon="chevronForwardOutline" />
    </div>
  );
};

export default ListItem;
