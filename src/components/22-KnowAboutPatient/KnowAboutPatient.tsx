import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonLabel,
  IonPage,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import KnowCards from "../../pages/KnowCards/KnowCards";
import axios from "axios";
import decrypt from "../../helper";

const KnowAboutPatient: React.FC = () => {
  const { patient, patientId } = useParams<{
    patient: string;
    patientId: string;
  }>();

  const [categories, setCategories] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [subCategoryData, setSubCategoryData] = useState<
    { refQCategoryId: number; refCategoryLabel: string }[]
  >([]);
  const tokenString: any = localStorage.getItem("userDetails");

  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  useEffect(() => {
    if (tokenString) {
      try {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getMainCategory`,
            {
              patientId: patientId,
              employeeId: localStorage.getItem("currentDoctorId")
                ? localStorage.getItem("currentDoctorId")
                : null,
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
            setSelectedValue("knowabout");

            if (data.data.length > 0) {
              setCategories(data.data);
              categories.push({
                refQCategoryId: 4,
                refCategoryLabel: "Know About Patient",
              });

              const firstCategory = data.data[0];
              subMainCategory(firstCategory.refQCategoryId);
            } else {
            }
          });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
  }, [tokenString]);

  const subMainCategory = async (categoryId: number) => {
    try {
      const subCategory = await axios.post(
        `${import.meta.env.VITE_API_URL}/getSubMainCategory`,
        {
          patientId: patientId,
          SubCategoryId: categoryId,
          employeeId: localStorage.getItem("currentDoctorId")
            ? localStorage.getItem("currentDoctorId")
            : null,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      const data = decrypt(
        subCategory.data[1],
        subCategory.data[0],
        import.meta.env.VITE_ENCRYPTION_KEY
      );

      if (data.status) {
        setSubCategoryData(data.data);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSegmentChange = (value: any) => {
    setSelectedValue(value);

    const selectedCategory = categories.find(
      (category) => category.refCategoryLabel === value
    );

    if (value === "knowabout") {
      console.log("-------------Hello");
    } else {
      if (selectedCategory) {
        subMainCategory(selectedCategory.refQCategoryId);
      }
    }
  };

  const getReport = async () => {};

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
          </IonButtons>
          <IonTitle>{patient}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSegment
            value={selectedValue}
            scrollable={true}
            onIonChange={(e) => handleSegmentChange(e.detail.value!)}
          >
            <IonSegmentButton
              key="knowabout"
              value="knowabout"
              contentId="knowabout"
            >
              <IonLabel>Know About Patient</IonLabel>
            </IonSegmentButton>
            {categories.map((category) => (
              <IonSegmentButton
                key={category.refQCategoryId}
                value={category.refCategoryLabel}
                contentId={category.refCategoryLabel}
              >
                <IonLabel>{category.refCategoryLabel}</IonLabel>
              </IonSegmentButton>
            ))}
          </IonSegment>
        </IonToolbar>
        <div>
          {selectedValue === "knowabout" ? (
            <IonSegmentContent key="knowabout" id="knowabout">
              <div>Hello</div>
            </IonSegmentContent>
          ) : (
            <>
              {categories.map((category) => (
                <IonSegmentContent
                  key={category.refQCategoryId}
                  id={category.refCategoryLabel}
                >
                  {selectedValue === category.refCategoryLabel && (
                    <>
                      <KnowCards cardData={subCategoryData} />
                    </>
                  )}
                </IonSegmentContent>
              ))}
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default KnowAboutPatient;
