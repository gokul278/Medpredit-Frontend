import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router";
import decrypt, { formatDate } from "../../helper";
import axios from "axios";

const AddEmployee: React.FC = () => {
  const [formData, setFormData] = useState({
    refUserFname: "",
    refUserLname: "",
    refUserEmail: "",
    refUserPassword: "",
    refGender: null as string | null,
    refMaritalStatus: null as string | null,
    refDOB: null as Date | null,
    refEducation: "",
    refProfession: "",
    refAddress: "",
    refDistrict: "",
    refPincode: "",
    refUserMobileno: "",
  });

  const genderOpt: string[] = ["Male", "Female", "Transgender"];

  const refMaritalStatus: string[] = ["Married", "Unmarried"];

  const carouselRef = useRef<any>(null);
  const history = useHistory();

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.decrement();
    }
  };

  const goToNextSlide = () => {
    if (currentIndex === slides.length - 1) {
      history.push("/patient", {
        direction: "forward",
        animation: "slide",
      });
    } else if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (e: any, field: string) => {
    const selectedValue = e.value;
    setFormData({
      ...formData,
      [field]: selectedValue,
    });
  };

  const handleDateChange = (e: any) => {
    const date = e.value as Date;

    setFormData({
      ...formData,
      refDOB: date,
    });
  };

  const handleSaveData = async () => {
    if (currentIndex === 0 || currentIndex === 1 || currentIndex === 2) {
      goToNextSlide();
    } else if (currentIndex === 3) {
      const formattedDate = formData.refDOB
        ? formatDate(formData.refDOB)
        : null;

      const userData = {
        ...formData,
        refDOB: formattedDate,
      };

      const tokenString = localStorage.getItem("userDetails");
      if (tokenString) {
        try {
          const tokenObject = JSON.parse(tokenString);
          const token = tokenObject.token;

          const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/`,
            {
              refUserFname: formData.refUserFname,
              refUserLname: formData.refUserLname,
              refUserEmail: formData.refUserEmail,
              refUserPassword: formData.refUserPassword,
              refDOB: formData.refDOB,
              refMaritalStatus: formData.refMaritalStatus,
              refEducation: formData.refEducation,
              refProfession: formData.refProfession,
              refAddress: formData.refAddress,
              refDistrict: formData.refDistrict,
              refPincode: formData.refPincode,
              refUserMobileno: formData.refUserMobileno,
              refGender: formData.refGender,
            },
            {
              headers: {
                Authorization: token,
                "Content-Type": "application/json",
              },
            }
          );
          const data = decrypt(
            response.data[1],
            response.data[0],
            import.meta.env.VITE_ENCRYPTION_KEY
          );

          if (data.status) {
            history.push("/patient", {
              direction: "forward",
              animation: "slide",
            });
          }
        } catch {
          console.error("tesitng - false");
        }
      }
    }
  };

  const slides = [0, 1, 2, 3];

  // VALIDATE PAGE INPUT VALUES
  const isFirstCarouselValid = () => {
    return (
      formData.refUserFname &&
      formData.refUserLname &&
      formData.refUserEmail &&
      formData.refUserPassword &&
      formData.refGender &&
      formData.refDOB &&
      formData.refMaritalStatus &&
      formData.refEducation
    );
  };

  const isSecondCarouselValid = () => {
    return (
      formData.refAddress &&
      formData.refDistrict &&
      formData.refPincode &&
      formData.refUserMobileno
    );
  };
  return (
    <IonPage>
      <IonHeader mode="ios">
        <IonToolbar className="pt-1 pb-1" mode="ios">
          <IonButtons slot="start">
            <IonBackButton mode="md" defaultHref="/configure"></IonBackButton>
          </IonButtons>
          <IonTitle>
            {currentIndex === 0
              ? "Personal"
              : currentIndex === 1
              ? "Communication"
              : currentIndex === 2
              ? "Qualification Details"
              : currentIndex === 3
              ? "Professional Details"
              : ""}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Carousel
          autoPlay={false}
          infiniteLoop={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          stopOnHover={false}
          preventMovementUntilSwipeScrollTolerance
          swipeScrollTolerance={50}
          ref={carouselRef}
          onChange={handleSlideChange}
        >
          <div className="carouselDivForm">
            {/* FULL NAME */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="First Name"
                name="refUserFname"
                value={formData.refUserFname}
                onChange={handleInputChange}
              />
            </div>

            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-user"></i>
              </span>
              <InputText
                placeholder="Last Name"
                name="refUserLname"
                value={formData.refUserLname}
                onChange={handleInputChange}
              />
            </div>

            {/* EMAIL */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-envelope"></i>
              </span>
              <InputText
                placeholder="Email"
                name="refUserEmail"
                value={formData.refUserEmail}
                onChange={handleInputChange}
              />
            </div>

            {/* PASSWORD */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-lock"></i>
              </span>
              <Password
                placeholder="Password"
                name="refUserPassword"
                value={formData.refUserPassword}
                onChange={handleInputChange}
              />
            </div>

            <div className="card flex flex-column md:flex-row gap-1 mb-1 w-full">
              <div className="p-inputgroup flex-1">
                <Dropdown
                  value={formData.refGender}
                  onChange={(e) => handleDropdownChange(e, "refGender")}
                  options={genderOpt}
                  placeholder="Select Gender"
                  name="refGender"
                  className="w-full"
                  checkmark={true}
                  highlightOnSelect={false}
                />
              </div>

              <div className="p-inputgroup flex-1">
                <Calendar
                  value={formData.refDOB}
                  placeholder="Date of Birth"
                  className="w-full"
                  name="refDOB"
                  onChange={handleDateChange}
                  dateFormat="dd/mm/yy"
                />
              </div>

              <div className="p-inputgroup flex-1">
                <Dropdown
                  value={formData.refMaritalStatus}
                  name="refMaritalStatus"
                  onChange={(e) => handleDropdownChange(e, "refMaritalStatus")}
                  options={refMaritalStatus}
                  optionLabel="name"
                  placeholder="Marital Status"
                  className="w-full"
                  checkmark={true}
                  highlightOnSelect={false}
                />
              </div>
            </div>
          </div>

          <div className="carouselDivForm">
            {/* ADDRESS */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-home"></i>
              </span>
              <InputText
                placeholder="Address"
                value={formData.refAddress}
                name="refAddress"
                onChange={handleInputChange}
              />
            </div>

            {/* DISTRICT */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-map"></i>
              </span>
              <InputText
                placeholder="District"
                value={formData.refDistrict}
                name="refDistrict"
                onChange={handleInputChange}
              />
            </div>

            {/* PINCODE */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-map-marker"></i>
              </span>
              <InputText
                placeholder="Pincode"
                value={formData.refPincode}
                name="refPincode"
                onChange={handleInputChange}
              />
            </div>

            {/* PHONE */}
            <div className="p-inputgroup">
              <span className="p-inputgroup-addon">
                <i className="pi pi-phone"></i>
              </span>
              <InputText
                placeholder="Mobile"
                value={formData.refUserMobileno}
                name="refUserMobileno"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="carouselDivForm"></div>

          <div className="carouselDivForm"></div>
        </Carousel>
      </IonContent>
      <IonFooter slot="bottom">
        <div className="carouselButtonsForm">
          <button
            className="carouselButtonForm"
            onClick={goToPreviousSlide}
            disabled={currentIndex === 0}
          >
            <IonIcon icon={chevronBackCircle}></IonIcon>
          </button>
          <div className="carouselIndicatorsForm">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicatorForm ${
                  currentIndex === index ? "active" : ""
                }`}
              ></span>
            ))}
          </div>
          <button
            className="carouselButtonForm"
            onClick={handleSaveData}
            disabled={
              (!isFirstCarouselValid() && currentIndex === 0) ||
              (!isSecondCarouselValid() && currentIndex === 1)
            }
          >
            <IonIcon icon={chevronForwardCircle}></IonIcon>
          </button>
        </div>
      </IonFooter>
    </IonPage>
  );
};

export default AddEmployee;
