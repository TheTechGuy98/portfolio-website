import { motion } from "framer-motion";

function SkillIcon({ imageDetails }) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div variants={item}>
      <img
        src={imageDetails.SkillIcon}
        alt={imageDetails.id}
        className="rounded-full border border-grey-500 object-cover w-12 h-12 md:w-24 md:h-24"
      />
    </motion.div>
  );
}

export default SkillIcon;
