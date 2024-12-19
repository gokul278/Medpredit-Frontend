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

const AlcoholInfo: React.FC = () => {
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
          <IonTitle>Alcohol Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                Why screening for Alcohol Usage?
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <p className="font-bold">Harmful Effects of Alcohol Usage</p>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Alcohol is implicated in a wide variety of diseases,
                  disorders, and injuries, as well as many social and legal
                  problems.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  It is a major cause of cancer of the mouth, esophagus, and
                  larynx.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Liver cirrhosis and pancreatitis often result from long-term,
                  excessive consumption.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Alcohol causes harm to fetuses in women who are pregnant.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Moreover, much more common medical conditions, such as
                  hypertension, gastritis, diabetes, and some forms of stroke
                  are likely to be aggravated even by occasional and short-term
                  alcohol consumption, as are mental disorders such as
                  depression.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Automobile and pedestrian injuries, falls, and work-related
                  harm frequently result from excessive alcohol consumption.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  The risks related to alcohol are linked to the pattern of
                  drinking and the amount of consumption.
                </IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
          <IonAccordion value="second">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                Benefits of Screening for Usage of Alcohol
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  Screening for alcohol consumption among patients in primary
                  care carries many potential benefits.
                </IonLabel>
              </IonItem>{" "}
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  It provides an opportunity to educate patients about low-risk
                  consumption levels and the risks of excessive alcohol use.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  Information about the amount and frequency of alcohol
                  consumption may inform the diagnosis of the patient’s
                  presenting condition, and it may alert clinicians to the need
                  to advise patients whose alcohol consumption might adversely
                  affect their use of medications and other aspects of their
                  treatment.
                </IonLabel>
              </IonItem>{" "}
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  Screening also offers the opportunity for practitioners to
                  take preventative measures that have proven effective in
                  reducing alcohol-related risks.
                </IonLabel>
              </IonItem>{" "}
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default AlcoholInfo;
