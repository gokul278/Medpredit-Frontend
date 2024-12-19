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

const TobaccoInfo: React.FC = () => {
  console.log("asfs");
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
          <IonTitle>Tobacco Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                Smoked tobacco products{" "}
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p> Manufactured cigarettes</p>
                  <img src={img1} alt="" />
                </div>
              </IonItem>
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p> Hand-rolled cigarettes </p>
                  <img src={img2} alt="" />
                </div>
              </IonItem>
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p> Pipe</p>
                  <img src={img3} alt="" />
                </div>
              </IonItem>
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p>
                    Cigars, e.g., cigarillos, double coronas, cheroots, stumpen,
                    chutts and dhumtis{" "}
                  </p>
                  <img src={img4} alt="" />
                </div>
              </IonItem>
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p> Shisha</p>
                  <img src={img5} alt="" />
                </div>
              </IonItem>
            </div>
          </IonAccordion>
          <IonAccordion>
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                How smoking tobacco affects your health?{" "}
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p>Snuff, available in wet and dry form</p>
                  <img src={img11} alt="" />
                  <img src={img12} alt="" />
                </div>
              </IonItem>

              <IonItem>
                <div className="flex flex-column pt-0">
                  <p> Chewing tobacco </p>
                  <img src={img13} alt="" />
                </div>
              </IonItem>
              <IonItem>
                <div className="flex flex-column pt-0">
                  <p>Betel nut, quid</p>
                  <img src={img14} alt="" />
                </div>
              </IonItem>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default TobaccoInfo;
