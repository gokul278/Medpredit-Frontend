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

import profile from "../../assets/images/profile.png";

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
  lockClosedOutline,
} from "ionicons/icons";
import SettingsTile from "../SettingsTile/SettingsTile";
import ListItem from "../ListItem/ListItem";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import Axios from "axios";
import decrypt from "../../helper";

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
    {
      icon: lockClosedOutline,
      label: "Change Password",
      location: "/changePassword",
    },
  ];

  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    userCustId: "",
  });

  useEffect(() => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.get(`${import.meta.env.VITE_API_URL}/getProfile`, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      }).then((response) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.status) {
          setUserData({
            name: data.data.refUserName,
            userCustId: data.data.refUserCustId,
          });
        }
      });
    }
  }, []);

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
            <img src={profile} alt="" />
            <div className="profileEditCont ion-padding-start">
              <p>{userData.name}</p>
              <p>ID {userData.userCustId}</p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="settingsGrids">
          {/* <SettingsTile tiles={tilesData} /> */}
        </div>
        {/* <div className="listsSettings">
          <p className="headings">Account Settings</p>
          <div className="listSet">
            {listData.map((item, index) => (
              <ListItem key={index} icon={item.icon} label={item.label} />
            ))}
          </div>
        </div> */}
        <div className="listsSettings">
          <p className="headings">Overall Settings</p>
          <div className="listSet">
            {overallSettings.map((item, index) => (
              <ListItem
                key={index}
                icon={item.icon}
                label={item.label}
                location={item.location}
              />
            ))}
          </div>
          <div
            onClick={() => {
              localStorage.clear();
              location.replace("/");
            }}
            className="listSet"
          >
            <div onClick={() => {}} className="listItems">
              <div className="listContent">
                <IonIcon icon={logOutOutline} />
                <p>Logout</p>
              </div>
              <IonIcon className="chevronIcon" icon="chevronForwardOutline" />
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
