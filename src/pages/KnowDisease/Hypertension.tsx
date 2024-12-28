import { Divider } from "primereact/divider";
import React from "react";
import hypertensionfull from "../../assets/KnowAbout/hypertensionAll.png";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { LuArrowRight } from "react-icons/lu";
import { TbPoint } from "react-icons/tb";

import position from "../../assets/KnowAbout/position.png";

const Hypertension: React.FC = () => {
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
          <div style={{ fontWeight: "700" }}>Know About Hypertension</div>
        </Divider>
      </div>
      <img
        src={hypertensionfull}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <IonAccordionGroup style={{ width: "100%", borderRadius: "10px" }}>
        <IonAccordion value="1">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What is Blood pressure?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Blood pressure is the pressure of blood pushing against the
                walls of your arteries.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Arteries carry blood from your heart to other parts of your
                body.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Your blood pressure normally rises and falls throughout the day.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="2">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What do blood pressure numbers mean?
            </IonLabel>
          </IonItem>

          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              Blood pressure is measured using two numbers:
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The first number, called <b>systolic blood pressure</b>,
                measures the pressure in your arteries when your heart
                contracts.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The second number, called <b>diastolic blood pressure</b>,
                measures the pressure in your arteries when your heart rests
                between beats.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If the measurement reads 120 systolic and 80 diastolic, you
                would say, “120 over 80,” or write, “120/80 mmHg.”
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="3">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are normal blood pressure numbers?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>A normal blood pressure level is less than 120/80 mmHg.</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="4">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What is hypertension?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Hypertension, also called high blood pressure, is a condition
                when blood pressure is higher than normal.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Having blood pressure measures consistently above normal may
                result in a diagnosis of high blood pressure (or hypertension).
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="5">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the different types of hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              It is classified into two types
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>Primary, or essential hypertension.</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Occurs when you have abnormally high blood pressure that’s
                    not the result of a medical condition.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    This form of high blood pressure is often due to obesity,
                    family history and an unhealthy diet.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    The condition is reversible with medications and lifestyle
                    changes.
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
                <div>
                  <b>Secondary hypertension</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Sometimes because of other medical conditions like kidney
                    disorders, hormonal problems, heart diseases etc.{" "}
                    <b>can also occur</b>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="6">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              Who are all at risk of Getting hypertension ?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  You are at risk of getting Primary Hypertension if you are
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Leading physically Inactive lifestyle</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Feeling stressful most often,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having unhealthy diet often, like, high salt, refined sugar,
                    deep fried oily junk food, with No or less of fruits and
                    vegetables rich in fibres.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Overweight,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Aged 18 and above.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having Family history of high blood pressure- a parent,
                    brother, or sister with Hypertension
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Pregnant women.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Alcoholic.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Tobacco user especially smoking</div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  You are at risk of getting secondary hypertension if you are
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having Hormone disorder like PCOS, Thyroid disorders etc
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>People who have sleep apnea.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Older age</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="7">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the symptoms of hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Symptoms often develop over several years and can go on for a
                long time without being noticed
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                sometimes patients with Hypertension may not exhibit any
                noticeable symptoms at all.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Most common symptoms are</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Severe headaches</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Vision problems</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Palpitation</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Fatigue</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Dizziness</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Sweating</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="8">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How Do I know if I am having hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The best way to know if you have hypertension is{" "}
                <b>to get regular blood pressure readings.</b>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="9">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are all the tests done to detect the hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Home Blood Pressure Monitoring (HBPM).</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Ambulatory Blood Pressure Monitoring (APBM).</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="10">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What is HBPM?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Home Blood Pressure Monitoring (HBPM).</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Also known as Self-measured blood pressure (SMBP) refers to
                    blood pressure (BP) measurements obtained by a patient
                    outside of a physician's practice or clinical setting,
                    usually at home. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="11">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to measure Blood pressure at Home?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              <b>Steps</b>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>1. Prepare</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Avoid caffeine, smoking and exercise for 30 minutes before
                    measuring your blood pressure.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Wait at least 30 minutes after a meal.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    If you're on blood pressure medication, measure your BP
                    before you take our medication.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Empty your bladder beforehand.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Find a quiet space where you can sit comfortably without
                    distraction.
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
                <div>
                  <b>2. Position</b>
                </div>
                <img src={position} style={{ width: "100%" }} alt="position" />
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>3. Measure</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Rest for five minutes while in position before starting.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Take two or three measurements, one minute apart, twice
                    daily for seven days.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Keep your body relaxed and in position during measurements.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Sit quietly with no distractions during measurements—avoid
                    conversations, TV, phones and other devices.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Record your measurements when finished.</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="12">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is the significance of High BP?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Persistently blood pressure can damage your health in many ways.
                It can seriously damage important organs like your heart, brain,
                kidneys, and eyes.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The higher your blood pressure levels, the more risk you have
                for other health problems, such as <b>heart disease</b> and{" "}
                <b>stroke</b>.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="13">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are all the complications due to hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              <b>Uncontrolled high blood pressure damages the vital organs</b>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Blood vessels- Vasculopathy</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Thickening , narrowing, injury to inner lining of blood
                    vessels, formation of blood clot resulting in reduced blood
                    flow to organs
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
                <div>Heart disease</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Enlargement of heart chambers</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Thickening of heart wall</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Heart failure- A condition when heart cannot pump out blood
                    adequate to maintain circulation
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Irregular heart beat</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Damage to Blood vessel supplying nutrition and oxygen to
                    heart- resulting in MI
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
                <div>Kidney damage</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Weakened and narrowed blood vessels in your kidney.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Protein leakage</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Finally renal failure .</div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Eye damage</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Weakened and narrowed blood vessels in your eyes.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Rupture of small capillaries.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Leading to loss of vision.</div>
                </div>
              </div>
            </div>
            <Divider />
            <div style={{ marginBottom: "10px" }} className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Brain</div>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Acute hypertensive Encephalopathy</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Impairment of brain function leading to coma due to sudden
                    high raise in blood pressure
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "10px" }} className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Stroke</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Due to rupture of blood vessels supplying brain</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Due to reduced blood flow to brain tissue</div>
                </div>
              </div>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Vascular dementia</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Progressive retardation of functions (trouble in memory,
                    learning , understanding and performing) due to degeneration
                    of brain.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="14">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are all the tests done to detect the complications of
              hypertension?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Hypertensive Vasculopathy</b> - Measurement of the thickness
                of blood vessel wall and of the pulse-wave velocity in the
                common carotid artery
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Kidney disease</b> - Urine sugar, albumin, USG abdomen
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Heart Disease</b> - ECG, Thread mill test, ECHO
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Eye disease</b> - Retinal examination
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="15">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to care of myself and maintain Blood pressure under control ?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              <b>Life style modification</b>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Eat healthy.</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">
                      Let’s assess where you stand right now when it comes to
                      nutrition
                    </a>
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
                <div>Be active.</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">
                      Let’s assess where you stand right now when it comes to
                      physical activity
                    </a>
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
                <div>Keep your weight in check</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">Let’s assess where you stand right now?</a>
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
                <div>Avoid smoking</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">Let’s assess where you stand right now?</a>
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
                <div>Avoid excessive alcohol intake</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">Let’s assess where you stand right now?</a>
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
                <div>Manage your stress</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">Let’s assess where you stand right now?</a>
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
                <div>Adequate sleep</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">Let’s assess where you stand right now?</a>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div style={{ marginBottom: "15px" }}>
              <b>
                Periodic health check up and appropriate treatment to keep
                within normal range of your
              </b>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Blood sugar level.</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">
                      Let’s check whether it is within normal limit.
                    </a>
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
                <div>Blood pressure.</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">
                      Let’s check whether it is within normal limit.
                    </a>
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
                <div>Cholesterol level.</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <a href="">
                      Let’s check whether it is within normal limit.
                    </a>
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
                <div>
                  <b>Periodic Check up for screening complications</b>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>Take your medicine regularly.</b>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>Solve problems-</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    setting objectives , achieving small targets, self rewards,
                    Obstacles in achieving your objective etc.
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
                <div>
                  <b>Be strong and positive</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Cope with the emotional side of diabetes-Fear, Depression
                    and anxiety related to illness, stressors in adopting life
                    style etc
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
                <div>
                  <b>Reduce your risk of other health problems.</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Infection control- oral cavity, foot care, bowel care, skin
                    care
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Injury prevention</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Hypertension</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Thyroid dysfunction etc</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};

export default Hypertension;
