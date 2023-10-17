import { motion } from "framer-motion";

const HandsAnimation = ({ children, animationType }) => {
  const animationVariants = {
    leftToRight: {
      x: ["-90%", "0%"],
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
    rightToLeft: {
      x: ["90%", "0%"],
      transition: {
        duration: 2,
        delay: 0.5,
      },
    },
  };
  const floatingAnimation = {
    floating: {
      rotate: [2, -2, 2],
      transition: {
        duration: 3,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      initial="floating"
      animate="floating"
      variants={floatingAnimation}
    >
      <motion.div whileInView={animationType} variants={animationVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HandsAnimation;
