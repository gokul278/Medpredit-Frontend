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
import { useHistory, useParams } from "react-router";
import SubCards from "./SubCards";
import axios from "axios";
import decrypt from "../../helper";

const SubCategories: React.FC = () => {
  const { categoryId, categroyName } = useParams<{
    categoryId: string;
    categroyName: string;
  }>();

  useEffect(() => {
    const getCategory = {
      id: categoryId,
      label: categroyName,
    };

    localStorage.setItem("getCategory", JSON.stringify(getCategory));
  }, []);

  const [categories, setCategories] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);

  const history = useHistory();

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
              employeeId:
                tokenObject.roleType === 1
                  ? null
                  : localStorage.getItem("currentDoctorId"),
              hospitalId: localStorage.getItem("hospitalId"),
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

            setCategories(data.data);

            console.log("----------->", data.data);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }

    console.log(history.location.pathname);
  }, [history.location.pathname]);

  const [backwardQ, setBackwardQ] = useState({
    id: 0,
    label: "",
  });

  useEffect(() => {
    const categoryString: any = localStorage.getItem("getSubCategory");
    const categoryObject = JSON.parse(categoryString);

    setBackwardQ({
      id: categoryObject.id,
      label: categoryObject.label,
    });
  }, []);

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton
              mode="md"
              defaultHref={`knowAbout/${backwardQ.label}/${backwardQ.id}`}
            ></IonBackButton>
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
