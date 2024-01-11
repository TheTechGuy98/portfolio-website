import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./ExperiencePage.css";
import {
  milestoneYearsLaptop,
  milestoneYearsMobile,
  ExperienceTitleLaptop,
  ExperienceTitleMobile,
  infoButtonsLaptop,
  infoButtonsMobile,
} from "../../constants/TimelineConstants";
import ExperienceHoverBox from "../../components/ExperienceHoverBox";

function ExperiencePage({ navref }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const imageRef = useRef(null);
  const [imageSize, setImageSize] = useState(1);
  const [hoverInfo, setHoverInfo] = useState({
    show: false,
    text: "",
    x: 0,
    y: 0,
  });

  const updateImageSize = () => {
    if (imageRef.current) {
      setImageSize(
        imageRef.current.offsetWidth / imageRef.current.offsetHeight
      );
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      updateImageSize();
    };

    window.addEventListener("resize", handleResize);
    updateImageSize(); // Initialize size on first render

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imageRef]);

  const handleMouseOver = (e, text) => {
    const containerRect = imageRef.current.getBoundingClientRect();
    setHoverInfo({
      show: true,
      text: text,
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    });
  };

  const handleMouseOut = () => {
    setHoverInfo({ show: false, text: "", x: 0, y: 0 });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative w-full h-screen text-center md:text-left max-w-7xl pt-24 md:pt-48 justify-start mx-auto items-center"
      ref={navref}
    >
      <div className="mb-4">
        <h3 className="uppercase tracking-[20px] text-text-teal text-2xl">
          Experience and Education
        </h3>
      </div>
      <div
        className={isMobile ? "image-container mt-20" : "image-container "}
        ref={imageRef}
      >
        <img
          onLoad={updateImageSize}
          alt=""
          className={
            isMobile ? "glowing-image top-[30vh]" : "glowing-image top-[25vh]"
          }
          src={
            isMobile
              ? "https://firebasestorage.googleapis.com/v0/b/portfolio-pratnar.appspot.com/o/Images%2FBackground2.png?alt=media&token=050b232b-33f6-4000-a64f-38d02ac1c8dd"
              : "https://firebasestorage.googleapis.com/v0/b/portfolio-pratnar.appspot.com/o/Images%2FBackground.png?alt=media&token=dcf38d4a-97fc-4fca-b12d-cde8b2ac7b32"
          }
        />
        {isMobile
          ? milestoneYearsMobile.map((area) => (
              <div
                key={area.id}
                className="hover-area"
                style={{
                  top: area.top,
                  left: area.left,
                  width: area.width,
                  height: area.height,
                }}
              >
                <p className=" text-xs md:text-l lg:text-xl">{area.text}</p>
              </div>
            ))
          : milestoneYearsLaptop.map((area) => (
              <div
                key={area.id}
                className="hover-area"
                style={{
                  top: area.top,
                  left: area.left,
                  width: area.width,
                  height: area.height,
                }}
              >
                <p className="text-xs md:text-xl ">{area.text}</p>
              </div>
            ))}
        {isMobile
          ? ExperienceTitleMobile.map((area) => (
              <div
                key={area.id}
                className="hover-area flex flex-col items-center"
                style={{
                  top: area.top,
                  left: area.left,
                  width: area.width,
                  height: area.height,
                }}
              >
                <h4 className="text-custom-blue uppercase text-sm">
                  {area.title}
                </h4>
                <p className=" text-xs">{area.subtitle1}</p>
                <p className=" text-xs">{area.subtitle2}</p>
              </div>
            ))
          : ExperienceTitleLaptop.map((area) => (
              <div
                key={area.id}
                className="hover-area flex flex-col items-center"
                style={{
                  top: area.top,
                  left: area.left,
                  width: area.width,
                  height: area.height,
                }}
              >
                <h4 className="text-custom-blue uppercase text-lg ">
                  {area.title}
                </h4>
                <p className="text-sm ">{area.subtitle1}</p>
                <p className="text-sm ">{area.subtitle2}</p>
              </div>
            ))}

        {isMobile
          ? infoButtonsMobile.map((area) => (
              <div
                key={area.id}
                className="hover-area-info bg-opacity-50 bg-custom-blue rounded-full text-black items-center text-center"
                style={{
                  top: area.top,
                  left: area.left,
                  width: "3%",
                  height: 3 * imageSize + "%",
                }}
                onClick={(e) => handleMouseOver(e, area.id)}
              >
                <p className=" text-xs md:text-l lg:text-xl">{area.text}</p>
              </div>
            ))
          : infoButtonsLaptop.map((area) => (
              <div
                key={area.id}
                className="hover-area-info bg-opacity-50 bg-custom-blue rounded-full text-black items-center text-center"
                style={{
                  top: area.top,
                  left: area.left,
                  width: "1.7%",
                  height: 1.7 * imageSize + "%",
                }}
                onMouseOver={(e) => handleMouseOver(e, area.id)}
                onMouseOut={handleMouseOut}
              >
                <p className="text-xs md:text-xl ">{area.text}</p>
              </div>
            ))}
        {isMobile
          ? hoverInfo.show && (
              <div
                className="tooltip pt-0 shadow-div-shadow-2"
                style={{
                  width: "60%",
                  left: "50%",
                  top: "70%",
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                <div className="absolute top-[-2%] left-[88%] flex flex-row-reverse">
                  <button
                    onClick={handleMouseOut}
                    className=" bg-transparent text-custom-green w-8 mt-2 font-semibold rounded-sm"
                  >
                    X
                  </button>
                </div>
                <ExperienceHoverBox id={hoverInfo.text} />
              </div>
            )
          : hoverInfo.show && (
              <div
                className="tooltip h-5/5 w-5/5"
                style={{
                  left: hoverInfo.x,
                  top: hoverInfo.y - 20,
                  opacity: 1,
                  visibility: "visible",
                }}
              >
                <ExperienceHoverBox id={hoverInfo.text} />
              </div>
            )}
      </div>
    </motion.div>
  );
}

export default ExperiencePage;
