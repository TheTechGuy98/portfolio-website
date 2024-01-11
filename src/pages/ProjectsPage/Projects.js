import { motion } from "framer-motion";
import ProjectsCard from "../../components/ProjectsCard";
import { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Projects.css";

function ProjectsPage({ navref }) {
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    const fetchDocument = async () => {
      const collectionRef = collection(db, "projects"); // Replace with your collection name
      try {
        const querySnapshot = await getDocs(collectionRef);
        const docsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjectList(docsArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocument();
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative w-full h-screen overflow-hidden text-center md:text-left max-w-7xl md:px-10 justify-center mx-auto items-center md:justify-evenly"
      ref={navref}
    >
      <div className="mt-24 mb-4">
        <h3 className="uppercase tracking-[20px] text-text-teal text-2xl">
          Projects
        </h3>
      </div>

      <div className="scrollbar-custom-2  w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {projectList
          ? projectList.map((item) => {
              return (
                <div key={item.id}>
                  <ProjectsCard projectDetails={item} />{" "}
                </div>
              );
            })
          : null}
      </div>
    </motion.div>
  );
}

export default ProjectsPage;
