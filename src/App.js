import "./App.css";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Header from "./components/Header";
import ExperiencePage from "./pages/ExperiencePage/ExperiencePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/Projects";

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);
  const ExperienceRef = useRef(null);

  const handleClick = (ref) => {
    if (ref === "Home") {
      HomeRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "About") {
      AboutRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "Projects") {
      ProjectRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "Contact") {
      ContactRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (ref === "Experience") {
      ExperienceRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchDocument = async () => {
      const collectionRef = collection(db, "PersonalInfo"); // Replace with your collection name
      try {
        const querySnapshot = await getDocs(collectionRef);
        const docs = querySnapshot.docs;

        if (docs.length > 0) {
          // Assuming there is only one document in the collection
          setPersonalInfo(docs[0].data());
        } else {
          console.log("No documents found!");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocument();
  }, []);

  return (
    <div className="App scrollbar-custom bg-background-blue text-text-teal h-screen w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      <Header
        linkedInUrl={personalInfo ? personalInfo.LinkedIn_URL : ""}
        githubUrl={personalInfo ? personalInfo.GitHub_URL : ""}
        resumeUrl={personalInfo ? personalInfo.Resume : ""}
      />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="snap-center">
                  <LandingPage
                    navref={HomeRef}
                    profileImg={personalInfo ? personalInfo.ProfileImage : ""}
                    navClick={handleClick}
                  />
                </section>
                <section id="about" className="snap-center">
                  <AboutPage
                    navref={AboutRef}
                    aboutMe={personalInfo ? personalInfo.AboutMe : ""}
                  />
                </section>

                <section id="experience" className="snap-center">
                  <ExperiencePage navref={ExperienceRef} />
                </section>

                <section id="projects" className="snap-center">
                  <ProjectsPage navref={ProjectRef} />
                </section>

                <section id="contact" className="snap-center"></section>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
