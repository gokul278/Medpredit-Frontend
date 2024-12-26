import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";
import { useEffect, useState } from "react";
import Diabetes from "../KnowDisease/Diabetes";

const Tab1: React.FC = () => {
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
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                style={{ width: "30%", height: "100%" }}
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
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                style={{ width: "30%", height: "100%" }}
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
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                style={{ width: "30%", height: "100%" }}
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
              <img
                src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                style={{ width: "30%", height: "100%" }}
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
          ) : null}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
