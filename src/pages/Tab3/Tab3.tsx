import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      {/* <IonHeader mode="ios">
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonPage>
        <IonContent fullscreen>
          <div
            style={{
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Advice - Coming Soon</h1>
          </div>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Tab3;
