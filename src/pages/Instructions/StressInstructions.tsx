import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const StressInstructions: React.FC = () => {
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
          <IonTitle>Stress Instruction</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem lines="none">
            <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
              Preceived Stress Scale
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              The questions in this scale ask you about your feeling and
              thoughts during the month. In each case, you will be asked to
              indicate by circling how often how often you felt or thought a
              certain way.
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              <ul>
                <li>0 - Never</li>
                <li>1 - Almost Never</li>
                <li>2 - Sometimes</li>
                <li>3 - Fairly Often</li>
                <li>4 - Very Often</li>
              </ul>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default StressInstructions;
