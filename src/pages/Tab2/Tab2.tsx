import {
  IonButtons,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonIcon,
  IonModal,
  IonPage,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import {
  addCircleOutline,
  arrowForward,
  chevronDownOutline,
} from "ionicons/icons";
import { useEffect, useRef, useState } from "react";
import { Divider } from "primereact/divider";
import Patientcards from "../PatientCards/Patientcards";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import decrypt from "../../helper";
import searchUser from "../../assets/images/SeacrhUser.png";

const Tab2: React.FC = () => {
  const history = useHistory();

  const sortModal = useRef<HTMLIonModalElement>(null);
  const filterModal = useRef<HTMLIonModalElement>(null);

  const contentRef = useRef<HTMLIonContentElement>(null);

  const [patientsData, setPatientData] = useState([]);

  const handlePaginationChange = () => {
    if (contentRef.current) {
      contentRef.current.scrollToTop(300);
    }
  };

  const handleAddUser = () => {
    history.push("/addUser", {
      direction: "forward",
      animation: "slide",
    });
  };

  const [mobileNumber, setMobileNumber] = useState("");

  const [loadingStatus, setLoadingStatus] = useState(false);

  const [status, setStatus] = useState({
    status: false,
    message: "",
  });

  const location = useLocation();

  const [urlMobileNo, setURLMobileNo] = useState("");
  const [urluserId, setUrluserId] = useState("");

  const userDetails: any = localStorage.getItem("userDetails");
  const parsedDetails = JSON.parse(userDetails);

  const searchPatient = () => {
    const tokenString = localStorage.getItem("userDetails");
    if (tokenString) {
      try {
        setLoadingStatus(true);
        const tokenObject = JSON.parse(tokenString);
        const token = tokenObject.token;

        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getPatientData`,
            {
              mobileNumber: mobileNumber,
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

            console.log(data);

            setLoadingStatus(false);

            if (data.status) {
              setPatientData(data.data);

              if (data.data.length === 0) {
                setStatus({
                  status: true,
                  message: "No Result Found",
                });
              } else {
                setURLMobileNo(data.data[0].refUserMobileno);
                setUrluserId(data.data[0].refUserId);
              }
            } else {
              console.error("Data consoled false - chekc this");
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
    <IonPage>
      <IonToolbar className="ion-padding-top">
        <IonSearchbar
          placeholder="Search Patient"
          value={mobileNumber}
          type="number"
          onIonInput={(e: any) => {
            setStatus({
              status: false,
              message: "",
            });
            setMobileNumber(e.target.value);
            setPatientData([]);
          }}
        ></IonSearchbar>{" "}
        <IonButtons slot="end">
          <IonIcon
            className={`addIcon ${mobileNumber.length === 0 ? "disabled" : ""}`}
            icon={arrowForward}
            onClick={() => {
              if (mobileNumber.length != 0) {
                setStatus({
                  status: false,
                  message: "",
                });
                searchPatient();
              }
            }}
          ></IonIcon>
        </IonButtons>
      </IonToolbar>
      <IonContent fullscreen ref={contentRef}>
        <div
          style={{
            width: "100%",
            height: "82vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {loadingStatus ? (
            <>Loading</>
          ) : (
            <>
              {patientsData.length === 0 ? (
                <div
                  style={{
                    width: "100%",
                    height: "82vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {status.status ? (
                    <div
                      className="patientContents"
                      style={{ width: "70%" }}
                      onClick={() => {
                        history.push("/addUser");
                      }}
                    >
                      <div
                        style={{
                          marginTop: "10px",
                          background: "#1c70b0",
                          borderRadius: "5px",
                          padding: "10px",
                          color: "#fff",
                          fontWeight: "700",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        <i
                          className="pi pi-user"
                          style={{ color: "#fff", fontSize: "20px" }}
                        ></i>
                        &nbsp;&nbsp;Add Patient
                      </div>
                    </div>
                  ) : null}
                  <img
                    src={searchUser}
                    style={{ width: "90%" }}
                    alt="seacrhImg"
                  />
                  {status.status ? (
                    <div
                      style={{
                        fontWeight: "500",
                        fontSize: "20px",
                        color: "#939185",
                      }}
                    >
                      {status.message}
                    </div>
                  ) : null}
                </div>
              ) : (
                <>
                  {mobileNumber.length != 0 ? (
                    <div
                      style={{
                        width: "100%",
                        height: "82vh",
                        overflow: "auto",
                        gap: "5px",
                      }}
                    >
                      <div className="patientContents">
                        <Patientcards
                          patientsData={patientsData}
                          onPaginationChange={handlePaginationChange}
                        />
                      </div>
                      {patientsData.length > 0 ? (
                        <>
                          {/* {parsedDetails.roleType === 1 ? ( */}
                          <div className="patientContents">
                            <div
                              style={{
                                marginTop: "20px",
                                background: "#1c70b0",
                                borderRadius: "5px",
                                padding: "10px",
                                color: "#fff",
                                fontWeight: "700",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              onClick={() => {
                                history.push(
                                  "/addfamilyuser/" +
                                    urlMobileNo +
                                    "/" +
                                    urluserId
                                );
                              }}
                            >
                              <i
                                className="pi pi-users"
                                style={{ color: "#fff", fontSize: "25px" }}
                              ></i>
                              &nbsp;&nbsp;Add Family Member
                            </div>
                          </div>
                          {/* ) : null} */}
                        </>
                      ) : null}
                    </div>
                  ) : (
                    <>
                      <div
                        style={{
                          width: "100%",
                          height: "82vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        {status.status ? (
                          <div
                            className="patientContents"
                            style={{ width: "70%" }}
                            onClick={() => {
                              history.push("/addUser");
                            }}
                          >
                            <div
                              style={{
                                marginTop: "10px",
                                background: "#1c70b0",
                                borderRadius: "5px",
                                padding: "10px",
                                color: "#fff",
                                fontWeight: "700",
                                textAlign: "center",
                                width: "100%",
                              }}
                            >
                              <i
                                className="pi pi-user"
                                style={{ color: "#fff", fontSize: "20px" }}
                              ></i>
                              &nbsp;&nbsp;Add Patient
                            </div>
                          </div>
                        ) : null}
                        <img
                          src={searchUser}
                          style={{ width: "90%" }}
                          alt="seacrhImg"
                        />
                        {status.status ? (
                          <div
                            style={{
                              fontWeight: "500",
                              fontSize: "20px",
                              color: "#939185",
                            }}
                          >
                            {status.message}
                          </div>
                        ) : null}
                      </div>
                    </>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
