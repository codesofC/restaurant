import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import img1 from "../../public/assets/bchu.png"
import img2 from "../../public/assets/bc.png"
import img3 from "../../public/assets/home_img.png"
import img4 from "../../public/assets/sav.png"
import img5 from "../../public/assets/soda.png"
import img6 from "../../public/assets/img6.webp"
import img7 from "../../public/assets/img7.webp"
import img8 from "../../public/assets/img8.jpg"
import img9 from "../../public/assets/img9.jpeg"

const images = [
  {index:1, url: img1},
  {index:2, url: img2},
  {index:3, url: img3},
  {index:4, url: img4},
  {index:5, url: img5},
  {index:6, url: img6},
  {index:7, url: img7},
  {index:8, url: img8},
  {index:9, url: img9},
]

const Gallery = () => {
  const [indexSlide, setIndexSlide] = useState(0);
  const [display, setDisplay] = useState(false);


  const displaySlide = (disp, index) => {
    setDisplay(disp);
    setTimeout(() => {
      setIndexSlide(index - 1);
    }, 1);
  };

  const setValueIndex = (arg) => {
    if (arg === "increment") {
      if (indexSlide === images.length - 1) {
        setIndexSlide(0);
      } else {
        setIndexSlide(indexSlide + 1);
      }
    } else if (arg === "decrement") {
      if (indexSlide === 0) {
        setIndexSlide(images.length - 1);
      } else {
        setIndexSlide(indexSlide - 1);
      }
    }
  };

  return (
    <section className="gallery" id="gallery">
      <h1>Galerie</h1>
      <div className="images">
        {images.map((item) => (
          <div
            className="img"
            key={item.index}
            onClick={() => displaySlide(true, item.index)}
          >
            <Image
              src={item.url}
              width="200"
              alt="image"
              loading="lazy"
            />
            <div className="over-img"></div>
          </div>
        ))}
      </div>
      <div className={`slides ${display ? "active" : ""}`}>
        <div onClick={() => setDisplay(false)} className="close">
          <span></span>
          <span></span>
        </div>
        <div className="left" onClick={() => setValueIndex("decrement")}>
          <FaArrowAltCircleLeft />
        </div>
        <div className="slide">
          <Image src={images[indexSlide].url} width="400" alt="image" />
        </div>
        <div className="right" onClick={() => setValueIndex("increment")}>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
