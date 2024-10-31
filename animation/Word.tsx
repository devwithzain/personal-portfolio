"use client";
import React, { useRef } from "react";
import { TParagraphProps, TWordProps } from "@types";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Paragraph({ paragraph }: TParagraphProps) {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start 0.6", "start 0.25"],
	});

	const words = paragraph.split(" ");
	return (
		<>
			<p
				ref={container}
				className="flex text-[30px] lg:ml-[200px] leading-[35px] tracking-wider max-w-[1200px] text-[#202020] flex-wrap">
				{words.map((word, i) => {
					const start = i / words.length;
					const end = start + 1 / words.length;
					return (
						<Word
							key={i}
							progress={scrollYProgress}
							range={[start, end]}>
							{word}
						</Word>
					);
				})}
			</p>
		</>
	);
}

const Word = ({ children, progress, range }: TWordProps) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="relative mr-[12px] mt-[12px]">
			<span className="absolute opacity-[20%]">{children}</span>
			<motion.span style={{ opacity: opacity }}>{children}</motion.span>
		</span>
	);
};
