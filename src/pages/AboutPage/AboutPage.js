import { motion } from "framer-motion";
import SkillIcon from "../../components/skillIcon";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";

function AboutPage({ navref, imageUrl, aboutMe }) {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    const fetchDocument = async () => {
      const collectionRef = collection(db, "Skills"); // Replace with your collection name
      try {
        const querySnapshot = await getDocs(collectionRef);
        const docsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setIconList(docsArray);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocument();
  }, []);

  const container = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
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
      className="flex flex-col relative h-screen w-screen text-center md:text-left  max-w-7xl px-10 pt-24 md:pt-20 mx-auto items-center md:justify-evenly"
      ref={navref}
    >
      <div className="mb-4">
        <h3 className="uppercase tracking-[20px] text-text-teal text-2xl">
          About
        </h3>
      </div>

      <div className="md:w-[80vw] justify-center items-center flex flex-col md:flex-row">
        <div className=" lg:w-2/4 md:flex md:flex-row md:justify-center md:mr-20">
          <motion.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{ once: true }}
            src={
              "https://firebasestorage.googleapis.com/v0/b/portfolio-pratnar.appspot.com/o/Images%2Fcartoon%20(2).png?alt=media&token=8a4d8270-2e34-4f1f-987d-453bb507b01e"
            }
            className="w-[55vw] md:w-[30vw] md:h-auto"
          />
        </div>
        <div className="md:w-2/4 flex flex-col justify-center md:justify-start">
          <div className="space-y-0 px-0 md:px-10 md:space-y-10">
            <h4 className="text-2xl text-custom-blue font-semibold md:text-4xl pb-4 md:pb-0">
              Here is a little background
            </h4>
            <p className="text-xs md:text-xl ">{aboutMe}</p>
          </div>
          <div className="space-y-0 py-2 px-0 md:px-10 md:space-y-10">
            <h4 className="text-2xl text-custom-blue font-semibold md:text-4xl pb-4 md:pb-0 md:mt-6">
              I come equipped with
            </h4>
            <motion.div
              initial="hidden"
              whileInView={iconList.length > 0 ? "visible" : "hidden"}
              variants={container}
              className="grid grid-cols-4 gap-2"
            >
              {iconList.map((item) => (
                <SkillIcon key={item.id} imageDetails={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AboutPage;
