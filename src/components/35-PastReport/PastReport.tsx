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
import axios from "axios";
import decrypt from "../../helper";

interface Category {
  refQCategoryId: any;
  refCategoryLabel: any;
  refSubCategory: any;
  refTotalScore?: any;
}

const PastReport: React.FC = () => {
  const { reportId } = useParams<{
    reportId: string;
  }>();

  useEffect(() => {
    getUser();
  }, []);

  const [reportDetails, setreportDetails] = useState({
    createdAt: "",
    doctorname: "",
    hospitaladdress: "",
    hospitalname: "",
    hospitalpincode: "",
    refDoctorId: "",
    refHospitalId: "",
    refQCategoryId: "",
    refTotalScore: "",
    refUserId: "",
  });

  const [MaiCategory, setMainCategory] = useState<Category[]>([]);
  const [SubCategory, setSubCategory] = useState<Category[]>([]);
  const [category, setCategory] = useState<Category[]>([]);

  const getUser = () => {
    const tokenString = localStorage.getItem("userDetails");
    if (tokenString) {
      try {
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getPastReport`,
            {
              scoreId: reportId,
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

            if (data.status) {
              const reportDetails = data.reportDetails;

              setreportDetails({
                createdAt: reportDetails.createdAt,
                doctorname: reportDetails.doctorname,
                hospitaladdress: reportDetails.hospitaladdress,
                hospitalname: reportDetails.hospitalname,
                hospitalpincode: reportDetails.hospitalpincode,
                refDoctorId: reportDetails.refDoctorId,
                refHospitalId: reportDetails.refHospitalId,
                refQCategoryId: reportDetails.refQCategoryId,
                refTotalScore: reportDetails.refTotalScore,
                refUserId: reportDetails.refUserId,
              });

              const MaiCategory: any = [];

              const SubCategory: any = [];

              const category: any = [];

              data.questionDetails.forEach((element: any) => {
                if (element.refSubCategory === "0") {
                  MaiCategory.push({
                    refQCategoryId: element.refQCategoryId,
                    refCategoryLabel: element.refCategoryLabel,
                    refSubCategory: element.refSubCategory,
                  });
                  data.questionDetails.forEach((subcat: any) => {
                    if (
                      element.refQCategoryId === parseInt(subcat.refSubCategory)
                    ) {
                      SubCategory.push({
                        refQCategoryId: subcat.refQCategoryId,
                        refCategoryLabel: subcat.refCategoryLabel,
                        refSubCategory: subcat.refSubCategory,
                      });
                      data.questionDetails.forEach((cat: any) => {
                        if (
                          subcat.refQCategoryId === parseInt(cat.refSubCategory)
                        ) {
                          category.push({
                            refQCategoryId: cat.refQCategoryId,
                            refCategoryLabel: cat.refCategoryLabel,
                            refSubCategory: cat.refSubCategory,
                            refTotalScore: cat.refTotalScore,
                          });
                        }
                      });
                    }
                  });
                } else {
                  console.log("Heelos");

                  return 0;
                }
              });

              console.log("MainCategory ------------------", MaiCategory);
              console.log("SubCategory ------------------", SubCategory);
              console.log("Category ------------------", category);

              setMainCategory(MaiCategory);
              setSubCategory(SubCategory);
              setCategory(category);
            }
          })
          .catch((error) => {
            console.error("Error fetching patient data:", error);
          });
      } catch (error) {
        console.error("Error parsing token:", error);
      }
    } else {
      console.error("No token found in localStorage.");
    }
  };

  return (
    <>
      <IonPage>
        <IonHeader mode="ios">
          <IonToolbar className="pt-1 pb-1" mode="ios">
            <IonButtons slot="start">
              <IonBackButton mode="md" defaultHref="/patient"></IonBackButton>
            </IonButtons>
            <IonTitle>Past Report</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div
            style={{
              width: "100%",
              height: "91vh",
              overflow: "auto",
            }}
          >
            <div style={{ width: "100%", padding: "10px" }}>
              <div
                style={{
                  width: "100%",
                  background: "#e6e6e6",
                  borderRadius: "5px",
                  height: "120px",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    flexDirection: "column",
                    height: "80px",
                  }}
                >
                  <div style={{ fontSize: "16px", fontWeight: "700" }}>
                    Dr. {reportDetails.doctorname}
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: "700" }}>
                    {reportDetails.hospitalname}
                  </div>
                  <div style={{ fontSize: "14px", fontWeight: "500" }}>
                    {reportDetails.hospitalname},{" "}
                    {reportDetails.hospitalpincode}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    height: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <div>Score: {reportDetails.refTotalScore}%</div>
                  <div>Date: {reportDetails.createdAt}</div>
                </div>
              </div>

              {MaiCategory.map((Main, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    background: "#e6e6e6",
                    marginTop: "10px",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "16px",
                      fontWeight: "700",
                      textDecoration: "underline",
                    }}
                  >
                    {Main.refCategoryLabel}
                  </div>

                  {SubCategory.filter(
                    (Sub) =>
                      parseInt(Sub.refSubCategory) ===
                      parseInt(Main.refQCategoryId)
                  ).map((Sub, index) => (
                    <div key={index}>
                      <div
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          marginTop: "10px",
                          paddingLeft: "10px",
                          textDecoration: "underline",
                        }}
                      >
                        {Sub.refCategoryLabel}
                      </div>

                      {category
                        .filter(
                          (Cat) =>
                            parseInt(Cat.refSubCategory) ===
                            parseInt(Sub.refQCategoryId)
                        )
                        .map((Cat, index) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginTop: "10px",
                              paddingLeft: "20px",
                              paddingRight: "20px",
                            }}
                            key={index}
                          >
                            <div
                              style={{ fontSize: "14px", fontWeight: "500" }}
                            >
                              {Cat.refCategoryLabel}
                            </div>
                            <div>
                              {Cat.refTotalScore
                                ? Cat.refTotalScore + " %"
                                : "NULL"}
                            </div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PastReport;
