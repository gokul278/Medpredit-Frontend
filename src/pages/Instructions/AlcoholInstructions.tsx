import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

const AlcoholInstructions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref="/questions/Alcohol/11"
            ></IonBackButton>
          </IonButtons>
          <IonTitle>Alcohol Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }}>
            Read questions as written and record answers carefully
          </IonLabel>{" "}
        </IonItem>
        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }} className="font-bold">
            For Question Number 1
          </IonLabel>{" "}
        </IonItem>
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel>0 - Never</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>1 - Montly or Less</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>2 - 2 to 4 times a month</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>3 - 2 to 3 times a week</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>4 - 4 or more times a week</IonLabel>{" "}
          </IonItem>
        </IonList>

        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }} className="font-bold">
            For Question Number 2
          </IonLabel>{" "}
        </IonItem>
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel>0 - 1 or 2 </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>1 - 3 or 4</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>2 - 5 or 6</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>3 - 7, 8 or 9</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>4 - 10 or more</IonLabel>{" "}
          </IonItem>
        </IonList>

        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }} className="font-bold">
            For Question Number 3 to 8
          </IonLabel>{" "}
        </IonItem>
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel>0 - Never</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>1 - Less than monthly</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>2 - Montly</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>3 - Weekly</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>4 - Daily or almost daily.</IonLabel>{" "}
          </IonItem>
        </IonList>

        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }} className="font-bold">
            For Question Number 9, 10
          </IonLabel>{" "}
        </IonItem>
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel>0 - No</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>2 - Yes, But not in the last year</IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel>4 - Yes, during the last year</IonLabel>{" "}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default AlcoholInstructions;
