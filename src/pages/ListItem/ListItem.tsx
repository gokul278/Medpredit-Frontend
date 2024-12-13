import React from "react";
import { IonIcon } from "@ionic/react";
import { useHistory } from "react-router";

interface ListItemProps {
  icon: string;
  label: string;
  location: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, label, location }) => {
  const history = useHistory();
  return (
    <div onClick={() => {}} className="listItems">
      <div
        onClick={() => {
          history.push(`${location}`);
        }}
        className="listContent"
      >
        <IonIcon icon={icon} />
        <p>{label}</p>
      </div>
      <IonIcon className="chevronIcon" icon="chevronForwardOutline" />
    </div>
  );
};

export default ListItem;
