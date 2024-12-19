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

import img1 from "../../assets/tobaccoShowCards/img1.png";
import img2 from "../../assets/tobaccoShowCards/img2.png";
import img3 from "../../assets/tobaccoShowCards/img3.png";
import img4 from "../../assets/tobaccoShowCards/img4.png";
import img5 from "../../assets/tobaccoShowCards/img5.png";

import img11 from "../../assets/tobaccoShowCards/img11.png";
import img12 from "../../assets/tobaccoShowCards/img12.png";
import img13 from "../../assets/tobaccoShowCards/img13.png";
import img14 from "../../assets/tobaccoShowCards/img14.png";

const StressInfo: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref="questions/Tobacoo/10"
            ></IonBackButton>
          </IonButtons>
          <IonTitle>Stress Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true} style={{ margin: "0" }}>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              Stress is an automatic response from your nervous system, some
              stressors arise at predictable times such as your commute to work,
              a meeting with your boss, or family gatherings, appearing for an
              examination, change of environment, bodily changes such as
              puberty, oldage, while some are unpredictable like occurrence of
              an unexpected event, illness, loss in business etc.
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              If you’re living with high levels of stress, you’re putting your
              entire well-being at risk. High Stress will cause release of
              certain hormones that wreaks havoc on your emotional equilibrium,
              as well as your physical health. It narrows your ability to think
              clearly, function effectively, and enjoy life. Chronic stress may
              lead to diseases such as Hypertension, Cardiovascular disease.
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              <ul>
                <li>The bills won’t stop coming,</li>
                <li>There will never be more hours in the day,</li>
                <li>
                  Your work and family responsibilities will always be
                  demanding.
                </li>
              </ul>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              “But you have a lot more control than you might think”
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Effective stress management will help you break the hold stress
              has on your life, so you can be happier, healthier, and more
              productive. The ultimate goal is a balanced life, with time for
              work, relationships, relaxation—and the resilience to hold up
              under pressure and meet challenges head on.{" "}
            </IonLabel>{" "}
          </IonItem>
          <IonItem>
            <IonLabel style={{ textAlign: "justify" }}>
              {" "}
              Stress management starts with identifying the sources of stress in
              your life and quantifies the amount of stress perceived by you.
            </IonLabel>{" "}
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default StressInfo;
