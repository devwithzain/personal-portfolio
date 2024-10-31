"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Sticky() {
	const cursorSize = 20;
	const mouse = {
		x: useMotionValue(0),
		y: useMotionValue(0),
	};

	const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
	const smoothMouse = {
		x: useSpring(mouse.x, smoothOptions),
		y: useSpring(mouse.y, smoothOptions),
	};

	const manageMouseMove = (e: any) => {
		const { clientX, clientY } = e;
		mouse.x.set(clientX - cursorSize / 2);
		mouse.y.set(clientY - cursorSize / 2);
	};
	useEffect(() => {
		window.addEventListener("mousemove", manageMouseMove);
		return () => {
			window.removeEventListener("mousemove", manageMouseMove);
		};
	});

	return (
		<motion.div
			className="w-[15px] h-[15px] fixed rounded-[100%] bg-[#202020] pointer-events-none z-[100]"
			style={{
				left: smoothMouse.x,
				top: smoothMouse.y,
			}}></motion.div>
	);
}
