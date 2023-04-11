import { motion } from "framer-motion";
const AnimationWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
export default AnimationWrapper;
