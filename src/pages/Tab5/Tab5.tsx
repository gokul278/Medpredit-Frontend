import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Tab5.css";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonTitle,
  IonToolbar,
  SegmentValue,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";

const Tab5: React.FC = () => {
  const [selectedSegment, setSelectedSegment] =
    useState<SegmentValue>("questions");
  const history = useHistory();

  const handleAddClick = () => {
    if (selectedSegment === "questions") {
      history.push("/addQuestions");
    } else if (selectedSegment === "employee") {
      history.push("/addEmployee");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" mode="md"></IonBackButton>
          </IonButtons>
          <IonTitle>Configure</IonTitle>
          <IonButtons slot="end">
            <IonIcon
              className="addIcon mr-2"
              icon={addCircleOutline}
              onClick={handleAddClick}
            ></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonToolbar>
          <IonSegment
            value="questions"
            scrollable={true}
            onIonChange={(e) => setSelectedSegment(e.detail.value!)}
          >
            <IonSegmentButton value="questions" contentId="questions">
              <IonLabel>Questions</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="employee" contentId="employee">
              <IonLabel>Employee</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
        <IonSegmentView>
          <IonSegmentContent id="questions">Question</IonSegmentContent>
          <IonSegmentContent id="employee">Employee</IonSegmentContent>
        </IonSegmentView>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
