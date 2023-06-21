import { motion } from "framer-motion";
const AnimationWrapper = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.90 }}
			whileInView={{ opacity: 1, scale: 1 }}
			viewport={{ once: true }}
			transition={{ ease: "easeOut", duration: 0.3 }}
		>
			{children}
		</motion.div>
	);
};
export default AnimationWrapper;
