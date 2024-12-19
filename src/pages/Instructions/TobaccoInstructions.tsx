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

const TobaccoInstructions: React.FC = () => {
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
          <IonTitle>Tobacco Instructions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonAccordionGroup>
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
          <IonAccordion value="second">
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
            </div>
          </IonAccordion>
          <IonAccordion value="third">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">
                How smoking tobacco affects your health?{" "}
              </IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking damages the airways and small air sacs in your lungs.
                  This damage starts soon after someone starts smoking, and lung
                  function continues to worsen as long as the person smokes.
                  Still, it may take years for the problem to become noticeable
                  enough for lung disease to be diagnosed. Smoke damage in the
                  lungs can lead to serious long-term lung diseases such as
                  chronic obstructive pulmonary disease (COPD).
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking can also increase the risk of lung infections such as
                  pneumonia and tuberculosis, and it can worsen some existing
                  lung diseases, such as asthma.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  COPD, which is one of the leading causes of death, includes
                  both chronic bronchitis and emphysema (discussed below).
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Most people with COPD have both of these conditions, but the
                  severity of each of them varies from person to person. In
                  COPD, damage to the small airways in the lungs makes it hard
                  for the lungs to get oxygen to the rest of the body.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking is by far the most common cause of COPD. The risk goes
                  up the more you smoke and the longer you smoke.
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Some of the early signs and symptoms of COPD:
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      {" "}
                      Noises in the chest (such as wheezing, rattling, or
                      whistling).
                    </li>
                    <li>
                      {" "}
                      Shortness of breath when active (walking, climbing etc).
                    </li>
                    <li>Coughing up mucus (phlegm).</li>
                    <li>
                      {" "}
                      Over time, COPD can make it hard to breathe at rest as
                      well, COPD tends to get worse over time, especially if a
                      person continues to smoke.There is no cure for COPD,
                      although some medicines might help with symptoms.
                    </li>
                  </ul>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Chronic bronchitis.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      {" "}
                      Chronic bronchitis is a common problem in people who smoke
                      for a long time.
                    </li>
                    <li>
                      {" "}
                      In this disease, the airways make too much mucus, forcing
                      the person to try to cough it out.
                    </li>
                    <li>
                      {" "}
                      The airways become inflamed (swollen), and the cough
                      becomes chronic (long-lasting).
                    </li>
                    <li>
                      {" "}
                      The symptoms can get better at times, but the cough keeps
                      coming back.
                    </li>
                    <li>
                      {" "}
                      Over time, the airways can get blocked by scar tissue and
                      mucus, which can lead to bad lung infections (pneumonia).
                    </li>
                    <li>
                      {" "}
                      There’s no cure for chronic bronchitis, but quitting
                      smoking can help keep symptoms under control and help keep
                      the damage from getting worse.
                    </li>
                  </ul>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Emphysema
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  In emphysema, the walls between the tiny air sacs in the lungs
                  break down, which creates larger but fewer sacs.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  This lowers the amount of oxygen reaching the blood.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Over time, these sacs can break down to the point where a
                  person with emphysema might struggle to get enough air, even
                  when at rest.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  People with emphysema are at risk for many other problems
                  linked to weak lung function, including pneumonia.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  In later stages of the disease, patients often need an oxygen
                  mask or tube to help them breathe.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Emphysema cannot be cured, but it can be treated and slowed
                  down if the person stops smoking.
                </IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
          <IonAccordion value="fourth">
            <IonItem slot="header" color="light">
              <IonLabel className="font-bold">Smoking tobacco damages</IonLabel>
            </IonItem>
            <div className="" slot="content">
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking tobacco damages your heart and blood vessels
                  (cardiovascular system), increasing your risk of heart disease
                  and stroke.{" "}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Smoking is a major cause of coronary heart disease (CHD), in
                  which the arteries of the heart can’t supply the heart muscle
                  with enough oxygen-rich blood.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  CHD is the main cause of heart attacks, and it’s the leading
                  cause of death in the world.
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Mechanism{" "}
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      Smoking causes high blood pressure, lowers your ability to
                      exercise, and makes your blood more likely to clot.
                    </li>
                    <li>
                      {" "}
                      It also lowers HDL (good) cholesterol levels in the blood.
                      All of these are risk factors for heart attacks and
                      strokes.
                    </li>
                  </ul>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Smoking is a major risk factor for peripheral arterial disease
                  (PAD).
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  <ul>
                    <li>
                      In PAD, plaque builds up in the arteries that carry blood
                      to the head, organs, and limbs.
                    </li>
                    <li>
                      {" "}
                      This increases your risk of heart disease, heart attack,
                      and stroke.
                    </li>
                    <li>
                      {" "}
                      This can lead to pain in the legs when walking, and may
                      lead to open sores that don’t heal.
                    </li>
                    <li>
                      {" "}
                      Because smoking affects blood flow, it can lower the
                      body’s ability to heal from wounds leading to non healing
                      wound ulcers resulting in amputation.
                    </li>
                  </ul>
                </IonLabel>
              </IonItem>
              <IonItem lines="none">
                <IonLabel style={{ textAlign: "justify", fontWeight: "bold" }}>
                  Smoking increases the risk of having an aortic aneurysm.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Aortic aneurysm is a balloon-like bulge in the aorta, the main
                  artery carrying blood from the heart to other organs.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  It is caused by a weakening of the wall of the aorta.
                </IonLabel>
              </IonItem>
              <IonItem>
                <IonLabel style={{ textAlign: "justify" }}>
                  Aortic aneurysms can grow larger over time, and they can be
                  life threatening if they rupture (break open).
                </IonLabel>
              </IonItem>
            </div>
          </IonAccordion>
        </IonAccordionGroup>
      </IonContent>
    </IonPage>
  );
};

export default TobaccoInstructions;
