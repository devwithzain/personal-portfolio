"use client";
import { useState } from "react";
import { TextHover } from "@animation";
import { processItem } from "@constants";
import { motion, AnimatePresence } from "framer-motion";

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState<string | null>(
		processItem[0]?.id || null,
	);

	const toggleAccordion = (itemId: string) => {
		if (activeAccordion === itemId) {
			setActiveAccordion(null);
		} else {
			setActiveAccordion(itemId);
		}
	};

	return (
		<section className="w-full my-[100rem]">
			<div className="flex sm:flex-col lg:items-center gap-x-[20rem] border-b border-[#8D8D8D] px-[50rem]">
				<h1 className="text-[#202020] uppercase leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-bold tracking-tight overflow-hidden">
					{"process".split("").map((item: string, i: number) => (
						<motion.span
							initial={{ y: "100%" }}
							whileInView={{ y: 0 }}
							viewport={{ once: true }}
							transition={{
								delay: i * 0.1,
								duration: 0.5,
								ease: [0.4, 0, 0.2, 1],
							}}
							className="inline-block"
							key={i}>
							{item}
						</motion.span>
					))}
				</h1>
			</div>
			<div className="w-full items-end flex py-[50rem] flex-col px-[50rem]">
				{processItem.map((item) => (
					<div
						key={item.id}
						className="sm:w-full w-[60%] flex-col flex py-[15rem] border-b border-black">
						<div
							className="flex items-center justify-between transition-all duration-500 ease-in-out cursor-pointer"
							onClick={() => toggleAccordion(item.id)}>
							<div className="flex gap-x-[40rem] items-center">
								<TextHover
									titile1="0"
									subTitle1={item.id}
									titile2={item.title}
									subTitle2={item.subTitle}
								/>
							</div>
							<button className="text-[50rem]">
								{activeAccordion === item.id ? "-" : "+"}
							</button>
						</div>
						<AnimatePresence>
							{activeAccordion === item.id && (
								<motion.div
									initial={{ opacity: 0, height: 0 }}
									animate={{ opacity: 1, height: "auto" }}
									exit={{ opacity: 0, height: 0 }}
									transition={{
										ease: "anticipate",
										duration: 1,
										type: "tween",
									}}>
									<p className="text-[22rem] mb-[10rem]">{item.para}</p>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</section>
	);
}
