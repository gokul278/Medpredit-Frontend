import React from "react";
import DiabetesImg from "../../assets/KnowAbout/Diabetes.jpg";
import { Divider } from "primereact/divider";
import {
  IonAccordion,
  IonAccordionGroup,
  IonIcon,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { LuArrowRight } from "react-icons/lu";
import { TbPoint } from "react-icons/tb";

const Diabetes: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%" }}>
        <Divider>
          <div style={{ fontWeight: "700" }}>Know About Diabetes</div>
        </Divider>
      </div>
      <img
        src={DiabetesImg}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <IonAccordionGroup style={{ width: "100%", borderRadius: "10px" }}>
        <IonAccordion value="1">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What is Diabetes?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Diabetes is a chronic (long-lasting) health condition that
                affects how your body turns food into energy.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="2">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What causes diabetes? </IonLabel>
          </IonItem>

          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Most of the food you eat is broken down into sugar (also called
                glucose) and released into your bloodstream.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>The blood sugar level is regulated by certain hormones</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                When your blood sugar goes up, it signals your pancreas to
                release insulin.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Insulin lowers the blood glucose level by pushing blood glucose
                into cells to be utilized as fuel for functioning or for storage
                for future use.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Blood sugar level may remain raised overtime due to </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Disease of pancreas causing inadequate production or poor
                    quality of insulin.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Or the resistance in cells to accept the glucose loading
                    into them as in case of Obesity.
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Increased sugar level in blood overtime causes some health
                problem such as damage to nerves, blood vessels leading to heart
                disease, kidney disease, vision loss etc..and it is termed as
                diabetes
              </div>
            </div>
          </div>
        </IonAccordion>
      </IonAccordionGroup>

      <div style={{ width: "100%" }}>
        <Divider>
          <div style={{ fontWeight: "700" }}>Types Of Diabetes</div>
        </Divider>
      </div>
      <IonAccordionGroup style={{ width: "100%", borderRadius: "10px" }}>
        <IonAccordion value="1">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Type 1 Diabetes Mellitus</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            <div className=" faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If your pancreas does not make adequate or quality insulin then
                it is termed as Type I Diabetes
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                It is mostly due to attack of the pancreatic tissue by immune
                cells.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Symptoms develop quickly.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Diagnosed mostly in children, teens and young adults.</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="second">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Type 2 Diabetes Mellitus</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If your body cells does not make use of insulin and become
                resistant to take up the glucose load then the condition is
                termed as Type 2 diabetes
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                {" "}
                It develops over many years and is usually diagnosed in adults
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                You may not notice any symptoms, so it’s important to get your
                blood sugar tested if you’re at risk.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Gestational diabetes</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Gestational diabetes develops in pregnant women who have never
                had diabetes before the pregnancy.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                increases your risk for type 2 diabetes later in life.
                Gestational diabetes usually goes away after your baby is born
                but
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If you have gestational diabetes, your baby could be at higher
                risk for health problems.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="4">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              Who are all at risk of Getting Diabetes ?{" "}
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                You’re at risk for developing Type 1 DM if you Have Family
                history: Having a parent, brother, or sister with type 1
                diabetes.
              </div>
            </div>
            <Divider />
            Are diagnosed at younger Age: You can get type 1diabetes at any age,
            but it’s more likely to develop when you’re a child, teen, or young
            adult.
            <Divider />
            You’re at risk for developing Type 2 diabetes if you are:
            <Divider />
            Leading Inactive / sedentary/ stressful life style,
            <Divider />
            Having unhealthy diet like - , high salt, refined sugar, deep fried
            oily junk food, with No or less of fruits and vegetables rich in
            fibres.
            <Divider />
            Overweight,
            <Divider />
            Aged 30 and above.
            <Divider />
            Having a parent, brother, or sister with type 2 diabetes
            <Divider />
            Ever had gestational diabetes
            <Divider />
            Having Hormone disorder like PCOS, Thyroid disorders etc
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};

export default Diabetes;
