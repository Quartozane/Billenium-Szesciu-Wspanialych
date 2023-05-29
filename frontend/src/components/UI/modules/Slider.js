import React, { useEffect, useState } from "react";
import slides from "../../../images/slides";

import classes from "./Slider.module.css";

const fadeImages = [
  { image: slides.slide_0, key: "0" },
  { image: slides.slide_1, key: "1" },
  { image: slides.slide_2, key: "2" },
];

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [changingImage, setChangingImage] = useState(false);

  const handleUserChoice = (event) => {
    handleChangeImage();
    setCurrentImage(parseInt(event.target.value));
  };

  const handleChangeImage = () => {
    setChangingImage(true);
    setTimeout(() => {
      console.log("timeout");
      setChangingImage(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage === 2) {
        setCurrentImage(0);
      } else {
        setCurrentImage((prevImage) => prevImage + 1);
      }
      handleChangeImage();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  const buttons = () => {
    const buttonsArray = [];
    for (let i = 0; i < fadeImages.length; i++) {
      buttonsArray.push(
        <input
          key={i}
          name="imageSelector"
          type="radio"
          className={classes["slider-button"]}
          value={i}
          onChange={handleUserChoice}
          checked={currentImage === i}
        />
      );
    }
    return buttonsArray;
  };
  return (
    <>
      <img
        className={`${classes["slider-image"]} ${changingImage &&
          classes["change"]}`}
        src={fadeImages[currentImage].image}
        key={fadeImages[currentImage].key}
        alt={fadeImages[currentImage].key}
      />
      <div className={classes["slider-buttons"]}>{buttons()}</div>
    </>
  );
};

export default Slider;
