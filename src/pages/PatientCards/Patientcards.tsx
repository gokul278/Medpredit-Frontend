import {
  IonAlert,
  IonButton,
  IonContent,
  IonModal,
  IonPage,
  IonRadio,
  IonRadioGroup,
} from "@ionic/react";
import { Divider } from "primereact/divider";
import React, { useEffect, useRef, useState } from "react";
import decrypt from "../../helper";

import { useHistory } from "react-router";
import "./Patientcards.css";
import Axios from "axios";

import userImage from "../../assets/images/profile.png";

interface Patient {
  refUserCustId: string;
  refUserFname: string;
  refUserLname: string;
  lastVisit: string;
  DoctorName: string;
  refUserMobileno: string;
  refDistrict: string;
  imageUrl: string;
  refUserId: number;
  refGender: string;
}

interface Doctor {
  DoctorFirstName: string;
  DoctorLastName: string;
  refAMId: number;
  refDoctorId: string;
  refAssId: string;
}

interface PatientcardsProps {
  patientsData: Patient[];
  onPaginationChange: () => void;
}

const Patientcards: React.FC<PatientcardsProps> = ({
  patientsData,
  onPaginationChange,
}) => {
  const history = useHistory();

  const [openModalPatientId, setOpenModalPatientId] = useState<number | null>(
    null
  );

  const handleModalOpen = (patientId: number) => {
    setOpenModalPatientId(patientId); // Set the patient ID of the modal to open
  };

  const handleModalClose = () => {
    setOpenModalPatientId(null); // Close the modal by resetting the state
  };

  const handleCardClick = (
    patient: any,
    patientId: any,
    patientGender: any
  ) => {
    localStorage.setItem("currentPatientId", patientId.toString());
    localStorage.setItem("currentPatientGender", patientGender.toLowerCase());

    history.push(`/knowAbout/${patient}/${patientId}`);
  };

  const userDetails: any = localStorage.getItem("userDetails");
  const parsedDetails = JSON.parse(userDetails);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [patientData, setPatientData] = useState({
    patientId: "",
    refUserCusId: "",
    patientGender: "",
  });

  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    getDoctorId();
  }, []);

  const getDoctorId = () => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.post(
        `${import.meta.env.VITE_API_URL}/getAssistantDoctor`,
        {
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

          if (data.status) {
            setDoctors(data.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
        });
    }
  };

  const handleAssistantPatientCard = (
    patientId: any,
    refUserCustId: any,
    doctorId: any,
    refGender: any
  ) => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.post(
        `${import.meta.env.VITE_API_URL}/checkPatientMap`,
        {
          employeeId: doctorId,
          patientId: patientId,
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

          if (data.status) {
            handleCardClick(refUserCustId, patientId, refGender);
          } else {
            setIsAlertOpen(true);
            setPatientData({
              patientId: patientId,
              refUserCusId: refUserCustId,
              patientGender: refGender,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
        });
    }
  };

  const handleAssistantPatientMap = (patientId: any, doctorId: any) => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.post(
        `${import.meta.env.VITE_API_URL}/addPatientMap`,
        {
          employeeId: doctorId,
          patientId: patientId,
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

          if (data.status) {
            handleCardClick(
              patientData.refUserCusId,
              patientData.patientId,
              patientData.patientGender
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
        });
    }
  };

  const handledoctorPatientCard = (
    patientId: any,
    refUserCustId: any,
    refGender: any
  ) => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.post(
        `${import.meta.env.VITE_API_URL}/checkPatientMap`,
        {
          patientId: patientId,
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

          console.log(data);

          if (data.status) {
            handleCardClick(refUserCustId, patientId, refGender);
          } else {
            setIsAlertOpen(true);
            setPatientData({
              patientId: patientId,
              refUserCusId: refUserCustId,
              patientGender: refGender,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
        });
    }
  };

  const handlePatientMap = (patientId: any, patientGender: any) => {
    const tokenString = localStorage.getItem("userDetails");

    if (tokenString) {
      const tokenObject = JSON.parse(tokenString);
      const token = tokenObject.token;

      Axios.post(
        `${import.meta.env.VITE_API_URL}/addPatientMap`,
        {
          patientId: patientId,
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

          console.log(patientGender);

          if (data.status) {
            handleCardClick(
              patientData.refUserCusId,
              patientData.patientId,
              patientData.patientGender
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching patient data:", error);
        });
    }
  };

  const [selectedDoctor, setSelectedDoctor] = useState("");

  return (
    <div className="patientCardsParent">
      {patientsData.map((patient, index) => {
        const patientFname = patient.refUserFname || "-";
        const patientLname = patient.refUserLname || "-";
        const lastVisit = patient.lastVisit || "-";
        const doctorName = patient.DoctorName || "-";
        const mobileno = patient.refUserMobileno || "-";
        const address = patient.refDistrict || "-";
        const imageUrl = patient.imageUrl || userImage;
        return (
          <>
            {parsedDetails.roleType === 1 ? (
              <div key={index}>
                <IonAlert
                  isOpen={isAlertOpen}
                  cssClass="custom-alert"
                  header="Do You Want to Map the Patient to Your List?"
                  backdropDismiss={false}
                  buttons={[
                    {
                      text: "Yes",
                      role: "confirm",
                      handler: () => {
                        setIsAlertOpen(false);
                        handlePatientMap(
                          patientData.patientId,
                          patientData.patientGender
                        );
                      },
                      cssClass: "yes-button",
                    },
                    {
                      text: "No",
                      role: "cancel",
                      handler: () => {
                        setIsAlertOpen(false);
                        handleCardClick(
                          patientData.refUserCusId,
                          patientData.patientId,
                          patientData.patientGender
                        );
                      },
                      cssClass: "no-button",
                    },
                  ]}
                  onDidDismiss={() => setIsAlertOpen(false)}
                />

                <div
                  className="patientCard"
                  onClick={
                    () =>
                      handledoctorPatientCard(
                        patient.refUserId,
                        patient.refUserCustId,
                        patient.refGender
                      )
                    // handleCardClick(patient.refUserCustId, patient.refUserId)
                  }
                >
                  <img src={imageUrl} alt={`Patient ${patientFname}`} />
                  <div className="cardContents">
                    <div className="patiendDetails">
                      <p className="patientName" style={{ fontSize: "17px" }}>
                        {patientFname} {patientLname}
                      </p>
                    </div>
                    <div className="patiendDetails">
                      <p className="patientName">
                        {patient.refUserCustId || "-"}
                      </p>
                    </div>
                    <div className="footer">
                      <p className="refUserMobileno">
                        <span>Mobile : </span> {mobileno}
                      </p>
                      <p className="refDistrict">{address}</p>
                    </div>
                  </div>
                </div>
                {index < patientsData.length - 1 && <Divider />}
              </div>
            ) : parsedDetails.roleType === 2 ? (
              <div key={index}>
                <IonModal
                  mode="ios"
                  isOpen={openModalPatientId === patient.refUserId} // Only open modal for the clicked patient
                  onDidDismiss={handleModalClose}
                  initialBreakpoint={0.75}
                >
                  <IonContent className="ion-padding">
                    <div style={{ height: "71vh" }}>
                      <div
                        style={{
                          height: "8vh",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        Choose Your Doctor
                      </div>
                      {doctors.map((doctor, index) => (
                        <div
                          key={index}
                          style={{
                            height: "55vh",
                            overflow: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                          onClick={async () => {
                            setSelectedDoctor(doctor.refDoctorId);
                            handleAssistantPatientCard(
                              patient.refUserId,
                              patient.refUserCustId,
                              doctor.refDoctorId,
                              patient.refGender
                            );
                            setOpenModalPatientId(null);
                            localStorage.setItem(
                              "currentDoctorId",
                              doctor.refDoctorId
                            );
                          }}
                        >
                          <div
                            style={{
                              height: "50px",
                              background: "#e6e6e6",
                              borderRadius: "5px",
                              display: "flex",
                              alignItems: "center",
                              padding: "20px",
                            }}
                          >
                            Dr. {doctor.DoctorFirstName} {doctor.DoctorLastName}
                          </div>
                        </div>
                      ))}
                      <div
                        style={{
                          height: "8vh",
                          overflow: "auto",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "5vh",
                            background: "#89A8B2",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "18px",
                            fontWeight: "700",
                            borderRadius: "5px",
                          }}
                          onClick={() => {
                            handleModalClose();
                          }}
                        >
                          Close
                        </div>
                      </div>
                    </div>
                  </IonContent>
                </IonModal>

                <IonAlert
                  isOpen={isAlertOpen}
                  cssClass="custom-alert"
                  header="Do You Want to Map the Patient to Your Doctor?"
                  backdropDismiss={false}
                  buttons={[
                    {
                      text: "Yes",
                      role: "confirm",
                      handler: () => {
                        setIsAlertOpen(false);
                        handleAssistantPatientMap(
                          patientData.patientId,
                          selectedDoctor
                        );
                      },
                      cssClass: "yes-button",
                    },
                    {
                      text: "No",
                      role: "cancel",
                      handler: () => {
                        setIsAlertOpen(false);
                        handleCardClick(
                          patientData.refUserCusId,
                          patientData.patientId,
                          patientData.patientGender
                        );
                      },
                      cssClass: "no-button",
                    },
                  ]}
                  onDidDismiss={() => setIsAlertOpen(false)}
                />

                <div
                  id="open-modal"
                  className="patientCard"
                  onClick={() => handleModalOpen(patient.refUserId)}
                >
                  <img src={imageUrl} alt={`Patient ${patientFname}`} />
                  <div className="cardContents">
                    <div className="patiendDetails">
                      <p className="patientName" style={{ fontSize: "17px" }}>
                        {patientFname} {patientLname}
                      </p>
                    </div>
                    <div className="patiendDetails">
                      <p className="patientName">
                        {patient.refUserCustId || "-"}
                      </p>
                    </div>
                    <div className="footer">
                      <p className="refUserMobileno">
                        <span>Mobile : </span> {mobileno}
                      </p>
                      <p className="refDistrict">{address}</p>
                    </div>
                  </div>
                </div>
                {index < patientsData.length - 1 && <Divider />}
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
};

export default Patientcards;
