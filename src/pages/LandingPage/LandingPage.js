import BinaryShower from "../../components/BinaryShower";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "./LandingPage.css";

function LandingPage({ navref, profileImg, navClick }) {
  const [text] = useTypewriter({
    words: ["Software Developer", "Data Scientist", "Web Developer"],
    loop: true,
    delaySpeed: 2500,
  });

  const handleHover = () => {
    console.log("Hovered over the div!");
    // Add your custom logic here
  };

  return (
    <div
      className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden"
      ref={navref}
    >
      <BinaryShower />
      <div
        className="box absolute bg-background-blue shadow-div-shadow h-[70vh] w-[70vh] rounded-[100%] overflow-hidden"
        onMouseEnter={handleHover}
      >
        <div className="box-before flex justify-end items-center">
          <div className="circle absolute border rounded-full h-[1.5rem] w-[1.5rem]"></div>
        </div>
        <div onMouseEnter={handleHover} className="box-after"></div>
      </div>
      <div
        onMouseEnter={handleHover}
        className="absolute flex flex-col items-center justify-center text-center overflow-hidden z-10"
      >
        <img
          alt=""
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          onMouseEnter={handleHover}
          src={profileImg}
        />
        <div>
          <h2 className="text-sm  text-white pb-2 pt-10 tracking-[12px]">
            Im A
          </h2>
          <h1 className="text-custom-blue text-3xl lg:text-6xl font-semibold px-10">
            <span>
              {text}
              <Cursor cursorColor="custom-green" />
            </span>
          </h1>
          <div className="relative flex flex-row justify-center pt-5">
            <button
              className="nav-button text-xs p-2 md:text-sm md:p-8"
              onClick={() => {
                navClick("Home");
              }}
            >
              HOME
            </button>
            <button
              className="nav-button text-xs p-2 md:text-sm md:p-8"
              onClick={() => {
                navClick("About");
              }}
            >
              ABOUT
            </button>
            <button
              className="nav-button text-xs p-2 md:text-sm md:p-8"
              onClick={() => {
                navClick("Experience");
              }}
            >
              EXPERIENCE
            </button>
            <button
              className="nav-button text-xs p-2 md:text-sm md:p-8"
              onClick={() => {
                navClick("Projects");
              }}
            >
              PROJECTS
            </button>
            <button
              className="nav-button text-xs p-2 md:text-sm md:p-8"
              onClick={() => {
                navClick("Contact");
              }}
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
