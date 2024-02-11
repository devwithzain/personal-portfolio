"use client";
import { navVarients } from "@motion";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
export default function Navbar() {
	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.nav
			variants={navVarients}
			animate={hidden ? "hidden" : "vissible"}
			className="w-full h-[8vh] flex items-center px-[50rem] justify-between fixed backdrop-blur-[2.5px] z-10 top-0 left-0">
			<div className="w-[200rem]">
				<div>
					<h1 className="text-[18rem] tracking-wider text-[#202020] font-medium">
						Open for offers &
					</h1>
				</div>
				<div className="flex gap-x-[10rem] items-center">
					<h1 className="text-[18rem] tracking-wider text-[#202020] font-medium">
						collaborations
					</h1>
					<span className="w-[22rem] h-[3rem]  rounded-[10rem] bg-[#ACAAAC]" />
				</div>
			</div>
			<div className="w-[200rem] flex items-center justify-center">
				<h1 className="text-[30rem] font-bold tracking-wider text-[#202020] uppercase">
					Zain
				</h1>
			</div>
			<div className="w-[200rem] flex flex-col justify-end items-end">
				<div>
					<h1 className="text-[18rem] tracking-wider text-[#202020] font-medium">
						Portfolio
					</h1>
				</div>
				<div className="flex gap-x-[05rem] items-center">
					<span className="w-[18rem] tracking-wider h-[3rem] rounded-[10rem] bg-[#ACAAAC]" />
					<h1 className="text-[15rem] text-[#202020] font-medium">Vol 01 </h1>
				</div>
			</div>
		</motion.nav>
	);
}
