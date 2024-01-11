import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

function Header({ linkedInUrl, githubUrl, resumeUrl }) {
  const title = "<Prats />";
  return (
    <header className="sticky top-0 p-5 flex items-center justify-center  mx-auto z-20 xl:items-center bg-transparent">
      <motion.div
        className="flex flex-row items-center w-[100%]"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <h3 className="text-custom-blue text-[1.4rem] md:text-3xl font-semibold uppercase">
          {title}
        </h3>
      </motion.div>

      <motion.div
        className="flex flex-row items-center w-[100%] justify-center"
        initial={{
          y: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="text-custom-green"
          url={linkedInUrl}
          fgColor="currentColor"
          bgColor="transparent"
        />
        <SocialIcon
          className="text-custom-green"
          url={githubUrl}
          fgColor="currentColor"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        className="flex flex-row items-center w-[100%] justify-center"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <button
          onClick={() => window.open(resumeUrl, "_blank")}
          className="bg-custom-green text-background-blue p-2 font-semibold rounded-sm"
        >
          Resume
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
