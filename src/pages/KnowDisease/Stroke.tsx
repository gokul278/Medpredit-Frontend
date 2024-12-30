import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Divider } from "primereact/divider";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { TbPoint } from "react-icons/tb";
import stroke1 from "../../assets/KnowAbout/stroke1.jpg";
import stroke2 from "../../assets/KnowAbout/stroke2.jpg";
import stroke3 from "../../assets/KnowAbout/stroke3.jpg";

const Stroke: React.FC = () => {
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
            Know About Stroke
          </div>
        </Divider>
      </div>
      <img
        src={stroke1}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <img
        src={stroke2}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <img
        src={stroke3}
        alt="diabetes"
        style={{ width: "300px", marginTop: "10px", marginBottom: "20px" }}
      />
      <IonAccordionGroup style={{ width: "100%", borderRadius: "10px" }}>
        <IonAccordion value="1">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What is stroke?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Damage to the brain due to interruption of its blood supply.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="2">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">What causes stroke? </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Damage of Brain tissue due to</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Any blockage , leaking or bursting of a blood vessel
                    supplying brain.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="3">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the two types of stroke?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  An <b>ischemic stroke </b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Occurs when blood clots or other particles block the blood
                    vessels to the brain. Fatty deposits called plaque can also
                    cause blockages by building up in the blood vessels.
                  </div>
                </div>
              </div>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  A <b>hemorrhagic stroke </b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    occurs when a blood vessel bursts in the brain. Blood builds
                    up and damages surrounding brain tissue.
                  </div>
                </div>
              </div>
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Both types of stroke damage brain cells. Symptoms of that damage
                start to show in the parts of the body controlled by those brain
                cells.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="4">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              Who are all at the risks of getting stroke?
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
        <IonAccordion value="5">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the symptoms of stroke?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              The following symptoms can occur in stroke
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Sudden severe Headache</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Dizziness</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Confusion</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Sudden muscle weakness causing difficulty to use the hand(s) or
                leg(s) or paralysis.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Sudden trouble walking</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Slurred speech,- sudden trouble speaking</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Sudden trouble seeing</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Deviation of cheek</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Drooling of saliva</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Sudden loss of consciousness</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="6">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is TIA and why is it significant?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Transient Ischemic attack-</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    If your symptoms go away after a few minutes, you may have
                    had a transient ischemic attack (TIA).
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Because TIAs clear up in few minutes, many people ignore
                    them. But this is a warning sign of stroke, as TIA is a
                    condition that often evolve into stroke if no proper medical
                    attention is given
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="7">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What should I do if someone had symptoms of stroke?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Call</b> 108 or Ambulance immediately.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Alert</b> Medical emergency team if any available.
              </div>
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
              <div>
                <b>Calm down</b> the patient and advice to take deep breath.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Ventilate</b> the room by opening windows, putting fan ,
                avoid crowding around etc.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Note down</b> the event – like if any seizures, if any injury
                due to fall, duration of unconsciousness, involuntary urination
                and note down the time of the appearance of symptom. As these
                information are vital for deciding the treatment.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Take</b> to tertiary care hospital within the Golden Hour
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="8">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is F.A.S.T in stroke?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>F - Face: ask the person to smile.</b> Look for - drooping on
                one side of the face and deviation of angle of mouth.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>A - Arms: Ask the person to raise both arms.</b> Look for –
                arm drift downward on any one side
              </div>
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
              <div>
                <div>
                  <b>S - Speech: Ask the person to repeat a simple phrase.</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Look for - Is the speech slurred or strange?</div>
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
                  <b>T - Time:</b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    If you see any of these signs then call 108 or ambulance
                    right away in time
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="9">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is GOLDEN HOUR in stroke and why is this period so important?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                First 4.5 hours; <b>Time lost is brain lost</b>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Every minute counts.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>To stay alive your brain needs oxygen.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Although your brain makes up only 2% of your body weight, it
                uses 20% of the oxygen you breathe. 
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Your arteries deliver oxygen-rich blood to all parts of your
                brain.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                If something happens to block the flow of blood, brain cells
                start to die within minutes because they can’t get oxygen.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Appropriate treatment within this hours minimize complications
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="10">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">How is stroke diagnosed?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              Your doctor can perform several tests to diagnose stroke, such as
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  <b>Brain imaging, </b>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Magnetic resonance imaging (MRI) scan</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Computed tomography (CT) scan</div>
                </div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Tests of the brain’s electrical activity, and</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>Blood flow tests- Doppler, angiogram etc</div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="11">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to prevent getting stroke?
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
        <IonAccordion value="12">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to give care to the patients with stroke?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div style={{ marginBottom: "15px" }}>
              Home based palliative care for bedridden patients
            </div>
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Encourage daily rehabilitation exercise,</div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Adherence to prescribed medications,</div>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Prevent complications</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Further damage causing stiffness and deformity.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Respiratory complication- Infection, aspiration</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>GI care- Reflux, Dyspepsia</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Urinary Bladder- learn how to give catheter care.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <div>Bed sore prevention and care</div>
                    <div>
                      <div
                        className="faqpoints"
                        style={{ marginBottom: "10px", marginTop: "10px" }}
                      >
                        <div>
                          <LuArrowRight />
                        </div>
                        <div>Using appropriate bed</div>
                      </div>
                      <div
                        className="faqpoints"
                        style={{ marginBottom: "10px" }}
                      >
                        <div>
                          <LuArrowRight />
                        </div>
                        <div>Change in body position</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider />
            <div>provide them wholesome diet,</div>
            <Divider />
            <div>focus on positive memories,</div>
            <Divider />
            <div>Attend regular visit to healthcare provider.</div>
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};

export default Stroke;
