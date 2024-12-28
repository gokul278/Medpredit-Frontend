import { Divider } from "primereact/divider";
import React from "react";

import coronary from "../../assets/KnowAbout/coronaryFUll.jpg";
import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { LuArrowRight } from "react-icons/lu";
import { TbPoint } from "react-icons/tb";
import "./Coronary.css";

const Coronary: React.FC = () => {
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
          <div style={{ fontWeight: "700", textAlign: "center" }}>
            Know About Coronary <br /> Artery Disease (CAD)
          </div>
        </Divider>
      </div>
      <img
        src={coronary}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <IonAccordionGroup style={{ width: "100%", borderRadius: "10px" }}>
        <IonAccordion value="1">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is coronary artery disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Coronary artery disease (CAD) is the most common type of heart
                disease caused by occlusion of the blood vessel supplying heart.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="2">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What causes coronary artery disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                CAD is caused by <b>plaque</b> buildup in the walls of the
                arteries that supply blood to the heart (called coronary
                arteries) and other parts of the body.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Plaque</b> is made up of deposits of cholesterol and other
                substances in the artery. Plaque buildup causes the inside of
                the arteries to narrow over time, which can partially or totally
                block the blood flow. This process is called{" "}
                <b>atherosclerosis</b>.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="3">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is the role of cholesterol in causing coronary artery
              disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Cholesterol is a waxy, fat-like substance made by the liver or
                found in certain foods.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Your liver makes enough for your body’s needs from the food you
                eat.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Your body often get more cholesterol from the foods you eat.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If you take in more cholesterol than the body can use, the extra
                cholesterol can build up in the walls of the arteries, including
                those of the heart.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                This leads to narrowing of the arteries and can decrease the
                blood flow to the heart, brain, kidneys, and other parts of the
                body.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="4">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What do you mean by good or bad Cholesterol ?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  The two main type of cholesterol found in the blood are
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Low density lipoprotein (LDL) attached cholesterol and
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    High density lipoprotein (HDL) attached cholesterol.
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
                <b>Lipoproteins</b> are substance produced in liver to transport
                cholesterol (as fats insoluble in blood) to and from liver
                through blood to all organs.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>High level LDL</b> attached cholesterol is considered to be
                bad as it transport cholesterol from liver to other organs and
                the excess cholesterol can build up in the walls of the arteries
                causing plaque.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                High fat intake in food increases LDL cholesterol level.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>High Level of HDL</b> attached cholesterol is considered safe
                as it scavenges the extra cholesterol from arteries and other
                organs to liver hence it provides some protection against heart
                disease.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Physical activity increases the HDL Level.</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="5">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              Who are all at the risks of getting coronary artery disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              You are at the risk of getting CAD if you are
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  Using <b>Tobacco</b> –
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Tobacco usage increases the risk for heart disease and heart
                    attack by following ways
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Cigarette smoking can damage the heart and blood vessels,
                    which increases your risk for heart conditions such as
                    atherosclerosis and heart attack.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Nicotine raises blood pressure.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Carbon monoxide from cigarette smoke reduces the amount of
                    oxygen that your blood can carry.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Exposure to secondhand smoke can also increase the risk for
                    heart disease, even for nonsmokers.
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Leading Inactive / sedentary/ stressful life style,</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Having unhealthy diet like</b> - , high salt, refined sugar,
                deep fried oily junk food, with No or less of fruits and
                vegetables rich in fibres.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Overweight,</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Aged 30 and above.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Having a parent, brother, or sister with CAD</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Drinking too much alcohol</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Long standing high blood pressure</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Uncontrolled Diabetes Mellitus</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>High level of Cholesterol level in blood</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="6">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the symptoms of coronary heart disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Chest pain and discomfort, is the most common and important
                symptom of CAD it is also called as <b>Angina</b>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>
                    Characteristic feature of typical Anginal chest pain are
                  </b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Compressing type of vague Central chest or left sided pain
                    that often radiates to left shoulder , arm, forearm to neck
                    , to jaw or to the back.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Often associated with shortness of breath, excessive
                    sweating, dizziness, weakness and vomiting sensation.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    The pain will be aggravated by exertion partially relieved
                    by rest.
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
                  <b>What do you mean by Heart attack?</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    It is a serious life threatening condition caused when the
                    coronary artery is completely occluded by plague and blood
                    clot resulting in death of the heart tissue due to lack of
                    oxygen and nutrition.
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
                  <b>What is ‘Silent attack’? </b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Heart attack that present without chest pain is referred to
                    as silent attack.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    It is common in diabetic where the pain sensation carrying
                    nerves are damaged due to high sugar level.
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    It may present as chest tightness, shortness of breath,
                    palpitation, sweating on exertion etc.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="7">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What should I do if someone had symptoms of heart attack?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Call 108 or Ambulance immediately.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Alert Medical emergency team if any available.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Make the patient to sit in a chair with back rest and arm rest.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Calm down the patient and advice to take deep breath.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Ventilate the room by opening windows, put fan, avoid crowding
                around etc.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Take to tertiary care hospital within the Golden Hour</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Check if any emergency medicine is available with the patient if
                he/she is known heart patient.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="8">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is GOLDEN HOUR in heart attack and why is it important?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>The first hour after the onset of a heart attack.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Appropriate treatment within this hours can minimize the life
                threatening complications.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="9">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How is coronary artery disease diagnosed?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If you’re at high risk for heart disease or already have
                symptoms, your doctor can use several tests to diagnose CAD.
              </div>
            </div>
            <div className="table-responsive" style={{ marginTop: "15px" }}>
              <table className="table custom-table">
                <thead>
                  <tr>
                    <th className="table-heading">Tests</th>
                    <th className="table-heading">
                      How it helps in diagnosis?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ECG or EKG Electrocardiogram</td>
                    <td>
                      <li>
                        {" "}
                        Measures the electrical activity, rate, and regularity
                        of your heartbeat.
                      </li>
                      <br />
                      <li>
                        {" "}
                        It is simple and short procedure detects abnormal
                        electrical activity due to heart attack and find time of
                        onset
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td>Echocardiogram</td>
                    <td>
                      <li>
                        {" "}
                        It Uses ultrasound (special sound wave) to create a
                        picture of the heart.
                      </li>
                      <br />
                      <li>
                        {" "}
                        Detect abnormality in movement of heart pumping action
                        and valves
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td>Exercise stress test or Treadmill test TMT</td>
                    <td>
                      <li>
                        {" "}
                        Measures your heart rate while you walk on a treadmill.
                        This helps to determine how well your heart is working
                        when it has to pump more blood
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td>Cardiac catheterization</td>
                    <td>
                      <li> Checks the inside of your arteries for blockage</li>
                      <br />
                      <li>
                        {" "}
                        It is done by inserting a thin, flexible tube through an
                        artery in the groin, arm, or neck to reach the heart.
                      </li>
                      <br />
                      <li>
                        {" "}
                        Health care professionals can measure blood pressure
                        within the heart and the strength of blood flow through
                        the heart’s chambers as well as collect blood samples
                        from the heart or inject dye into the arteries of the
                        heart (coronary arteries)
                      </li>
                    </td>
                  </tr>
                  <tr>
                    <td>Coronary angiogram</td>
                    <td>
                      <li>
                        {" "}
                        Monitors blockage and flow of blood through the coronary
                        arteries.
                      </li>
                      <br />
                      <li>
                        {" "}
                        Uses X-rays to detect dye injected via cardiac
                        catheterization
                      </li>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="10">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to prevent getting heart attack?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px", fontWeight: "700" }}>
              Life style modification{" "}
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
            <div
              style={{
                marginBottom: "15px",
                marginTop: "15px",
                fontWeight: "700",
              }}
            >
              Periodic health check up and appropriate treatment to keep within
              normal range of your
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
          </div>
        </IonAccordion>
        <IonAccordion value="11">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How can I be healthier if I have coronary artery disease?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              If you have CAD, your health care team may suggest the following
              steps to help lower your risk for heart attack or worsening heart
              disease:
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div style={{ marginBottom: "10px" }}>
                  <b>Life style modification</b>
                </div>
                <div>Eat a healthy diet-</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Avoid high salt, refined sugar, deep fried oily junk food,
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Balanced Diet with fruits and vegetables rich in fibres
                    reduces the risk of stroke
                  </div>
                </div>
                <Divider />
                <div>Avoid using tobacco,</div>
                <Divider />
                <div>
                  Avoid excessive alcohol intake
                  <Divider />
                  <div>Avoid stress, adequate sleep</div>
                  <Divider />
                  <div>Physical fitness- regular exercise.</div>
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
                  Periodic health check up and appropriate treatment to keep
                  within normal range of your
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Blood pressure.</div>
                </div>

                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Blood sugar level.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Cholesterol level.</div>
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
                  Surgical procedures to help restore blood flow to the heart
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
                  <b>
                    Cope with the emotional side of coronary artery disease-
                    Depression and anxiety related to illness, stressors in
                    adopting life style
                  </b>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Reduce your risk of other health problems</div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>Example :</b> co morbid illness like kidney disease, Eye
                  disease, stroke etc.
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};

export default Coronary;
