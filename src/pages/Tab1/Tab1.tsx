import {
  IonContent,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

const Tab1: React.FC = () => {
  return (
    // <IonPage>
    //   <IonToolbar className="ion-padding-top">
    //     <IonSearchbar placeholder="Search Patient"></IonSearchbar>{" "}
    //   </IonToolbar>
    //   <IonContent fullscreen>
    //     <div
    //       className="homePageContents"
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         alignItems: "center",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <img
    //         src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
    //         alt=""
    //       />
    //       <img
    //         src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
    //         alt=""
    //       />
    //       <img
    //         src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
    //         alt=""
    //       />
    //     </div>
    //   </IonContent>
    // </IonPage>

    <IonPage>
      <IonContent fullscreen>
        <div style={{
          width:"100%",
          height:"100vh",
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
        <h1>Home - Coming Soon</h1>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
