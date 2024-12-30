import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Tab5.css";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
  IonTitle,
  IonToolbar,
  SegmentValue,
} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import Diabetes from "../KnowDisease/Diabetes";
import diabetesImg from "../../assets/KnowAbout/diabetics.png";
import hypertension from "../../assets/KnowAbout/hypertension.png";
import stroke from "../../assets/KnowAbout/stroke.png";
import coronary from "../../assets/KnowAbout/coronary.png";
import Hypertension from "../KnowDisease/Hypertension";
import diabetesWhite from "../../assets/KnowAbout/diabeticsWhite.png";
import hypertensionWhite from "../../assets/KnowAbout/hypertensionWhite.png";
import strokeWhite from "../../assets/KnowAbout/strokeWhite.png";
import coronaryWhite from "../../assets/KnowAbout/coronaryWhite.png";
import Coronary from "../KnowDisease/Coronary";
import Stroke from "../KnowDisease/Stroke";

const Tab5: React.FC = () => {
  const [selectedSegment, setSelectedSegment] =
    useState<SegmentValue>("questions");
  const history = useHistory();

  const handleAddClick = () => {
    if (selectedSegment === "questions") {
      history.push("/addQuestions");
    } else if (selectedSegment === "employee") {
      history.push("/addEmployee");
    }
  };

  const [activeDisease, setActiveDisease] = useState(1);

  useEffect(() => {
    console.log(activeDisease);
  }, [activeDisease]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              height: "170px",
              justifyContent: "center",
              padding: "0px 10px",
              marginTop: "10px",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "48%",
                height: "80px",
                background:
                  activeDisease === 1
                    ? "linear-gradient(160deg, #077556, #2f9f97)"
                    : "#e6e6e6",

                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: activeDisease === 1 ? "#fff" : "#000",
              }}
              onClick={() => {
                setActiveDisease(1);
              }}
            >
              <img
                src={activeDisease != 1 ? diabetesImg : diabetesWhite}
                width={70}
              />
              <div
                style={{
                  width: "70%",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Diabetes
              </div>
            </div>
            <div
              style={{
                width: "48%",
                height: "80px",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background:
                  activeDisease === 2
                    ? "linear-gradient(160deg, #077556, #2f9f97)"
                    : "#e6e6e6",
                color: activeDisease === 2 ? "#fff" : "#000",
              }}
              onClick={() => {
                setActiveDisease(2);
              }}
            >
              <img
                src={activeDisease != 2 ? hypertension : hypertensionWhite}
                width={60}
              />
              <div
                style={{
                  width: "70%",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Hypertension
              </div>
            </div>
            <div
              style={{
                width: "48%",
                height: "80px",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                background:
                  activeDisease === 3
                    ? "linear-gradient(160deg, #077556, #2f9f97)"
                    : "#e6e6e6",
                color: activeDisease === 3 ? "#fff" : "#000",
              }}
              onClick={() => {
                setActiveDisease(3);
              }}
            >
              <img
                src={activeDisease != 3 ? coronary : coronaryWhite}
                width={60}
              />
              <div
                style={{
                  width: "70%",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Coronary Artery Disease
              </div>
            </div>
            <div
              style={{
                width: "48%",
                height: "80px",
                background:
                  activeDisease === 4
                    ? "linear-gradient(160deg, #077556, #2f9f97)"
                    : "#e6e6e6",
                borderRadius: "10px",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                color: activeDisease === 4 ? "#fff" : "#000",
              }}
              onClick={() => {
                setActiveDisease(4);
              }}
            >
              <img src={activeDisease != 4 ? stroke : strokeWhite} width={60} />
              <div
                style={{
                  width: "70%",
                  padding: "10px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Stroke
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "10px", marginTop: "5px" }}>
          {activeDisease === 1 ? (
            <>
              <Diabetes />
            </>
          ) : activeDisease === 2 ? (
            <>
              <Hypertension />
            </>
          ) : activeDisease === 3 ? (
            <>
              <Coronary />
            </>
          ) : activeDisease === 4 ? (
            <>
              <Stroke />
            </>
          ) : null}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
