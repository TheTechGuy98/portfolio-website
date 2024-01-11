import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ProjectsCard({ projectDetails }) {
  const linkTo = `/projects/${projectDetails ? projectDetails.id : ""}`;

  return (
    <article className="p-4 shadow-div-shadow border-2 border-custom-blue flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[80vw] md:w-[50vw] xl:w-[40vw] snap-center cursor-pointer  overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src={projectDetails ? projectDetails.ProjectIcon : ""}
      />

      <div className="px-0 md:px-10 space-y-2">
        <h4 className="text-4xl font-light text-custom-blue">
          {projectDetails ? projectDetails.Name : ""}
        </h4>
        <p className="font-bold text-2xl mt-1">
          {projectDetails ? projectDetails.ProjectType : ""}
        </p>
        <div className="flex space-x-2 my-2">
          {projectDetails
            ? projectDetails.ProjectTags.map((tag, index) => {
                return (
                  <div
                    key={projectDetails.id + index}
                    className="bg-custom-green text-background-blue text-xs font-semibold rounded-full p-1"
                  >
                    {tag}
                  </div>
                );
              })
            : null}
        </div>
        <div className="text-justify">
          {projectDetails ? projectDetails.ProjectSummary : ""}
        </div>
        <div>
          <div>{}</div>
        </div>
      </div>
    </article>
  );
}

export default ProjectsCard;

/*            <Link
              className="bg-custom-green text-background-blue p-2 font-semibold rounded-sm"
              to={linkTo}
            >
              Details
            </Link>    */
