"use client";
import Link from "next/link";
import { TnavProps } from "@/types";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { perspective, slideIn } from "@/motion";
import { footerLinks, links } from "@/constants";

export default function Nav({ toggleMenu }: TnavProps) {
	const pathname = usePathname();
	return (
		<div className="flex flex-col justify-between pr-[80px] pl-[40px] pt-[80px] pb-[40px] h-full">
			<div className="flex gap-[15px] flex-col">
				{links.map((link, i) => {
					const { title, href } = link;
					return (
						<div
							key={`b_${i}`}
							className="perspective-120 perspective-origin-bottom">
							<motion.div
								custom={i}
								variants={perspective}
								initial="initial"
								animate="enter"
								exit="exit">
								<Link
									onClick={toggleMenu}
									href={`#${href}`}
									className={`text-black text-[46px] sm:text-[40px] xm:text-[36px] leading-none ${
										pathname === link.href ? "font-semibold" : ""
									}`}>
									{title}
								</Link>
							</motion.div>
						</div>
					);
				})}
			</div>
			<motion.div className="flex flex-wrap mt-[40px]">
				{footerLinks.map((link, i) => {
					const { title, href } = link;
					return (
						<motion.div
							className="w-[50%] mt-[5px] text-[16px]"
							variants={slideIn}
							custom={i}
							initial="initial"
							animate="enter"
							exit="exit"
							key={`f_${i}`}>
							<Link href={href}>{title}</Link>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
}
