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

const TobaccoInfo: React.FC = () => {
  console.log("asfs");
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
          <IonTitle>Tobacco Info</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" color="light">
        {/* <IonAccordionGroup>
          <IonAccordion value="first">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                Why Tobacco usage is a major hazard to mankind worldwide?
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Tobacco use remains the leading preventable cause of death in
                  the world accounting for about 1 in 5 deaths each year.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  On average, people who smoke die about 10 years earlier than
                  people who have never smoked.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Most people know smoking can cause cancer. But it can also
                  cause a number of other diseases and can damage nearly every
                  organ in the body, including the lungs, heart, blood vessels,
                  reproductive organs, mouth, skin, eyes, and bones.
                </IonLabel>
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
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking can affect a person’s health in many other ways as
                  well, harming nearly every organ in the body. Here are a few
                  examples of other ways smoking tobacco can affect your health:
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Increased risk of gum disease and tooth loss.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Lowered immune system function increase risk of infectious
                  diseases like Tuberculosis, flu, sinus infections etc.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Increased risk of type 2 diabetes, SHT , Heart disease, Stroke
                  etc.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Increase the risk of Developing cancer.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Affect the sexual function and reproductive organs leading to
                  infertility and impotency.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Decreased sense of smell and taste.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Premature aging of the skin.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Bad breath and stained teeth.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Lower bone density (thinner bones), which means a higher risk
                  for broken bones, including hip fracture.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Higher risk of rheumatoid arthritis.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Increased risk for cataracts (clouding of the lenses of the
                  eyes).
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Increased risk for age-related macular degeneration, which can
                  lead to blindness.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Wounds taking longer to heal Many of the health problems
                  linked to smoking can lower a person’s quality of life.
                  Smoking-related illness can make it harder for a person to
                  breathe, get around, work, or play. Quitting smoking,
                  especially at younger ages, can reduce smoking-related
                  disability.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Tobacco use remains the leading preventable cause of death in
                  the world accounting for about 1 in 5 deaths each year.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  {" "}
                  On average, people who smoke die about 10 years earlier than
                  people who have never smoked.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Most people know smoking can cause cancer. But it can also
                  cause a number of other diseases and can damage nearly every
                  organ in the body, including the lungs, heart, blood vessels,
                  reproductive organs, mouth, skin, eyes, and bones.
                </IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
        </IonAccordionGroup> */}
      </IonContent>
    </IonPage>
  );
};

export default TobaccoInfo;
