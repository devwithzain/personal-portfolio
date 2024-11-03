"use client";
import { project } from "@constants";
import { useRef, useState } from "react";
import ProjectCard from "./project-card";
import { Marquee, Modal } from "@animation";
import { useScroll, motion, useTransform } from "framer-motion";

export default function Project() {
	const container = useRef(null);

	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const transformStyles = [
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		useTransform(scrollYProgress, [0, 1], [0, 100]),
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		useTransform(scrollYProgress, [0, 1], [0, 100]),
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		useTransform(scrollYProgress, [0, 1], [0, 100]),
		useTransform(scrollYProgress, [0, 1], [0, -100]),
		useTransform(scrollYProgress, [0, 1], [0, 100]),
	];

	const [modal, setModal] = useState({ active: false, index: 0 });

	return (
		<section
			className="w-full my-[100px]"
			id="projects">
			<Marquee baseVelocity={2}>
				<h1 className="text-[#202020] uppercase text-[100px] font-bold tracking-tight flex items-center justify-center">
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					selected
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					projects
				</h1>
			</Marquee>
			<div
				className="w-full flex justify-between gap-y-[50px] padding-x flex-wrap"
				ref={container}>
				{project.map((project, index) => (
					<motion.div
						key={project.id}
						className="w-[49%] sm:w-full xm:w-full"
						style={{ y: transformStyles[index % transformStyles.length] }}>
						<ProjectCard
							item={project}
							index={index}
							setModal={setModal}
						/>
					</motion.div>
				))}
				<Modal
					projects={project}
					modal={modal}
				/>
			</div>
		</section>
	);
}
