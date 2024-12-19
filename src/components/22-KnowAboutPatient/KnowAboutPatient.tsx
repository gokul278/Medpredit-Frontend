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

import { useHistory, useParams } from "react-router-dom";
import KnowCards from "../../pages/KnowCards/KnowCards";
import axios from "axios";
import decrypt from "../../helper";

import report from "../../assets/images/reports.png";
import { Divider } from "primereact/divider";

const KnowAboutPatient: React.FC = () => {
  const history = useHistory();
  const { patient, patientId } = useParams<{
    patient: string;
    patientId: string;
  }>();

  useEffect(() => {
    const getSubCategory = {
      id: patientId,
      label: patient,
    };

    localStorage.setItem("getSubCategory", JSON.stringify(getSubCategory));
  }, []);

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

  interface Report {
    refScoreId: string;
    doctorname: string;
    hospitalname: string;
    hospitaladdress: string;
    hospitalpincode: string;
    refTotalScore: number;
    createdAt: string;
  }

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
            setSelectedValue("knowabout");

            if (data.data.length > 0) {
              setCategories(data.data);
              categories.push({
                refQCategoryId: 4,
                refCategoryLabel: "Know About Patient",
              });
              getReport();

              const firstCategory = data.data[0];
              subMainCategory(firstCategory.refQCategoryId);
            } else {
            }
          });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
  }, [history.location.pathname]);

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
      getReport();
    } else {
      if (selectedCategory) {
        subMainCategory(selectedCategory.refQCategoryId);
      }
    }
  };

  const getReport = async () => {
    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/postPastReport`,
          {
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

          if (data.status) {
            setAllReports(data.data);
          }
        });
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }

    try {
      axios
        .post(
          `${import.meta.env.VITE_API_URL}/postCurrentReport`,
          {
            doctorId: localStorage.getItem("currentDoctorId")
              ? localStorage.getItem("currentDoctorId")
              : null,
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

          if (data.status) {
            console.log(data);
            setCurrentReport(data.currentCatgoryStatus);
            setNavCategory({
              id: data.categoryId,
              label: data.categoryLabel,
            });
          }
        });
    } catch (error) {
      console.error("Error fetching patient data:", error);
    }
  };

  const [allReports, setAllReports] = useState<Report[]>([]);

  const [currentReport, setCurrentReport]: any = useState(true);

  const [navCategory, setNavCategory] = useState({
    id: "",
    label: "",
  });

  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons
            onClick={() => {
              history.goBack();
            }}
            slot="start"
          >
            <IonBackButton mode="md"></IonBackButton>
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
            <>
              <IonSegmentContent key="knowabout" id="knowabout">
                <div
                  style={{
                    width: "100%",
                    height: "85vh",
                    overflow: "auto",
                    padding: "0px 10px",
                  }}
                >
                  {currentReport ? (
                    <></>
                  ) : (
                    <>
                      <Divider layout="horizontal">
                        <div
                          style={{
                            color: "#939185",
                            fontWeight: "500",
                          }}
                        >
                          Current Report
                        </div>
                      </Divider>

                      <div
                        onClick={() => {
                          history.push(
                            `/questions/${navCategory.label}/${navCategory.id}`
                          );
                        }}
                        style={{
                          width: "100%",
                          background: "#FFDE4D",
                          borderRadius: "5px",
                          height: "50px",
                          padding: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ fontSize: "14px" }}>
                          <i
                            className="pi pi-clock"
                            style={{ paddingRight: "10px" }}
                          ></i>
                          Pending (Complete the Report)
                        </div>
                        <div>
                          <i
                            className="pi pi-angle-right"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                        </div>
                      </div>
                    </>
                  )}

                  {currentReport === "report" ? (
                    <>
                      <Divider layout="horizontal">
                        <div
                          style={{
                            color: "#939185",
                            fontWeight: "500",
                          }}
                        >
                          Current Report
                        </div>
                      </Divider>

                      <div
                        onClick={() => {
                          history.push(
                            `/currentReport/${patient}/${patientId}`
                          );
                        }}
                        style={{
                          width: "100%",
                          background: "#5DB996",
                          borderRadius: "5px",
                          height: "50px",
                          padding: "10px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div style={{ fontSize: "14px" }}>
                          <i
                            className="pi pi-check"
                            style={{ paddingRight: "10px" }}
                          ></i>
                          Questions Completed (Generate Report)
                        </div>
                        <div>
                          <i
                            className="pi pi-angle-right"
                            style={{ fontSize: "1.5rem" }}
                          ></i>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <Divider layout="horizontal">
                    <div
                      style={{
                        color: "#939185",
                        fontWeight: "500",
                      }}
                    >
                      Past Report
                    </div>
                  </Divider>
                  {allReports.length > 0 ? (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        {allReports.map((allreport, index) => (
                          <div
                            key={index}
                            style={{
                              width: "100%",
                              background: "#e6e6e6",
                              borderRadius: "5px",
                              height: "120px",
                              padding: "10px",
                            }}
                            onClick={() => {
                              history.push(
                                `/pastreport/${allreport.createdAt}`
                              );
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
                              <div
                                style={{ fontSize: "16px", fontWeight: "700" }}
                              >
                                Dr. {allreport.doctorname}
                              </div>
                              <div
                                style={{ fontSize: "16px", fontWeight: "700" }}
                              >
                                {allreport.hospitalname}
                              </div>
                              <div
                                style={{ fontSize: "14px", fontWeight: "500" }}
                              >
                                {allreport.hospitaladdress},{" "}
                                {allreport.hospitalpincode}
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
                              {/* <div>Score: {allreport.refTotalScore}%</div> */}
                              <div></div>
                              <div>Date: {allreport.createdAt}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <img
                          style={{ height: "40vh" }}
                          src={report}
                          alt="patient"
                        />
                        <div
                          style={{
                            marginTop: "10px",
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#939185",
                          }}
                        >
                          No Reports Found
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </IonSegmentContent>
            </>
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
