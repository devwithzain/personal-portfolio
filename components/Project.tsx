"use client";
import { useRef } from "react";
import { project } from "@constants";
import { Marquee } from "@animation";
import ProjectCard from "./project-card";
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

	return (
		<section className="w-full my-[100rem]">
			<Marquee baseVelocity={2}>
				<h1 className="text-[#202020] uppercase text-[130rem] font-semibold flex items-center justify-center">
					<span className="w-[40rem] h-[40rem] bg-[#8c8c8c] rounded-full mx-[20rem]" />
					selected
					<span className="w-[40rem] h-[40rem] bg-[#8c8c8c] rounded-full mx-[20rem]" />
					projects
				</h1>
			</Marquee>
			<div
				className="w-full flex justify-between gap-y-[50rem] padding-x flex-wrap"
				ref={container}>
				{project.map((project, index) => (
					<motion.div
						key={project.id}
						className="w-[49%] sm:w-full xm:w-full"
						style={{ y: transformStyles[index % transformStyles.length] }}>
						<ProjectCard item={project} />
					</motion.div>
				))}
			</div>
		</section>
	);
}
