import React, { useEffect, useRef } from "react";
import "./HomeHoverCircle.css"; // Adjust the path to your CSS file

const HomeHoverCircle = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const binaryContainer = containerRef.current;

    const createVerticalBinaryString = (startImmediately) => {
      const binaryString = document.createElement("div");
      binaryString.classList.add("binary-number");

      let stringLength = Math.floor(Math.random() * 10) + 5;
      let binaryText = "";
      for (let i = 0; i < stringLength; i++) {
        binaryText += (Math.random() < 0.5 ? "0" : "1") + "<br>";
      }

      binaryString.innerHTML = binaryText;
      binaryString.style.fontSize = `${Math.floor(Math.random() * 30) + 10}px`;
      binaryString.style.left = `${Math.random() * window.innerWidth}px`;
      binaryString.style.top = startImmediately
        ? `${Math.random() * window.innerHeight + 100}px`
        : "-50px";
      binaryContainer.appendChild(binaryString);

      let yPos = parseFloat(binaryString.style.top);
      const moveDown = () => {
        yPos += 0.5;
        binaryString.style.top = `${yPos}px`;
        if (yPos < window.innerHeight + 50) {
          requestAnimationFrame(moveDown);
        } else {
          binaryString.remove();
        }
      };
      moveDown();
    };

    // Create several strings immediately
    Array.from({ length: 2 }).forEach(() => createVerticalBinaryString(true));

    // Continue creating strings at regular intervals
    const interval = setInterval(() => createVerticalBinaryString(false), 200);

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} id="binary-container"></div>;
};

export default HomeHoverCircle;
