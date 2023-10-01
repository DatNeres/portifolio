import { motion } from "framer-motion";

const HandsAnimation = ({ children }) => {
 const floatingAnimation = {
  floating: {
   rotate: [1, -1, 1],
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
   {children}
  </motion.div>
 );
};

export default HandsAnimation;
