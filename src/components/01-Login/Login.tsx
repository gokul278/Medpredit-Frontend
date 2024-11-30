import React, { useRef, useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./Login.css";
import { IonContent, IonIcon, IonPage } from "@ionic/react";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import { useHistory } from "react-router";

const Login: React.FC = () => {
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
      history.push("/enroll");
    } else if (carouselRef.current) {
      carouselRef.current.increment();
    }
  };

  const handleSlideChange = (index: number) => {
    setCurrentIndex(index);
  };

  const slides = [0, 1, 2];

  const handleSkip = (route: string) => {
    history.push(route, {
      direction: "forward",
      animation: "slide",
    });
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="skipButton">
          <p onClick={() => handleSkip("/enroll")}>Skip</p>
        </div>
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
          <div className="carouselDiv">
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              className="carouselImage"
            />
            <div className="contents">
              <p className="heading">
                Discover <span>Experienced Doctors</span>
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                architecto deserunt sint alias odio voluptate vero et,
                recusandae sunt aut? Facere ex nisi dolorum architecto facilis
                illo eligendi ab fuga?
              </p>
            </div>
          </div>
          <div className="carouselDiv">
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              className="carouselImage"
            />
            <div className="contents">
              <p className="heading">
                <span>Learn About</span> Your Doctors
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                architecto deserunt sint alias odio voluptate vero et,
                recusandae sunt aut? Facere ex nisi dolorum architecto facilis
                illo eligendi ab fuga?
              </p>
            </div>
          </div>
          <div className="carouselDiv">
            <img
              src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
              className="carouselImage"
            />
            <div className="contents">
              <p className="heading">
                <span>Effortless</span> Data Maintainence
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                architecto deserunt sint alias odio voluptate vero et,
                recusandae sunt aut? Facere ex nisi dolorum architecto facilis
                illo eligendi ab fuga?
              </p>
            </div>
          </div>
        </Carousel>
        <div className="carouselButtons">
          <button
            className="carouselButton"
            onClick={goToPreviousSlide}
            disabled={currentIndex === 0}
          >
            <IonIcon icon={chevronBackCircle}></IonIcon>
          </button>
          <div className="carouselIndicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  currentIndex === index ? "active" : ""
                }`}
              ></span>
            ))}
          </div>
          <button className="carouselButton" onClick={goToNextSlide}>
            <IonIcon icon={chevronForwardCircle}></IonIcon>
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
