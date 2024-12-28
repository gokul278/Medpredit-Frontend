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
import glucometerSteps from "../../assets/KnowAbout/glucometerSteps.png";

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
      <IonAccordionGroup
        style={{ width: "100%", borderRadius: "10px", marginBottom: "15px" }}
      >
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
                You’re at risk for developing <b>Type 1 DM</b>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>If you Have Family history:</b> Having a parent, brother, or
                sister with type 1 diabetes.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Are diagnosed at younger Age:</b> You can get type 1diabetes
                at any age, but it’s more likely to develop when you’re a child,
                teen, or young adult.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  You’re at risk for developing Type 2 diabetes if you are:
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Leading Inactive / sedentary/ stressful life style,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having unhealthy diet like - , high salt, refined sugar,
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
                  <div>Aged 30 and above.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having a parent, brother, or sister with type 2 diabetes
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Ever had gestational diabetes</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Having Hormone disorder like PCOS, Thyroid disorders etc
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="5">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are the symptoms of diabetes?
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
                sometimes patients with Diabetes may not exhibit any noticeable
                symptoms at all.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  Most of the people with Diabetes have these following symptoms
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Frequent urination,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Excessive thirst,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Increased hunger,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Excessive tiredness,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Blurred vision,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Generalised Tiredness,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Dizziness,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Numbness or Pin and pricking sensation of foot and hand,
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>Wound that does not heal.</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="6">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How Do I know if I am Diabetic?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Because symptoms can be hard to spot, it’s important to know
                the <b>risk factors</b> and to seek Health advice from a
                physician to get your blood sugar tested if you have any of
                them.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                A <b>simple blood test</b> will let you know if you have
                diabetes
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="7">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are all the blood test for diagnosing Diabetes?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>
                  Your doctor will have you take one or more of the following
                  blood tests to confirm the diagnosis:
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Random Blood Sugar Test</b>
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Glucose Tolerance Test</b>
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Hb A1C Test</b>
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Fasting Blood Sugar Test</b>
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Hb A1C Test</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="8">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Random Blood Sugar Test</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                This measures your blood sugar at the time you’re tested. You
                can take this test at any time and don’t need to fast (not eat)
                . A blood sugar level of 200 mg/dL or higher indicates you have
                diabetes.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="9">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Glucose Tolerance Test</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                This measures your blood sugar before and after you drink a
                liquid that contains glucose.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                You’ll fast (not eat) overnight before the test and have your
                blood drawn to determine your fasting blood sugar level.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Then you’ll drink the liquid and have your blood sugar level
                checked 1 hour, 2 hours, and possibly 3 hours afterward.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                At 2 hours, a blood sugar level of 140 mg/dL or lower is
                considered normal, 140 to 199 mg/dL indicates you have
                prediabetes, and 200 mg/dL or higher indicates you have
                diabetes.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="10">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Fasting Blood Sugar Test</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                This measures your blood sugar after an overnight fast (not
                eating).
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>A fasting blood sugar level of</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>110 mg/dL or lower is normal,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    110 to 125 mg/dL indicates you have prediabetes, and
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>126 mg/dL or higher indicates you have diabetes.</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="11">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">Hb A1C Test</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The HbA1C test measures your average blood sugar level over the
                past 2 or 3 months.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>An HbA1C test</div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>below 5.7% is normal,</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    between 5.7 and 6.4% indicates you have prediabetes, and
                  </div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>6.5% or higher indicates you have diabetes.</div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="12">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to check my blood sugar at home using Glucometer?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <img
              style={{ width: "100%" }}
              src={glucometerSteps}
              alt="glucometerSteps"
            />
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 1:</b>
              </div>
              <div>check and keep all items ready</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 2:</b>
              </div>
              <div>wash hand throughly</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 3:</b>
              </div>
              <div>wear a glove if you are going to prick other</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 4:</b>
              </div>
              <div>wipe the area</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 5:</b>
              </div>
              <div>Give a brisk prick into tip finger and do not squeeze.</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 6:</b>
              </div>
              <div>insert the strip into glucometer</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 7:</b>
              </div>
              <div>apply blood to the strip</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 8:</b>
              </div>
              <div>record the reading .</div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div className="faqsteps">
                <b>Step 9:</b>
              </div>
              <div>
                Don’t dispose the soaked cotton, needle, strip into general
                waste.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="13">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What are all the complications due to Diabetes?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Increased sugar level in blood overtime may damage the blood
                vessels.
              </div>
            </div>
            <Divider />
            <div>They are classified into two types</div>
            <div style={{ marginTop: "10px" }} className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Microvascular Complications</b>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <div>
                      Damage to small blood vessels supplying nerves, Eyes,
                      Kidney, Joint
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>
                        Neuropathy- numbness of limbs, pin and pricking
                        sensation, erectile dysfunction, loose stool
                      </div>
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>Retinopathy- loss of vision, blurred vision</div>
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>
                        Nephropathy- wastage of protein in urine and kidney
                        damage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }} className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Macrovascular Complications</b>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <div>
                      Damage to large blood vessels supplying Heart, limbs,
                      Brain etc.
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>
                        <b>Coronary Artery Disease</b> - damage to blood vessel
                        supplying heart
                      </div>
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>
                        <b>Peripheral arterial disease</b> - damage to blood
                        vessel supplying limbs
                      </div>
                    </div>
                    <div className="faqextrapoints">
                      <div>
                        <LuArrowRight />
                      </div>
                      <div>
                        <b>Cerebrovascular disease</b> - damage to blood vessels
                        supplying brain tissue
                      </div>
                    </div>
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
              Diabetes?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
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
                <b>Eye disease</b> - Eye examination for Cataract, Eye pressure
                check up, Retinal examination
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Foot examination for Nerve damage</b>
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <b>Blood flow obstruction to lower limbs</b> - Doppler scan
              </div>
            </div>
            <Divider />
          </div>
        </IonAccordion>
        <IonAccordion value="15">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">How do I manage Diabetes?</IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                We can beat Diabetes and lead a healthy and long life by simple
                management techniques
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                <div>Life style modifications </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>To reduce the risk level.</div>
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    <b>Knowledge regarding self management in Diabetes.</b>
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
                  <b>Early Diagnosis</b> – of the disease and its complications
                </div>
                <div className="faqextrapoints">
                  <div>
                    <TbPoint />
                  </div>
                  <div>
                    Periodic health checkups and appropriate medications
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="16">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              What is self management in Diabetes?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Diabetes Self-Management helps people with diabetes to take the
                best care of themselves.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="17">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              Why self management in Diabetes so important?
            </IonLabel>
          </IonItem>
          <div className="ion-padding faqcontnet" slot="content">
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                People who have the knowledge and support to manage their
                diabetes are healthier than those who do not.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Learning how to control your diabetes will save money and time,
                and help you have fewer emergency and hospital visits.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Knowing how and when to take your medication, how to monitor
                your blood sugar (glucose), and how to take care of yourself,
                helps you manage your diabetes better.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                Managing your diabetes will help you avoid or delay serious
                health complications.
              </div>
            </div>
            <Divider />
            <div className="faqpoints">
              <div>
                <LuArrowRight />
              </div>
              <div>
                The skills you learn will help you take better care of yourself.
                Diabetes management starts with you.
              </div>
            </div>
          </div>
        </IonAccordion>
        <IonAccordion value="18">
          <IonItem slot="header" color="light">
            <IonLabel className="faqheader">
              How to care of yourself and learn to live with diabetes?
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
            <div
              style={{
                marginBottom: "15px",
                marginTop: "15px",
                fontWeight: "700",
              }}
            >
              Periodic Check up for screening complications
            </div>
            <div
              style={{
                marginBottom: "15px",
                fontWeight: "700",
              }}
            >
              Take your medicine regularly.
            </div>
            <div
              style={{
                fontWeight: "700",
              }}
            >
              Solve problems
            </div>
            <div className="faqpoints">
              <div>{/* <LuArrowRight /> */}</div>
              <div>
                {/* <div>Solve problems</div> */}
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

            <div
              style={{
                marginTop: "15px",
                fontWeight: "700",
              }}
            >
              Be strong and positive
            </div>
            <div className="faqpoints">
              <div>{/* <LuArrowRight /> */}</div>
              <div>
                {/* <div>Solve problems</div> */}
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

            <div
              style={{
                marginTop: "15px",
                fontWeight: "700",
              }}
            >
              Reduce your risk of other health problems.
            </div>
            <div className="faqpoints">
              <div>{/* <LuArrowRight /> */}</div>
              <div>
                {/* <div>Solve problems</div> */}
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

export default Diabetes;
