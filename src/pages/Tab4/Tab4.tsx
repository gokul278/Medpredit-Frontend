import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab4.css";
import { Divider } from "primereact/divider";
import {
  chatbubblesOutline,
  compassOutline,
  cube,
  gift,
  headset,
  heart,
  languageOutline,
  notificationsOutline,
  personOutline,
  starOutline,
  logOutOutline,
} from "ionicons/icons";
import SettingsTile from "../SettingsTile/SettingsTile";
import ListItem from "../ListItem/ListItem";
import { useHistory } from "react-router";

const Tab4: React.FC = () => {
  const tilesData = [
    { icon: cube, label: "Order" },
    { icon: heart, label: "Wishlist" },
    { icon: gift, label: "Gift" },
    { icon: headset, label: "Help Center" },
  ];

  const listData = [
    { icon: personOutline, label: "Edit Profile" },
    { icon: compassOutline, label: "Save Addresses" },
    { icon: languageOutline, label: "Select Language" },
    { icon: notificationsOutline, label: "Notification Settings" },
  ];

  const overallSettings = [
    { icon: starOutline, label: "Reviews" },
    { icon: chatbubblesOutline, label: "Questions & Answers" },
  ];

  const history = useHistory();

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="light">
        <div className="headerCont">
          <div className="headerProfile">
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              alt=""
            />
            <div className="profileEditCont ion-padding-start">
              <p>Thomas Djono</p>
              <p>ID 01011213</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="settingsGrids">
          {/* <SettingsTile tiles={tilesData} /> */}
        </div>
        <div className="listsSettings">
          <p className="headings">Account Settings</p>
          <div className="listSet">
            {listData.map((item, index) => (
              <ListItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div>
        <div className="listsSettings">
          <p className="headings">Overall Settings</p>
          <div className="listSet">
            {overallSettings.map((item, index) => (
              <ListItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
          <div onClick={()=>{
            localStorage.clear();
            location.replace("/")
          }} className="listSet">
            <ListItem key="logout" icon={logOutOutline} label="Logout" />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
