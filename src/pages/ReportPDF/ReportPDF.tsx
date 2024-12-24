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
import backgroundImage from "../../assets/PDFTemplate/background.png";
import governmentLogo from "../../assets/logo/governmentHospitalLogo.png";

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

  function calculateAge(dateString: any) {
    const birthDate = new Date(dateString);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

    // Adjust age if the birthdate hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
    }

    return age;
  }

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

            if (data.status) {
              console.log(data);

              setDoctorDetails(data.doctorDetails);
              setPatientDetails(data.patientDetails);
              setScore(data.scoreResult);
              setScoreVerify(data.scoreVerifyResult);
              setGenerateDate(data.generateDate);
              setAllCategory(data.categoryResult);
            }
          });
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    }
  }, [reportDate]);

  const [doctorDetails, setDoctorDetails] = useState<DoctorDetails | undefined>(
    undefined
  );
  const [patientDetails, setPatientDetails] = useState<
    patientDetails | undefined
  >(undefined);
  const [score, setScore]: any = useState([]);
  const [scoreVerify, setScoreVerify] = useState([]);

  const [generateDate, setGenerateDate] = useState("");

  const [allCategory, setAllCategory] = useState([]);

  const handleDownloadPDF = async () => {
    const doc = (
      <Document>
        <Page size="A4">
          <View style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={backgroundImage}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
            <View style={{ padding: 20 }}>
              <View
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                {/* Date */}
                <View>
                  <Text
                    style={{
                      fontSize: "12px",
                      color: "#636466",
                      fontFamily: "PopBold",
                      marginBottom: "20px",
                    }}
                  >
                    {generateDate}
                  </Text>
                </View>

                {/* Hospital Details */}
                <View
                  style={{
                    width: "55%",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: "20%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Image src={governmentLogo} style={{ width: "80%" }} />
                  </View>
                  <View style={{ width: "80%" }}>
                    <Text
                      style={{
                        fontFamily: "PopBold",
                        fontSize: "11.5px",
                        color: "#1b71b1",
                      }}
                    >
                      Government Mohan Kumaramangalam
                    </Text>
                    <Text
                      style={{
                        fontFamily: "PopBold",
                        fontSize: "11.5px",
                        color: "#1b71b1",
                      }}
                    >
                      Medical College Hospital
                    </Text>
                    <Text
                      style={{
                        fontFamily: "PopBold",
                        fontSize: "11.5px",
                        color: "#1b71b1",
                      }}
                    >
                      Department of Community Medicine
                    </Text>
                    <Text
                      style={{
                        fontFamily: "PopBold",
                        fontSize: "11.5px",
                        color: "#1b71b1",
                      }}
                    >
                      GMKMCH Salem
                    </Text>
                  </View>
                </View>

                {/* Patient And Doctor Details */}

                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "0px 20px",
                    paddingTop: "20px",
                    marginTop: "10px",
                  }}
                >
                  {/* Patient Details */}
                  <View
                    style={{
                      width: "50%",
                      height: "100px",
                      backgroundColor: "#1b71b1",
                      borderRadius: "10px",
                      padding: "0px 20px",
                      display: "flex",
                      rowGap: "4px",
                      justifyContent: "center",
                    }}
                  >
                    {/* Patient ID */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontFamily: "PopBold" }}>Patient ID </Text>
                      <Text style={{ fontFamily: "PopRegular" }}>
                        : {patientDetails?.refUserCustId}
                      </Text>
                    </View>

                    {/* Patient Name */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontFamily: "PopBold" }}>Name </Text>
                      <Text style={{ fontFamily: "PopRegular" }}>
                        : {patientDetails?.refUserFname}{" "}
                        {patientDetails?.refUserLname}
                      </Text>
                    </View>

                    {/* Age */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontFamily: "PopBold" }}>Age </Text>
                      <Text style={{ fontFamily: "PopRegular" }}>
                        : {calculateAge(patientDetails?.refDOB)}
                      </Text>
                    </View>

                    {/* Gender */}
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "12px",
                        color: "#fff",
                      }}
                    >
                      <Text style={{ fontFamily: "PopBold" }}>Gender </Text>
                      <Text style={{ fontFamily: "PopRegular" }}>
                        : {patientDetails?.refGender}
                      </Text>
                    </View>
                  </View>

                  {/* Doctor Details */}
                  <View
                    style={{
                      width: "45%",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    {/* Doctor Name */}

                    <View>
                      <Text
                        style={{
                          fontSize: "9.5px",
                          fontFamily: "PopRegular",
                        }}
                      >
                        Dr. {doctorDetails?.refUserFname}{" "}
                        {doctorDetails?.refUserLname}{" "}
                        {doctorDetails?.refEducationSpec} (Community Med)
                      </Text>
                    </View>

                    {/* Doctor Designation */}
                    <View>
                      <Text
                        style={{
                          fontSize: "9.5px",
                          fontFamily: "PopRegular",
                        }}
                      >
                        {doctorDetails?.refCRDesignation}
                      </Text>
                    </View>

                    {/* Reg No */}
                    <View>
                      <Text
                        style={{
                          fontSize: "9.5px",
                          fontFamily: "PopRegular",
                        }}
                      >
                        Reg No: {doctorDetails?.refMCINo}
                      </Text>
                    </View>

                    {/* Mail Id */}
                    <View>
                      <Text
                        style={{
                          fontSize: "9.5px",
                          fontFamily: "PopRegular",
                        }}
                      >
                        Mail id : {doctorDetails?.refUserEmail}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Line */}
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-10px",
                  }}
                >
                  <View
                    style={{
                      width: "92%",
                      borderBottom: "1px solid #1a70b0",
                    }}
                  >
                    <Text> </Text>
                  </View>
                </View>

                {/* Report Details */}

                {/* OverAll Report */}
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "0px 20px",
                    marginTop: "10px",
                  }}
                >
                  {/* Left Part */}
                  <View style={{ width: "35%" }}>
                    {/* Headline - Risk Status */}
                    <Text
                      style={{
                        fontSize: "13px",
                        fontFamily: "PopBold",
                        backgroundColor: "#39b44a",
                        color: "#fff",
                        padding: "5px",
                        margin: "0px 10px",
                        borderRadius: "50%",
                        textAlign: "center",
                      }}
                    >
                      Risk Status
                    </Text>

                    {/* Risk Score */}

                    <View
                      style={{
                        marginTop: "10px",
                        height: "190px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      {/* Alcohol Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Alcohol
                        </Text>
                        :{" "}
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
                      </View>

                      {/* BMI Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          BMI
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
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
                      </View>

                      {/* Diet Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Diet
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
                          {score
                            .filter(
                              (element: any) => element.refQCategoryId === "12"
                            )
                            .map((element: any) => {
                              const result = scoreVerify.filter(
                                (soc: any) => soc.refQCategoryId === "12"
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

                      {/* Physical Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Physical
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
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
                      </View>

                      {/* Sleep Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Sleep
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
                          {score
                            .filter(
                              (element: any) => element.refQCategoryId === "43"
                            )
                            .map((element: any) => {
                              const result = scoreVerify.filter(
                                (soc: any) => soc.refQCategoryId === "43"
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

                      {/* Stress Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Stress
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
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
                      </View>

                      {/* Tobacco Status */}
                      <View
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          flexDirection: "row",
                          padding: "0px 10px",
                        }}
                      >
                        <Text
                          style={{
                            width: "30%",
                            color: "#1b71b1",
                            fontFamily: "PopBold",
                          }}
                        >
                          Tobacco
                        </Text>
                        <Text style={{ width: "70%", color: "#000" }}>
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

                  {/* Right Part */}
                  <View
                    style={{
                      width: "65%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {/* Anthropometry & Vitals */}
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      {/* Inside Left */}
                      <View style={{ width: "50%" }}>
                        {/* Headline - Anthropometry */}
                        <Text
                          style={{
                            fontSize: "13px",
                            fontFamily: "PopBold",
                            backgroundColor: "#39b44a",
                            color: "#fff",
                            padding: "5px",
                            margin: "0px 10px",
                            borderRadius: "50%",
                            textAlign: "center",
                          }}
                        >
                          Anthropometry
                        </Text>

                        {/* Anthropometry Score */}

                        <View
                          style={{
                            marginTop: "9px",
                            display: "flex",
                            gap: "7px",
                          }}
                        >
                          {/* Height */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "30%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              Height
                            </Text>
                            <Text style={{ width: "70%", color: "#000" }}>
                              :{" "}
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

                          {/* Weight */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "30%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              Weight
                            </Text>
                            <Text style={{ width: "70%", color: "#000" }}>
                              :{" "}
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

                          {/*  Waist/ Hip ratio*/}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "30%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              Waist/ Hip ratio
                            </Text>
                            <Text
                              style={{
                                width: "70%",
                                color: "#000",
                                paddingTop: "8px",
                              }}
                            >
                              :{" "}
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

                          {/* BMI Status */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "30%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              BMI
                            </Text>
                            <Text style={{ width: "70%", color: "#000" }}>
                              :{" "}
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

                      {/* Insight Right */}
                      <View style={{ width: "50%" }}>
                        {/* Headline - Vitals */}
                        <Text
                          style={{
                            fontSize: "13px",
                            fontFamily: "PopBold",
                            backgroundColor: "#39b44a",
                            color: "#fff",
                            padding: "5px",
                            margin: "0px 10px",
                            borderRadius: "50%",
                            textAlign: "center",
                          }}
                        >
                          Vitals
                        </Text>

                        {/* Vitals Score */}

                        <View
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            gap: "7px",
                          }}
                        >
                          {/* Temperature */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "45%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              Temperature
                            </Text>
                            <Text style={{ width: "55%", color: "#000" }}>
                              :{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "89"
                                )
                                .map((element: any, index: any) => {
                                  return (
                                    <>
                                      {index === 0 ? (
                                        <>{element.refPTScore}</>
                                      ) : null}
                                    </>
                                  );
                                })}{" "}
                              F
                            </Text>
                          </View>

                          {/* RR */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "45%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              RR
                            </Text>
                            <Text style={{ width: "55%", color: "#000" }}>
                              :{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "92"
                                )
                                .map((element: any, index: any) => {
                                  return (
                                    <>
                                      {index === 0 ? (
                                        <>{element.refPTScore}</>
                                      ) : null}
                                    </>
                                  );
                                })}
                              /min
                            </Text>
                          </View>

                          {/*  Pulse*/}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "45%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              Pulse
                            </Text>
                            <Text
                              style={{
                                width: "55%",
                                color: "#000",
                              }}
                            >
                              :{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "84"
                                )
                                .map((element: any, index: any) => {
                                  return (
                                    <>
                                      {index === 0 ? (
                                        <>{element.refPTScore}</>
                                      ) : null}
                                    </>
                                  );
                                })}
                              /min
                            </Text>
                          </View>

                          {/* BP */}
                          <View
                            style={{
                              fontSize: "9px",
                              display: "flex",
                              flexDirection: "row",
                              padding: "0px 10px",
                            }}
                          >
                            <Text
                              style={{
                                width: "45%",
                                color: "#1b71b1",
                                fontFamily: "PopBold",
                              }}
                            >
                              BP
                            </Text>
                            <Text style={{ width: "55%", color: "#000" }}>
                              :{" "}
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "90"
                                )
                                .map((element: any, index: any) => {
                                  return (
                                    <>
                                      {index === 0 ? (
                                        <>{element.refPTScore}</>
                                      ) : null}
                                    </>
                                  );
                                })}
                              /
                              {score
                                .filter(
                                  (element: any) =>
                                    element.refQCategoryId === "91"
                                )
                                .map((element: any, index: any) => {
                                  return (
                                    <>
                                      {index === 0 ? (
                                        <>{element.refPTScore}</>
                                      ) : null}
                                    </>
                                  );
                                })}{" "}
                              mm of Hg
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>

                    {/* Line */}
                    <View
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "-13px",
                      }}
                    >
                      <View
                        style={{
                          width: "95%",
                          borderBottom: "1px solid #1a70b0",
                        }}
                      >
                        <Text> </Text>
                      </View>
                    </View>

                    {/* Blood Sugar */}
                    <View
                      style={{
                        width: "100%",
                        marginTop: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {/* Headline - Risk Status */}
                      <View
                        style={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            width: "50%",
                            fontSize: "13px",
                            fontFamily: "PopBold",
                            backgroundColor: "#39b44a",
                            color: "#fff",
                            padding: "5px",
                            margin: "0px 10px",
                            borderRadius: "50%",
                            textAlign: "center",
                          }}
                        >
                          Blood Sugar
                        </Text>
                      </View>

                      {/* Blood Sugar Score */}
                      <View
                        style={{
                          width: "95%",
                          border: "1px solid #000",
                          borderRadius: "5px",
                          marginTop: "10px",
                        }}
                      >
                        {/* Row 1 */}
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              textAlign: "center",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#fff",
                              backgroundColor: "#1b71b1",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            Parameter
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#1b71b1",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            FBS mg/dl
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#1b71b1",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            PPBS mg/dl
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#1b71b1",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            RBS mg/dl
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderBottom: "1px solid #000",
                              color: "#1b71b1",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            HBA1c %
                          </Text>
                        </View>

                        {/* Row 2 */}
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              textAlign: "center",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#fff",
                              backgroundColor: "#1b71b1",
                              fontFamily: "PopRegular",
                            }}
                          >
                            Value
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            90
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            130
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            98
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderBottom: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            5
                          </Text>
                        </View>

                        {/* Row 3 */}
                        <View
                          style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              textAlign: "center",
                              borderRight: "1px solid #000",
                              color: "#fff",
                              backgroundColor: "#1b71b1",
                              borderBottomLeftRadius: "4px",
                              fontFamily: "PopRegular",
                            }}
                          >
                            Date
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            20-06-2023
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            20-06-2023
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              borderRight: "1px solid #000",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            20-06-2023
                          </Text>
                          <Text
                            style={{
                              width: "20%",
                              fontSize: "9px",
                              color: "#000",
                              borderTopLeftRadius: "4px",
                              fontFamily: "PopRegular",
                              paddingLeft: "5px",
                            }}
                          >
                            20-06-2023
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                {/* Family History Report */}
                <View style={{ width: "100%", padding: "10px" }}>
                  <View style={{ padding: "0px 20px" }}>
                    <View
                      style={{
                        fontSize: "10px",
                        display: "flex",
                        flexDirection: "row",
                        height: "30px",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          width: "10%",
                          color: "#1b71b1",
                          fontFamily: "PopBold",
                        }}
                      >
                        Family History
                      </Text>
                      <Text style={{ width: "1%" }}>:</Text>
                      <Text
                        style={{
                          width: "89%",
                          color: "#000",
                          textAlign: "justify",
                          fontFamily: "PopRegular",
                        }}
                      >
                        {[
                          "52", // Add all relevant category IDs
                          "53",
                          "54",
                          "55",
                          "56",
                          "57",
                          "58",
                        ]
                          .map((refQCategoryId) => {
                            // Filter `score` and check for "Yes" condition
                            const categoryLabels = score
                              .filter(
                                (element: any) =>
                                  element.refQCategoryId.toString() ===
                                    refQCategoryId &&
                                  element.refPTScore === "Yes"
                              )
                              .flatMap((element: any) =>
                                // Map matching categories to their labels
                                allCategory
                                  .filter(
                                    (cat: any) =>
                                      cat.refQCategoryId.toString() ===
                                      element.refQCategoryId
                                  )
                                  .map((cat: any) => cat.refCategoryLabel)
                              );

                            return categoryLabels.length > 0
                              ? categoryLabels.join(" / ")
                              : null;
                          })
                          .filter(Boolean) // Remove null or empty results
                          .join(" / ")}
                      </Text>
                    </View>
                  </View>
                </View>

                {/* Line */}
                <View
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "-20px",
                  }}
                >
                  <View
                    style={{
                      width: "92%",
                      borderBottom: "1px solid #1a70b0",
                    }}
                  >
                    <Text> </Text>
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
