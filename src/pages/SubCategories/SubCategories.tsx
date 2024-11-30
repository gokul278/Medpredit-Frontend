import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import SubCards from "./SubCards";
import axios from "axios";
import decrypt from "../../helper";

const SubCategories: React.FC = () => {
  const { categoryId, categroyName } = useParams<{
    categoryId: string;
    categroyName: string;
  }>();

  const [categories, setCategories] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);

  useEffect(() => {
    const tokenString = localStorage.getItem("userDetails");
    const patientId = localStorage.getItem("currentPatientId");

    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getCategory `,
            {
              SubCategoryId: categoryId,
              patientId: patientId,
            },
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            const data = decrypt(
              response.data[1],
              response.data[0],
              import.meta.env.VITE_ENCRYPTION_KEY
            );

            console.log(data.data);

            setCategories(data.data);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  }, []);

  // const subCardData = [
  //   {
  //     id: "1",
  //     riskFactor: "Physical Activity",
  //     completionPercentage: 85,
  //     filledBy: "Dr. Smith",
  //     filledDate: "22-Nov-2024",
  //   },
  //   {
  //     id: "2",
  //     riskFactor: "Stress",
  //     completionPercentage: 60,
  //     filledBy: "Dr. Taylor",
  //     filledDate: "21-Nov-2024",
  //   },
  //   {
  //     id: "3",
  //     riskFactor: "Tobacco",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  //   {
  //     id: "4",
  //     riskFactor: "Alcohol",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  //   {
  //     id: "5",
  //     riskFactor: "Diet",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  //   {
  //     id: "6",
  //     riskFactor: "Sleep",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  //   {
  //     id: "7",
  //     riskFactor: "BMI",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  //   {
  //     id: "8",
  //     riskFactor: "Family History",
  //     completionPercentage: 45,
  //     filledBy: "Dr. Brown",
  //     filledDate: "20-Nov-2024",
  //   },
  // ];

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{categroyName}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <SubCards
          data={categories}
          categoryId={categoryId}
          categroyName={categroyName}
        />
      </IonContent>
    </IonPage>
  );
};

export default SubCategories;
