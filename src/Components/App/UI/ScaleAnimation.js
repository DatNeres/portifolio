import { motion } from 'framer-motion';

const ScaleAnimation = ({ children}) => {

    return (
        <motion.div
            initial={{scale: 0,}}
            whileInView={{scale: 1}}
            exit={{scale: 0}}
            transition={{ duration: 0.6, delay: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

export default ScaleAnimation;