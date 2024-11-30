import React from "react";
import { IonIcon } from "@ionic/react";

interface Tile {
  icon: string;
  label: string;
}

interface SettingsTilesProps {
  tiles: Tile[];
}

const SettingsTile: React.FC<SettingsTilesProps> = ({ tiles }) => {
  return (
    <div className="grids">
      {tiles.map((tile, index) => (
        <div className="gridCol" key={index}>
          <IonIcon icon={tile.icon}></IonIcon>
          <p>{tile.label}</p>
        </div>
      ))}
    </div>
  );
};

export default SettingsTile;
