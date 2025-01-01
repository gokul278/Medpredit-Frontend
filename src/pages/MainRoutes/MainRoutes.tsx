import {
  IonContent,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonTabButton,
  IonTabBar,
} from "@ionic/react";
import React, { useState } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router";
import Tab1 from "../Tab1/Tab1";
import Tab2 from "../Tab2/Tab2";
import Tab3 from "../Tab3/Tab3";
import Tab4 from "../Tab4/Tab4";
import {
  bookOutline,
  bookSharp,
  cogOutline,
  cogSharp,
  homeOutline,
  homeSharp,
  personAddOutline,
  personAddSharp,
  personOutline,
  personSharp,
  settingsOutline,
  settingsSharp,
} from "ionicons/icons";
import Login from "../../components/01-Login/Login";
import Splashscreen from "../../components/00-Splashscreen/Splashscreen";
import Intro from "../../components/02-Intro/Intro";
import Enroll from "../../components/03-Enroll/Enroll";
import AddUser from "../AddUser/AddUser";
import KnowAboutPatient from "../../components/22-KnowAboutPatient/KnowAboutPatient";
import Questions from "../Questions/Questions";
import Tab5 from "../Tab5/Tab5";
import AddQuestions from "../../components/33-AddQuestions/AddQuestions";
import AddEmployee from "../../components/34-AddEmployee/AddEmployee";
import SubCategories from "../SubCategories/SubCategories";
import AddFamilyUser from "../AddFamilyUser/AddFamilyUser";
import PastReport from "../../components/35-PastReport/PastReport";
import AlcoholInfo from "../Information/AlcoholInfo";
import AlcoholInstructions from "../Instructions/AlcoholInstructions";
import TobaccoInfo from "../Information/TobaccoInfo";
import ChangePassword from "../../components/04-ChangePassword/ChangePassword";
import { StatusBar, Style } from "@capacitor/status-bar";
import PhysicalInstructions from "../Instructions/PhysicalInstructions";
import PhysicalInfo from "../Information/PhysicalInfo";
import CurrentReport from "../../components/36-CurrentReport/CurrentReport";
import ReportPDF from "../ReportPDF/ReportPDF";
import TobaccoInstructions from "../Instructions/TobaccoInstructions";
import StressInstructions from "../Instructions/StressInstructions";
import StressInfo from "../Information/StressInfo";
import TesingPdf from "../TestingPdf/TestingPdf";

import knowabout from "../../assets/logo/knowabout.png";
import knowaboutOutline from "../../assets/logo/knowaboutOutline.png";

const MainRoutes: React.FC = () => {
  const location = useLocation();

  const configureStatusBar = async () => {
    const path = location.pathname;
    let bgcolor = "#ffffff";
    // if (path === "/splash") {
    //   bgcolor = "#d90216";
    // }
    // Change the color (example: blue)
    await StatusBar.setBackgroundColor({ color: bgcolor });

    // Optional: Set the style (light or dark content)
    await StatusBar.setStyle({ style: Style.Light });
  };

  // Call the function on app startup
  configureStatusBar();

  const showTabBar = [
    "/home",
    "/patient",
    "/advice",
    "/disease",
    "/settings",
    "/configure",
  ].includes(location.pathname);

  const history = useHistory();

  const tokenString = localStorage.getItem("userDetails");

  let roleType = 1;

  if (tokenString) {
    const tokenObject = JSON.parse(tokenString);
    roleType = tokenObject.roleType;
  }

  const patient = [
    {
      name: "Home",
      path: "/home",
      outlineIcon: homeOutline,
      sharpIcon: homeSharp,
    },
    {
      name: "Profile",
      path: "/settings",
      outlineIcon: personOutline,
      sharpIcon: personSharp,
    },
    {
      name: "Disease",
      path: "/disease",
      outlineIcon: knowabout,
      sharpIcon: knowaboutOutline,
    },
  ];

  const assistant = [
    {
      name: "Home",
      path: "/home",
      outlineIcon: homeOutline,
      sharpIcon: homeSharp,
    },
    {
      name: "Disease",
      path: "/disease",
      outlineIcon: knowabout,
      sharpIcon: knowaboutOutline,
    },
    {
      name: "Patient",
      path: "/patient",
      outlineIcon: personAddOutline,
      sharpIcon: personAddSharp,
    },
    {
      name: "Profile",
      path: "/settings",
      outlineIcon: personOutline,
      sharpIcon: personSharp,
    },
  ];

  const doctor = [
    {
      name: "Home",
      path: "/home",
      outlineIcon: homeOutline,
      sharpIcon: homeSharp,
    },
    {
      name: "Patient",
      path: "/patient",
      outlineIcon: personAddOutline,
      sharpIcon: personAddSharp,
    },
    {
      name: "Disease",
      path: "/disease",
      outlineIcon: knowabout,
      sharpIcon: knowaboutOutline,
    },
    {
      name: "Advice",
      path: "/advice",
      outlineIcon: bookOutline,
      sharpIcon: bookSharp,
    },
    {
      name: "Profile",
      path: "/settings",
      outlineIcon: personOutline,
      sharpIcon: personSharp,
    },
  ];

  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route exact path="/">
          <Splashscreen />
        </Route>
        <Route exact path="/changePassword">
          <ChangePassword />
        </Route>
        <Route path="/home">
          <Tab1 />
        </Route>
        <Route path="/patient">
          <Tab2 />
        </Route>
        <Route path="/advice">
          <Tab3 />
        </Route>
        <Route path="/settings">
          <Tab4 />
        </Route>
        <Route path="/disease">
          <Tab5 />
        </Route>
        <Route path="/addUser">
          <AddUser />
        </Route>
        <Route path="/addfamilyuser/:urlMobileNo/:urluserId">
          <AddFamilyUser />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/splash">
          <Splashscreen />
        </Route>
        <Route path="/intro">
          <Intro />
        </Route>
        <Route path="/enroll">
          <Enroll />
        </Route>
        <Route path="/subCategories/:categoryId/:categroyName">
          <SubCategories />
        </Route>
        <Route path="/knowAbout/:patient/:patientId">
          <KnowAboutPatient />
        </Route>
        <Route path="/questions/:refCategoryLabel/:cardTitle">
          <Questions />
        </Route>
        <Route path="/addQuestions">
          <AddQuestions />
        </Route>
        <Route path="/addEmployee">
          <AddEmployee />
        </Route>
        <Route path="/pastreport/:reportDate">
          <PastReport />
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>

        <Route path="/physicalActivity/instructions">
          <PhysicalInstructions />
        </Route>

        <Route path="/tobacoo/instructions">
          <TobaccoInstructions />
        </Route>

        <Route path="/stress/instructions">
          <StressInstructions />
        </Route>

        <Route path="/alcohol/instructions">
          <AlcoholInstructions />
        </Route>

        <Route path="/physicalActivity/showCards">
          <PhysicalInfo />
        </Route>

        <Route path="/tobacoo/showCards">
          <TobaccoInfo />
        </Route>

        <Route path="/stress/showCards">
          <StressInfo />
        </Route>

        <Route path="/alcohol/showCards">
          <AlcoholInfo />
        </Route>

        <Route path="/currentReport/:patient/:patientId">
          <CurrentReport />
        </Route>

        <Route path="/testingPdf">
          <TesingPdf reportDate={"24-12-2024"} />
        </Route>
      </IonRouterOutlet>

      {showTabBar && (
        <IonTabBar slot="bottom">
          {(roleType === 1
            ? doctor
            : roleType === 2
            ? assistant
            : roleType === 3
            ? patient
            : []
          ).map((element) => (
            <IonTabButton tab={element.name} href={element.path}>
              {element.name === "Disease" ? (
                <img
                  style={{ width: "40px", paddingTop: "5px" }}
                  src={
                    history.location.pathname === "/disease"
                      ? element.sharpIcon
                      : element.outlineIcon
                  }
                  alt="knowabout"
                />
              ) : (
                <IonIcon
                  icon={
                    location.pathname === element.path
                      ? element.sharpIcon
                      : element.outlineIcon
                  }
                />
              )}
              <IonLabel style={{ fontSize: "12px" }}>{element.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      )}
    </IonTabs>
  );
};

export default MainRoutes;
