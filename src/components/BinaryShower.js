import React, { useEffect, useRef, useState } from "react";
import "./BinaryShower.css";

function BinaryShower() {
  const containerRef = useRef(null);
  const binaryStrings = useRef([]);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const binaryContainer = containerRef.current;

    const createVerticalBinaryString = () => {
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
      binaryString.style.top = "0vh";

      binaryContainer.appendChild(binaryString);
      binaryStrings.current.push(binaryString);

      setTimeout(() => {
        binaryStrings.current = binaryStrings.current.filter(
          (str) => str !== binaryString
        );
        binaryString.remove();
      }, 5000); // Remove the string after 10 seconds
    };

    let interval;
    if (isInView) {
      interval = setInterval(createVerticalBinaryString, 500);
    }

    return () => {
      clearInterval(interval);
      binaryStrings.current.forEach((binaryString) => binaryString.remove());
      binaryStrings.current = [];
    };
  }, [isInView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return <div ref={containerRef} id="binary-container"></div>;
}

export default BinaryShower;
