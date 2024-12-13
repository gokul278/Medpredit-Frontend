import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./Splashscreen.css";
import { IonContent, IonPage } from "@ionic/react";

import logo1 from "../../assets/logo/icon.svg";
import logo2 from "../../assets/logo/logo.svg";

const Splashscreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      const tokenString = localStorage.getItem("userDetails");

      if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        const roleType = tokenObject.roleType;

        if (roleType === 1 || roleType === 2 || roleType === 3) {
          history.push("/home");
        } else {
          history.push("/intro");
        }
      } else {
        history.push("/intro");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="splashScreenContents ion-padding-start ion-padding-end">
          <img src={logo2} alt="" />
          {/* <p>MEDPREDiT</p> */}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Splashscreen;
