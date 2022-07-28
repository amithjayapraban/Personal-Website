import { motion } from "framer-motion";
const animationConfiguration = {
    initial: { scale: 0.6 },
    animate: { scale : 1 },
    exit: { scale : .6 },
};
const animationConfiguration2 = {
    initial: { opacity: 0, x: -5 },
    animate: { opacity: 1 , x: 0 },
    exit: { opacity: 0 },
};

const Transition = ({ children }:any) => {
    return (
        <motion.div
            variants={animationConfiguration2}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .25 }}
            
        >
            {children}
        </motion.div>
    );
};
export default Transition;