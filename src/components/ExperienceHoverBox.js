import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

function ExperienceHoverBox({ id }) {
  const [experienceInfo, setExperienceInfo] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      const collectionRef = collection(db, "Experience");
      const q = query(collectionRef, where("RefId", "==", id));
      try {
        const querySnapshot = await getDocs(q);
        const docs = querySnapshot.docs;

        if (docs.length > 0) {
          setExperienceInfo(docs[0].data());
        } else {
          console.log("No documents found!");
        }
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchDocument();
  }, [id]); // Include id in the dependency array

  return (
    <div className="top-0">
      <h4 className=" text-base m-2 md:mt-0 md:text-lg text-center text-custom-green">
        {experienceInfo ? experienceInfo.Name : ""}
      </h4>
      <p className="text-xs md:text-base text-gray-400 ">
        {experienceInfo ? experienceInfo.Role : ""}
      </p>
      <p className="text-xs italic md:text-base text-gray-400 ">
        {experienceInfo
          ? `${experienceInfo.StartedAt} - ${experienceInfo.EndedAt}`
          : ""}
      </p>
      <ul>
        {experienceInfo &&
          experienceInfo.textArray &&
          experienceInfo.textArray.map((text, index) => (
            <li className="text-xs md:text-sm" key={index}>
              {text}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ExperienceHoverBox;
