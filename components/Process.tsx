"use client";
import { useState } from "react";
import { processItem } from "@constants";
import { TextHover, TextMask } from "@animation";
import { motion, AnimatePresence } from "framer-motion";
export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(null); // State to track active accordion

	const phrases = ["Process"];

	const toggleAccordion = (itemId: any) => {
		if (activeAccordion === itemId) {
			// If the clicked accordion is already active, close it
			setActiveAccordion(null);
		} else {
			// Otherwise, set the clicked accordion as active
			setActiveAccordion(itemId);
		}
	};

	return (
		<section className="w-full my-[100rem]">
			<div className="flex sm:flex-col lg:items-center gap-x-[100rem] border-b border-[#8D8D8D]">
				<h1 className="text-[#202020] uppercase tracking-[5rem] leading-none sm:text-[80rem] md:text-[100rem] text-[140rem] font-semibold">
					<TextMask>{phrases}</TextMask>
				</h1>
				<p className="text-[30rem] text-[#202020] lg:mt-[30rem] sm:mb-[30rem] lg:ml-[40rem]">
					Things i can help you with:
				</p>
			</div>
			<div className="w-full items-end flex py-[50rem] flex-col">
				{processItem.map((item) => (
					<div
						key={item.id}
						className="sm:w-full w-[60%] flex-col flex py-[15rem] border-b border-black">
						<div
							className="flex items-center justify-between transition-all duration-500 ease-in-out cursor-pointer"
							onClick={() => toggleAccordion(item.id)} // Toggle accordion on click
						>
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
							{activeAccordion === item.id && ( // Display content if accordion is active
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
