import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonModal,
  IonPage,
  IonText,
  IonToast,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useRef, useState } from "react";

import "./Enroll.css";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";
import { arrowForwardOutline } from "ionicons/icons";
import { useHistory } from "react-router";

import axios from "axios";

import decrypt from "../../helper";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

const Enroll: React.FC = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(undefined);

  const history = useHistory();

  const [canDismiss, setCanDismiss] = useState(false);
  const [presentingElement, setPresentingElement] = useState<
    HTMLElement | undefined
  >(undefined);

  const [isSignInVisible, setIsSignInVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismiss() {
    modal.current?.dismiss();
  }

  const handleSignUp = () => {
    history.push("/home", {
      direction: "forward",
      animation: "slide",
    });
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/user/singin`,
        signInData
      );

      const data = decrypt(
        response.data[1],
        response.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );

      if (data.status) {
        const userDetails = {
          roleType: data.roleType,
          token: "Bearer " + data.token,
        };

        
        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        history.push("/home", {
          direction: "forward",
          animation: "slide",
        });
      } else {
        setErrorMessage("Invalid username or password");

        setToastMessage("Invalid username or password");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Error during Sign In:", error);
      setToastMessage("An error occurred. Please try again.");
      setShowToast(true);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    isSignIn: boolean = false
  ) => {
    const { name, value } = e.target;
    if (isSignIn) {
      setSignInData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleContinue = () => {
    dismiss();
    history.push("/home", {
      direction: "forward",
      animation: "slide",
    });
  };

  return (
    <IonPage ref={page}>
      <IonContent>
        <div
          className="signIn"
          style={{
            display: isSignInVisible ? "none" : "block",
            overflow: "auto",
          }}
        >
          <div className="signinPage">
            <p className="signinHeader ion-padding-bottom">Sign In</p>
            <p className="welcomeCont ion-padding-bottom">
              Hi! Welcome Back, You've Been Missed !!
            </p>

            <div className="formContentSignIn ion-padding-top">
              <div className="input-container">
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                  </span>
                  <InputText
                    name="username"
                    required
                    value={signInData.username}
                    style={{ inlineSize: "100%", boxSizing: "border-box" }}
                    onChange={(e) => handleInputChange(e, true)}
                    placeholder="Enter Mobile Number"
                  />
                </div>
                <div className="p-inputgroup flex-1">
                  <span className="p-inputgroup-addon">
                    <i className="pi pi-lock"></i>
                  </span>
                  <Password
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    toggleMask
                    required
                    style={{ inlineSize: "100%", boxSizing: "border-box" }}
                    value={signInData.password}
                    onChange={(e) => handleInputChange(e, true)}
                  />
                </div>
              </div>
              <p className="forgotPassword">Forgot Password ?</p>
              {errorMessage && (
                <IonText color="danger">{errorMessage}</IonText>
              )}{" "}
              <button
                className="ion-margin-top ion-margin-bottom"
                onClick={handleSignIn}
              >
                Sign In
              </button>
              {/* <Divider layout="horizontal">
                <b>OR</b>
              </Divider>
              <div className="googleSignIn">
                <Avatar icon="pi pi-envelope" size="large" shape="circle" />
              </div> */}
              {/* <div className="signUp">
                <p className="ion-padding-top">
                  Don't have an account?
                  <span onClick={() => setIsSignInVisible(false)}>
                    &nbsp; Sign up here!
                  </span>{" "}
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="register"
          style={{
            display: isSignInVisible ? "block" : "none",
            overflow: "auto",
          }}
        >
          <div className="signinPage">
            <p className="signinHeader ion-padding-bottom">Create Account</p>
            <p className="welcomeCont ion-padding-bottom">
              Fill your information below or register with your social account.
            </p>

            <div className="formContentSignIn ion-padding-top">
              <p>Name</p>
              <input type="text" required />
              <p>Email</p>
              <input type="email" required />
              <p>Password</p>
              <input type="password" required />
              <div className="termsCondition"></div>
              <button
                className="ion-margin-top ion-margin-bottom"
                id="open-modal"
              >
                Sign Up
              </button>
              <Divider layout="horizontal">
                <b>OR</b>
              </Divider>
              <div className="googleSignIn">
                <Avatar icon="pi pi-phone" size="large" shape="circle" />
              </div>
              <div className="signUp">
                <p className="ion-padding-top">
                  Already have an account ?
                  <span onClick={() => setIsSignInVisible(true)}>
                    &nbsp; Sign in here!
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <IonModal
          ref={modal}
          mode="ios"
          trigger="open-modal"
          canDismiss={canDismiss}
          presentingElement={presentingElement}
        >
          <IonHeader>
            <IonToolbar>
              <p className="termsCond">Terms & Conditions</p>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p className="ion-padding-horizontal termsConditionsCont">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              eaque at ab perferendis optio dicta labore nisi illo consequatur
              architecto. Cum exercitationem dicta sapiente recusandae molestiae
              quaerat placeat odio et?
            </p>
            <IonItem>
              <IonCheckbox
                id="terms"
                checked={canDismiss}
                onIonChange={(ev) => {
                  setCanDismiss(ev.detail.checked);
                }}
              >
                <div className="ion-text-wrap">
                  Do you accept the terms and conditions?
                </div>
              </IonCheckbox>
            </IonItem>
            <IonButton
              disabled={!canDismiss}
              onClick={handleContinue}
              className="continueButton"
            >
              Continue
              <IonIcon icon={arrowForwardOutline}></IonIcon>
            </IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Enroll;
