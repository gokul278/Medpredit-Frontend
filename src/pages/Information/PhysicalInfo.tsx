import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import img1 from "../../assets/info/physicalAct1.png";
import img2 from "../../assets/info/physicalAct2.png";
import img3 from "../../assets/info/physicalAct3.png";
import img4 from "../../assets/info/physicalAct4.png";

import React, { useRef } from "react";

const PhysicalInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref="questions/Stress/9"
            ></IonBackButton>
          </IonButtons>
          <IonTitle>Show Cards - Physical Activity</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel>Vigorous Physical Activity at Work </IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <p style={{ textAlign: "justify" }}>
                Make you breathe much harder than normal{" "}
              </p>
              <img src={img1} />
              <p style={{ textAlign: "justify" }}>
                Other examples for <b>Vigorous</b> activities at <b>Work</b>{" "}
              </p>
              <ul>
                <li>Forestry (cutting, chopping, carrying wood)</li>
                <li>Sawing hardwood </li>
                <li>Ploughing</li>
                <li>Cutting crops (sugar cane) </li>
                <li>Gardening (digging) </li>
                <li>Grinding (with pestle) </li>
                <li>Labouring (shovelling sand) </li>
                <li>Loading furniture (stoves, fridge) </li>
                <li>Instructing spinning (fitness) </li>
                <li>Instructing sports aerobics </li>
                <li>Sorting postal parcels (fast pace)</li>
                <li>Cycle rickshaw driving </li>
              </ul>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel>Moderate Physical Activity at Work</IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <p style={{ textAlign: "justify" }}>
                Make you breathe somewhat harder than normal{" "}
              </p>
              <img src={img2} />
              <p style={{ textAlign: "justify" }}>
                Other examples for <b>Moderate</b> activities at <b>Work</b>{" "}
              </p>
              <ul>
                <li>
                  Cleaning (vacuuming, mopping, polishing, scrubbing, sweeping,
                  ironing){" "}
                </li>
                <li>
                  Washing (beating and brushing carpets, wringing clothes (by
                  hand)){" "}
                </li>
                <li>Gardening</li>
                <li>Milking cows (by hand) </li>
                <li>Planting and harvesting crops </li>
                <li>Digging dry soil (with spade) </li>
                <li>Instructing spinning (fitness) </li>
                <li>Instructing sports aerobics </li>
                <li>Sorting postal parcels (fast pace)</li>
                <li>Cycle rickshaw driving </li>
              </ul>
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel>
                Vigorous Physical Activity during Leisure Time
              </IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <p style={{ textAlign: "justify" }}>
                Make you breathe much harder than normal{" "}
              </p>
              <img src={img3} />
              <p style={{ textAlign: "justify" }}>
                Other examples for <b>Vigorous</b> activities during{" "}
                <b>Leisure Time</b>{" "}
              </p>
              <ul>
                <li>Soccer</li>
                <li>Rugby</li>
                <li>Tennis</li>
                <li>High-impact aerobics </li>
                <li>Aqua aerobics </li>
                <li>Ballet dancing </li>
                <li>Fast swimming</li>
              </ul>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonLabel>
                Moderate Physical Activity during Leisure Time
              </IonLabel>
            </IonItem>
            <div className="ion-padding-start ion-padding-end" slot="content">
              <p style={{ textAlign: "justify" }}>
                Make you breathe much harder than normal{" "}
              </p>
              <img src={img4} />
              <p style={{ textAlign: "justify" }}>
                Other examples for <b>Moderate</b> activities at <b>Work</b>{" "}
              </p>
              <ul>
                <li>Cycling</li>
                <li>Jogging</li>
                <li>Dancing</li>
                <li>Horse-riding </li>
                <li>Tai chi </li>
                <li>Yoga </li>
                <li>Pilates</li>
                <li>Low-impact aerobics</li>
                <li>Cricket</li>
              </ul>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default PhysicalInfo;
