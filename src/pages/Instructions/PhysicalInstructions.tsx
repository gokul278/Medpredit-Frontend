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

const PhysicalInstructions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref="questions/Physical%20Activity/8"
            ></IonBackButton>
          </IonButtons>
          <IonTitle>Physical Activity Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
            We are going to assess your Physical Activity using Global Physical
            Activity Questionnaire (GPAQ)
          </IonLabel>{" "}
        </IonItem>

        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              The GPAQ covers several components of physical activity, such as
              intensity, duration, and frequency, and it assesses three domains
              in which physical activity is performed (occupational physical
              activity, transport-related physical activity, and physical
              activity during discretionary or leisure time).
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              I am going to ask you about the time you spend doing different
              types of physical activity in a typical week.
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Please answer these questions even if you do not consider yourself
              to be a physically active person.
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Think first about the time you spend doing work.
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Think of work as the things that you have to do such as paid or
              unpaid work, study/training, household chores, harvesting
              food/crops, fishing or hunting for food, seeking employment,
              office work.
            </IonLabel>{" "}
          </IonItem>
        </IonList>

        <IonItem lines="none">
          <IonLabel style={{ textAlign: "justify" }} className="font-bold">
            In answering the following questions
          </IonLabel>{" "}
        </IonItem>
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Vigorous-intensity activities are activities that require hard
              physical effort and cause large increases in breathing or heart
              rate
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Moderate-intensity activities are activities that require moderate
              physical effort and cause small increases in breathing or heart
              rate.{" "}
            </IonLabel>{" "}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PhysicalInstructions;
