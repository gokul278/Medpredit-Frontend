import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../helper";
import {
  Document,
  Font,
  Image,
  Page,
  pdf,
  PDFViewer,
  Text,
  View,
} from "@react-pdf/renderer";
import Logo from "../../assets/logo/logo.png";

import PopRegular from "../../assets/Fonts/Poppins-Regular.ttf";
import PopBold from "../../assets/Fonts/Poppins-Bold.ttf";
import PopBoldItalic from "../../assets/Fonts/Poppins-BoldItalic.ttf";
import PopSemiboldItalic from "../../assets/Fonts/Poppins-SemiBoldItalic.ttf";
import { ScoreVerify } from "../../ScoreVerify";

interface DoctorDetails {
  refHospitalName: any;
  refHospitalAddress: any;
  refHospitalPincode: any;
  refUserFname: any; // years
  refUserLname: any;
  refEducationSpec: any;
  refCRDesignation: any;
  refMCINo: any;
  refUserEmail: any;
}

interface patientDetails {
  refUserCustId: any;
  refUserFname: any;
  refUserLname: any;
  refDOB: any;
  refGender: any;
}

interface ReportPDFProps {
  reportDate: string | Date; // Adjust type depending on what you're passing
}

const ReportPDF: React.FC<ReportPDFProps> = ({ reportDate }) => {
  const tokenString: any = localStorage.getItem("userDetails");

  const tokenObject = JSON.parse(tokenString);
  const token = tokenObject.token;

  Font.register({
    family: "PopRegular",
    src: PopRegular,
  });

  Font.register({
    family: "PopBoldItalic",
    src: PopBoldItalic,
  });

  Font.register({
    family: "PopBold",
    src: PopBold,
  });

  Font.register({
    family: "PopSemiboldItalic",
    src: PopSemiboldItalic,
  });

  useEffect(() => {
    if (tokenString) {
      try {
        axios
          .post(
            `${import.meta.env.VITE_API_URL}/getReportPDF`,
            {
              patientId: localStorage.getItem("currentPatientId"),
              reportDate: reportDate,
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

            console.log("Hello");

            if (data.status) {
              setDoctorDetails(data.doctorDetails);

              setPatientDetails(data.patientDetails);

              setScore(data.scoreResult);

              setScoreVerify(data.scoreVerifyResult);
            }

            console.log(data);
            console.log(data.doctorDetails.refHospitalName);
          });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
  }, []);

  const [doctorDetails, setDoctorDetails] = useState<DoctorDetails | undefined>(
    undefined
  );
  const [patientDetails, setPatientDetails] = useState<
    patientDetails | undefined
  >(undefined);
  const [score, setScore]: any = useState([]);
  const [scoreVerify, setScoreVerify] = useState([]);

  const handleDownloadPDF = async () => {
    const doc = (
      <Document>
        <Page size="A4">
          <View style={{ margin: 20, padding: 10, paddingBottom: 10 }}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ width: "20%" }}>
                <Image
                  src={Logo}
                  style={{ width: 100, height: "auto", marginTop: "5px" }}
                />
              </View>
              <View style={{ width: "80%", }}>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "12px",
                    fontFamily: "PopBold",
                  }}
                >
                  {doctorDetails?.refHospitalName}
                </Text>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "10px",
                    fontFamily: "PopBold",
                  }}
                >
                  Department of Community Medicine
                </Text>
                <Text
                  style={{
                    color: "#000",
                    textAlign: "center",
                    fontSize: "10px",
                    fontFamily: "PopBold",
                  }}
                >
                  {doctorDetails?.refHospitalAddress},{" "}
                  {doctorDetails?.refHospitalPincode}
                </Text>
              </View>
            </View>

            <View style={{ textAlign: "right" }}>
              <Text
                style={{
                  marginTop: "5px",
                  fontSize: "10px",
                  fontFamily: "PopSemiboldItalic",
                }}
              >
                Report generated on : {score[0].refPTcreatedDate}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                border: "1.5px solid #607274",
                borderRadius: "5px",
                marginTop: "1px",
              }}
            >
              <View
                style={{
                  fontSize: "10px",
                  width: "50%",
                  display: "flex",
                  borderRight: "1.5px solid #607274",
                  textAlign: "left",
                }}
              >
                <Text
                  style={{
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    borderBottom: "1.5px solid #607274",
                    textAlign: "center",
                    backgroundColor: "#1c70b0",
                    borderTopLeftRadius: "3px",
                    color: "#fff",
                    fontSize: "11px",
                    fontFamily: "PopBold",
                  }}
                >
                  Doctor Details
                </Text>
                <View
                  style={{
                    padding: "5px",
                    backgroundColor: "#D3F1DF",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomLeftRadius: "3px",
                  }}
                >
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    Dr. {doctorDetails?.refUserFname}{" "}
                    {doctorDetails?.refUserLname}{" "}
                    {doctorDetails?.refEducationSpec} (Community Med)
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    {doctorDetails?.refCRDesignation}
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    REG NO: {doctorDetails?.refMCINo}
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    Mail ID: {doctorDetails?.refUserEmail}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  fontSize: "10px",
                  width: "50%",
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <Text
                  style={{
                    paddingTop: "3px",
                    paddingBottom: "3px",
                    borderBottom: "1.5px solid #607274",
                    textAlign: "center",
                    backgroundColor: "#1c70b0",
                    borderTopRightRadius: "3px",
                    color: "#fff",
                    fontSize: "11px",
                    fontFamily: "PopBold",
                  }}
                >
                  Patient Details
                </Text>
                <View
                  style={{
                    padding: "5px",
                    backgroundColor: "#D3F1DF",
                    height: "80px",
                    display: "flex",
                    justifyContent: "center",
                    borderBottomRightRadius: "3px",
                  }}
                >
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    ID: {patientDetails?.refUserCustId}
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    Name: {patientDetails?.refUserFname}{" "}
                    {patientDetails?.refUserLname}
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    Age: {patientDetails?.refDOB}
                  </Text>
                  <Text
                    style={{
                      padding: "3px",
                      fontFamily: "PopRegular",
                      fontSize: "10px",
                    }}
                  >
                    Gender: {patientDetails?.refGender}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                border: "1.5px solid #607274",
                marginTop: "10px",
                display: "flex",
                flexDirection: "row",
                borderRadius: "5px",
              }}
            >
              <View
                style={{
                  fontSize: "10px",
                  width: "35%",
                  display: "flex",
                  textAlign: "left",
                  borderRight: "1.5px solid #607274",
                }}
              >
                <View>
                  <Text
                    style={{
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderBottom: "1.5px solid #607274",
                      textAlign: "center",
                      backgroundColor: "#1c70b0",
                      borderTopLeftRadius: "3px",
                      color: "#fff",
                      fontSize: "11px",
                      fontFamily: "PopBold",
                    }}
                  >
                    Risk Factor
                  </Text>
                  <View
                    style={{
                      padding: "5px",
                      height: "130px",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#D3F1DF",
                      borderBottomLeftRadius: "3px",
                    }}
                  >
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Alcohol:{" "}
                      {score
                        .filter(
                          (element: any) => element.refQCategoryId === "11"
                        )
                        .map((element: any) => {
                          const result = scoreVerify.filter(
                            (soc: any) => soc.refQCategoryId === "11"
                          );
                          return (
                            <ScoreVerify
                              userScoreVerify={result}
                              refScore={element.refPTScore}
                              status={true}
                            />
                          );
                        })}
                    </Text>

                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      BMI:{" "}
                      {score
                        .filter(
                          (element: any) => element.refQCategoryId === "13"
                        )
                        .map((element: any) => {
                          const result = scoreVerify.filter(
                            (soc: any) => soc.refQCategoryId === "13"
                          );
                          return (
                            <ScoreVerify
                              userScoreVerify={result}
                              refScore={element.refPTScore}
                              status={true}
                            />
                          );
                        })}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Diet:
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Physical:{" "}
                      {score
                        .filter(
                          (element: any) => element.refQCategoryId === "8"
                        )
                        .map((element: any) => {
                          const result = scoreVerify.filter(
                            (soc: any) => soc.refQCategoryId === "8"
                          );
                          return (
                            <ScoreVerify
                              userScoreVerify={result}
                              refScore={element.refPTScore}
                              status={true}
                            />
                          );
                        })}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Sleep:
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Stress:{" "}
                      {score
                        .filter(
                          (element: any) => element.refQCategoryId === "9"
                        )
                        .map((element: any) => {
                          const result = scoreVerify.filter(
                            (soc: any) => soc.refQCategoryId === "9"
                          );
                          return (
                            <ScoreVerify
                              userScoreVerify={result}
                              refScore={element.refPTScore}
                              status={true}
                            />
                          );
                        })}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Tobacco:{" "}
                      {score
                        .filter(
                          (element: any) => element.refQCategoryId === "10"
                        )
                        .map((element: any) => {
                          const result = scoreVerify.filter(
                            (soc: any) => soc.refQCategoryId === "10"
                          );
                          return (
                            <ScoreVerify
                              userScoreVerify={result}
                              refScore={element.refPTScore}
                              status={true}
                            />
                          );
                        })}
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  fontSize: "10px",
                  width: "65%",
                  display: "flex",
                  textAlign: "left",
                }}
              >
                <View>
                  <Text
                    style={{
                      width: "100%",
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderBottom: "1.5px solid #607274",
                      textAlign: "center",
                      backgroundColor: "#1c70b0",
                      borderTopRightRadius: "3px",
                      color: "#fff",
                      fontSize: "11px",
                      fontFamily: "PopBold",
                    }}
                  >
                    Anthropometry--Vitals--Blood Sugar
                  </Text>
                  <View
                    style={{
                      height: "130px",
                      display: "flex",
                      justifyContent: "center",
                      backgroundColor: "#D3F1DF",
                      borderBottomRightRadius: "3px",
                    }}
                  >
                    <View style={{ height: "50px" }}>
                      <View
                        style={{
                          padding: "5px 5px",
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <View style={{ width: "50%" }}>
                          <Text
                            style={{
                              fontSize: "10px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            1. Height:{" "}
                            {score
                              .filter(
                                (element: any) =>
                                  element.refQCategoryId === "22"
                              )
                              .map((element: any) => {
                                return <Text>{element.refPTScore}</Text>;
                              })}{" "}
                            cms
                          </Text>
                        </View>
                        <View style={{ width: "50%" }}>
                          <Text
                            style={{
                              fontSize: "10px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            2. Weight:{" "}
                            {score
                              .filter(
                                (element: any) =>
                                  element.refQCategoryId === "23"
                              )
                              .map((element: any) => {
                                return <Text>{element.refPTScore}</Text>;
                              })}{" "}
                            kgs
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          padding: "0px 0px 5px 5px",
                          display: "flex",
                          flexDirection: "row",
                          borderBottom: "1px solid #607274",
                        }}
                      >
                        <View style={{ width: "49%" }}>
                          <Text
                            style={{
                              fontSize: "10px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            3. Waist/ Hip ratio:{" "}
                            {score
                              .filter(
                                (element: any) =>
                                  element.refQCategoryId === "24"
                              )
                              .map((element: any) => {
                                return <Text>{element.refPTScore}</Text>;
                              })}
                          </Text>
                        </View>
                        <View style={{ width: "51%" }}>
                          <Text
                            style={{
                              fontSize: "10px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            4. BMI:{" "}
                            {score
                              .filter(
                                (element: any) =>
                                  element.refQCategoryId === "13"
                              )
                              .map((element: any) => {
                                return <Text>{element.refPTScore}</Text>;
                              })}{" "}
                            kg/m2
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={{ height: "80px" }}></View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );

    // Generate PDF as Blob
    const pdfBlob = await pdf(doc).toBlob();

    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.download = `${patientDetails?.refUserCustId}_${score[0].refPTcreatedDate}.pdf`;
    link.click();

    // Clean up the link element
    URL.revokeObjectURL(link.href);
  };

  return (
    <div>
      {/* showToolbar={false} */}
      {/* <PDFViewer style={{ width: "100%", height: "92vh" }}>
        <Document>
          <Page size="A4">
            <View style={{ margin: 20, padding: 10, paddingBottom: 10 }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: "20%" }}>
                  <Image
                    src={Logo}
                    style={{ width: 100, height: "auto", marginTop: "5px" }}
                  />
                </View>
                <View style={{ width: "80%" }}>
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "12px",
                      fontFamily: "PopBold",
                    }}
                  >
                    {doctorDetails?.refHospitalName}
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "10px",
                      fontFamily: "PopBold",
                    }}
                  >
                    Department of Community Medicine
                  </Text>
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      fontSize: "10px",
                      fontFamily: "PopBold",
                    }}
                  >
                    {doctorDetails?.refHospitalAddress},{" "}
                    {doctorDetails?.refHospitalPincode}
                  </Text>
                </View>
              </View>

              <View style={{ textAlign: "right" }}>
                <Text
                  style={{
                    marginTop: "5px",
                    fontSize: "10px",
                    fontFamily: "PopSemiboldItalic",
                  }}
                >
                  Report generated on : {score[0].refPTcreatedDate}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  border: "1.5px solid #607274",
                  borderRadius: "5px",
                  marginTop: "1px",
                }}
              >
                <View
                  style={{
                    fontSize: "10px",
                    width: "50%",
                    display: "flex",
                    borderRight: "1.5px solid #607274",
                    textAlign: "left",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderBottom: "1.5px solid #607274",
                      textAlign: "center",
                      backgroundColor: "#1c70b0",
                      borderTopLeftRadius: "3px",
                      color: "#fff",
                      fontSize: "11px",
                      fontFamily: "PopBold",
                    }}
                  >
                    Doctor Details
                  </Text>
                  <View
                    style={{
                      padding: "5px",
                      backgroundColor: "#D3F1DF",
                      height: "80px",
                      display: "flex",
                      justifyContent: "center",
                      borderBottomLeftRadius: "3px",
                    }}
                  >
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Dr. {doctorDetails?.refUserFname}{" "}
                      {doctorDetails?.refUserLname}{" "}
                      {doctorDetails?.refEducationSpec} (Community Med)
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      {doctorDetails?.refCRDesignation}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      REG NO: {doctorDetails?.refMCINo}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Mail ID: {doctorDetails?.refUserEmail}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: "10px",
                    width: "50%",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  <Text
                    style={{
                      paddingTop: "3px",
                      paddingBottom: "3px",
                      borderBottom: "1.5px solid #607274",
                      textAlign: "center",
                      backgroundColor: "#1c70b0",
                      borderTopRightRadius: "3px",
                      color: "#fff",
                      fontSize: "11px",
                      fontFamily: "PopBold",
                    }}
                  >
                    Patient Details
                  </Text>
                  <View
                    style={{
                      padding: "5px",
                      backgroundColor: "#D3F1DF",
                      height: "80px",
                      display: "flex",
                      justifyContent: "center",
                      borderBottomRightRadius: "3px",
                    }}
                  >
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      ID: {patientDetails?.refUserCustId}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Name: {patientDetails?.refUserFname}{" "}
                      {patientDetails?.refUserLname}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Age: {patientDetails?.refDOB}
                    </Text>
                    <Text
                      style={{
                        padding: "3px",
                        fontFamily: "PopRegular",
                        fontSize: "10px",
                      }}
                    >
                      Gender: {patientDetails?.refGender}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  border: "1.5px solid #607274",
                  marginTop: "10px",
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: "5px",
                }}
              >
                <View
                  style={{
                    fontSize: "10px",
                    width: "35%",
                    display: "flex",
                    textAlign: "left",
                    borderRight: "1.5px solid #607274",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        borderBottom: "1.5px solid #607274",
                        textAlign: "center",
                        backgroundColor: "#1c70b0",
                        borderTopLeftRadius: "3px",
                        color: "#fff",
                        fontSize: "11px",
                        fontFamily: "PopBold",
                      }}
                    >
                      Risk Factor
                    </Text>
                    <View
                      style={{
                        padding: "5px",
                        height: "130px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#D3F1DF",
                        borderBottomLeftRadius: "3px",
                      }}
                    >
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Alcohol:{" "}
                        {score
                          .filter(
                            (element: any) => element.refQCategoryId === "11"
                          )
                          .map((element: any) => {
                            const result = scoreVerify.filter(
                              (soc: any) => soc.refQCategoryId === "11"
                            );
                            return (
                              <ScoreVerify
                                userScoreVerify={result}
                                refScore={element.refPTScore}
                                status={true}
                              />
                            );
                          })}
                      </Text>

                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        BMI:{" "}
                        {score
                          .filter(
                            (element: any) => element.refQCategoryId === "13"
                          )
                          .map((element: any) => {
                            const result = scoreVerify.filter(
                              (soc: any) => soc.refQCategoryId === "13"
                            );
                            return (
                              <ScoreVerify
                                userScoreVerify={result}
                                refScore={element.refPTScore}
                                status={true}
                              />
                            );
                          })}
                      </Text>
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Diet:
                      </Text>
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Physical:{" "}
                        {score
                          .filter(
                            (element: any) => element.refQCategoryId === "8"
                          )
                          .map((element: any) => {
                            const result = scoreVerify.filter(
                              (soc: any) => soc.refQCategoryId === "8"
                            );
                            return (
                              <ScoreVerify
                                userScoreVerify={result}
                                refScore={element.refPTScore}
                                status={true}
                              />
                            );
                          })}
                      </Text>
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Sleep:
                      </Text>
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Stress:{" "}
                        {score
                          .filter(
                            (element: any) => element.refQCategoryId === "9"
                          )
                          .map((element: any) => {
                            const result = scoreVerify.filter(
                              (soc: any) => soc.refQCategoryId === "9"
                            );
                            return (
                              <ScoreVerify
                                userScoreVerify={result}
                                refScore={element.refPTScore}
                                status={true}
                              />
                            );
                          })}
                      </Text>
                      <Text
                        style={{
                          padding: "3px",
                          fontFamily: "PopRegular",
                          fontSize: "10px",
                        }}
                      >
                        Tobacco:{" "}
                        {score
                          .filter(
                            (element: any) => element.refQCategoryId === "10"
                          )
                          .map((element: any) => {
                            const result = scoreVerify.filter(
                              (soc: any) => soc.refQCategoryId === "10"
                            );
                            return (
                              <ScoreVerify
                                userScoreVerify={result}
                                refScore={element.refPTScore}
                                status={true}
                              />
                            );
                          })}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    fontSize: "10px",
                    width: "65%",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        width: "100%",
                        paddingTop: "3px",
                        paddingBottom: "3px",
                        borderBottom: "1.5px solid #607274",
                        textAlign: "center",
                        backgroundColor: "#1c70b0",
                        borderTopRightRadius: "3px",
                        color: "#fff",
                        fontSize: "11px",
                        fontFamily: "PopBold",
                      }}
                    >
                      Anthropometry--Vitals--Blood Sugar
                    </Text>
                    <View
                      style={{
                        height: "130px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#D3F1DF",
                        borderBottomRightRadius: "3px",
                      }}
                    >
                      <View style={{ height: "50px" }}>
                        <View
                          style={{
                            padding: "5px 5px",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <View style={{ width: "50%" }}>
                            <Text
                              style={{
                                fontSize: "10px",
                                fontFamily: "PopRegular",
                              }}
                            >
                              1. Height:{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "22"
                                )
                                .map((element: any) => {
                                  return <Text>{element.refPTScore}</Text>;
                                })}{" "}
                              cms
                            </Text>
                          </View>
                          <View style={{ width: "50%" }}>
                            <Text
                              style={{
                                fontSize: "10px",
                                fontFamily: "PopRegular",
                              }}
                            >
                              2. Weight:{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "23"
                                )
                                .map((element: any) => {
                                  return <Text>{element.refPTScore}</Text>;
                                })}{" "}
                              kgs
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{
                            padding: "0px 0px 5px 5px",
                            display: "flex",
                            flexDirection: "row",
                            borderBottom: "1px solid #607274",
                          }}
                        >
                          <View style={{ width: "49%" }}>
                            <Text
                              style={{
                                fontSize: "10px",
                                fontFamily: "PopRegular",
                              }}
                            >
                              3. Waist/ Hip ratio:{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "24"
                                )
                                .map((element: any) => {
                                  return <Text>{element.refPTScore}</Text>;
                                })}
                            </Text>
                          </View>
                          <View style={{ width: "51%" }}>
                            <Text
                              style={{
                                fontSize: "10px",
                                fontFamily: "PopRegular",
                              }}
                            >
                              4. BMI:{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "13"
                                )
                                .map((element: any) => {
                                  return <Text>{element.refPTScore}</Text>;
                                })}{" "}
                              kg/m2
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{ height: "80px" }}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer> */}
      <button
        onClick={() => {
          handleDownloadPDF();
        }}
        style={{
          width: "100%",
          height: "3rem",
          // margin: "5px 0px",
          borderRadius: "5px",
          background: "linear-gradient(160deg, #077556, #2f9f97)",
          color: "#fff",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Download Report
      </button>
    </div>
  );
};

export default ReportPDF;
