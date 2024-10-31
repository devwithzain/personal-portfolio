"use client";
import gsap from "gsap";
import Image from "next/image";
import { TmodalProps } from "@types";
import { motion } from "framer-motion";
import { scaleAnimation } from "@motion";
import { useRef, useEffect } from "react";

export default function Modal({ modal, projects }: TmodalProps) {
	const { active, index } = modal;
	const modalContainer = useRef(null);
	const cursor = useRef(null);
	const cursorLabel = useRef(null);

	useEffect(() => {
		//Move Container
		let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
			duration: 0.8,
			ease: "power3",
		});
		let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
			duration: 0.8,
			ease: "power3",
		});
		//Move cursor
		let xMoveCursor = gsap.quickTo(cursor.current, "left", {
			duration: 0.5,
			ease: "power3",
		});
		let yMoveCursor = gsap.quickTo(cursor.current, "top", {
			duration: 0.5,
			ease: "power3",
		});
		//Move cursor label
		let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
			duration: 0.45,
			ease: "power3",
		});
		let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
			duration: 0.45,
			ease: "power3",
		});

		window.addEventListener("mousemove", (e) => {
			const { pageX, pageY } = e;
			xMoveContainer(pageX);
			yMoveContainer(pageY);
			xMoveCursor(pageX);
			yMoveCursor(pageY);
			xMoveCursorLabel(pageX);
			yMoveCursorLabel(pageY);
		});
	}, []);

	return (
		<>
			<motion.div
				ref={modalContainer}
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}
				className="h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center sm:hidden">
				<div
					style={{ top: index * -100 + "%" }}
					className="h-full w-full absolute transition-all duration-500 ease-[0.76, 0, 0.24, 1]">
					{projects.map((project, index) => {
						const { img, color } = project;
						return (
							<div
								className="h-full w-full flex items-center justify-center"
								style={{ backgroundColor: color }}
								key={`modal_${index}`}>
								<Image
									src={img}
									width={300}
									height={0}
									alt="image"
									className="h-auto w-auto"
								/>
							</div>
						);
					})}
				</div>
			</motion.div>
			<motion.div
				ref={cursor}
				className="w-[80px] h-[80px] rounded-[50%] bg-[#455ce9] text-white absolute z-10 flex items-center justify-center text-[14px] font-light pointer-events-none  sm:hidden"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}
			/>
			<motion.div
				ref={cursorLabel}
				className="w-[80px] h-[80px] rounded-[50%] bg-[#455ce9] text-white absolute z-10 flex items-center justify-center text-[14px] font-light pointer-events-none  sm:hidden"
				variants={scaleAnimation}
				initial="initial"
				animate={active ? "enter" : "closed"}>
				View
			</motion.div>
		</>
	);
}
