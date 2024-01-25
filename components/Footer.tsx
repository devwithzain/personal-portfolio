import Link from "next/link";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { TfooterItem } from "@constants";
import { LinkHover, TextMask } from "@animation";

export default function Footer() {
	const phrases = ["HAVE AN IDEA?"];
	return (
		<section className="w-full">
			<div className="flex py-[20rem] justify-between flex-col h-screen">
				<Navbar />
				<div className="flex items-center justify-center flex-col gap-y-[10rem]">
					<div>
						<h1 className="text-[#202020] uppercase font-medium mb-[20rem] tracking-[5rem] text-[150rem]">
							<TextMask>{phrases}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}>
						<p className="text-[25rem] text-[#202020] mt-[-20rem] tracking-wider">
							Drop me an email:
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}>
						<Link
							href={"mailto:Zainsoftwear11?subject=Portfolio%20Website"}
							className="uppercase text-[25rem] text-[#202020] tracking-wider font-semibold">
							Zainsoftwear11@gmail.com
						</Link>
					</motion.div>
				</div>
				<div className="flex items-center justify-between w-full">
					<ul className="flex justify-between items-center w-full">
						{TfooterItem.map((item) => (
							<li key={item.id}>
								<Link
									className="text-[20rem] text-[#202020] capitalize tracking-wider"
									href={item.href}>
									<LinkHover>{item.title}</LinkHover>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}
