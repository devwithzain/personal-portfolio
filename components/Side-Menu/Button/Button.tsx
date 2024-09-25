import { TbuttonProps } from "@/types";
import { motion } from "framer-motion";
import PerspectiveText from "./PerspectiveText";
export default function Button({ isActive, toggleMenu }: TbuttonProps) {
	return (
		<div className="button">
			<motion.div
				className="slider"
				animate={{ top: isActive ? "-100%" : "0%" }}
				transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}>
				<div
					className="el"
					onClick={() => {
						toggleMenu();
					}}>
					<PerspectiveText label="Menu" />
				</div>
				<div
					className="el"
					onClick={() => {
						toggleMenu();
					}}>
					<PerspectiveText label="Close" />
				</div>
			</motion.div>
		</div>
	);
}
