"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TparallaxProps } from "@types";
export default function Column({ y, images }: TparallaxProps) {
	return (
		<motion.div
			className="relative h-full w-[25%] min-w-[250px] flex flex-col gap-[2vw] odd:top-[-45%] even:top-[-95%] last:top-[-75%]"
			style={{ y }}>
			{images.map((src, i) => {
				return (
					<div
						key={i}
						className="h-full w-full relative rounded-[1vw] overflow-hidden">
						<Image
							className="object-cover"
							src={`/${src}`}
							alt="image"
							fill
							sizes="true"
						/>
					</div>
				);
			})}
		</motion.div>
	);
}
