import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./Intro.css";
import { useHistory } from "react-router";

import introImg from "../../assets/images/starting.png";
import introImgSvg from "../../assets/images/starting.svg";

const Intro: React.FC = () => {
  const history = useHistory();

  const handleNavigateSwipe = (route: string) => {
    history.push(route, {
      direction: "forward",
      animation: "slide",
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="loginScreen">
          <img src={introImgSvg} alt="" />
          <div className="loginContents">
            <p className="welcomeIntro">
              Welcome to <span> MEDPREDiT</span>
            </p>
            <p className="description">
              This app brings your health information together in one place.{" "}
            </p>
            <p className="description">
              You can see important changes or alerts, get insights from your
              data, and learn about essential topics
            </p>
            <button
              onClick={() => handleNavigateSwipe("/login")}
              className="getStartedButton"
            >
              Get Started
            </button>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Intro;
