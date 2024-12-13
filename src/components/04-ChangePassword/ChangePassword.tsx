import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useState } from "react";

const ChangePassword: React.FC = () => {
  const [signInData, setSignInData] = useState({
    oldPassword: "",
    newPassword: "",
    conformPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setSignInData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Password Data:", signInData);
  };

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/settings"></IonBackButton>
          </IonButtons>
          <IonTitle>Change Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="flex flex-row ion-padding-start ion-padding-end ion-padding-top">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Password
              type="password"
              name="password"
              placeholder="Enter Current Password"
              toggleMask
              required
              style={{ inlineSize: "100%", boxSizing: "border-box" }}
              value={signInData.oldPassword}
              onChange={(e) => handleInputChange("oldPassword", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row ion-padding-start ion-padding-end ion-padding-top">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Password
              type="password"
              name="password"
              placeholder="Enter New Password"
              toggleMask
              required
              style={{ inlineSize: "100%", boxSizing: "border-box" }}
              value={signInData.newPassword}
              onChange={(e) => handleInputChange("newPassword", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row ion-padding-start ion-padding-end ion-padding-top">
          <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon">
              <i className="pi pi-lock"></i>
            </span>
            <Password
              type="password"
              name="password"
              placeholder="Conform Password"
              toggleMask
              required
              style={{ inlineSize: "100%", boxSizing: "border-box" }}
              value={signInData.conformPassword}
              onChange={(e) =>
                handleInputChange("conformPassword", e.target.value)
              }
            />
          </div>
        </div>
      </IonContent>
      <IonFooter>
        <IonButton
          className="changePasswordBtn"
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            borderRadius: "10px",
            margin: "10px",
            fontWeight: "bold",
            textTransform: "capitalize",
            background: "#1c70b0",
          }}
          onClick={handleSubmit}
        >
          Change Password
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default ChangePassword;
