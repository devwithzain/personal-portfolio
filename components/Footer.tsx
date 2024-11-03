import Link from "next/link";
import { motion } from "framer-motion";
import { TfooterItem } from "@constants";
import { LinkHover, TextMask } from "@animation";

export default function Footer() {
	const phrases = ["HAVE AN IDEA?"];
	return (
		<section
			className="w-full h-screen bg-[#e1e1e1] relative z-[70]"
			id="contact">
			<div className="flex items-center justify-between flex-col h-full">
				<div className="w-full h-[8vh] " />
				<div className="flex items-center justify-center flex-col gap-y-[10px] w-full h-auto ">
					<div>
						<h1 className="text-[#202020] uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold tracking-tight">
							<TextMask>{phrases}</TextMask>
						</h1>
					</div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}>
						<p className="text-[25px] text-[#202020] mt-[-20px] tracking-wider">
							Drop me an email:
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}>
						<Link
							href={"mailto:Zainsoftwear11?subject=Portfolio%20Website"}
							className="uppercase text-[25px] text-[#202020] tracking-wider font-semibold">
							Zainsoftwear11@gmail.com
						</Link>
					</motion.div>
				</div>
				<div className="flex items-center justify-between w-full h-[8vh] ">
					<ul className="flex justify-between items-center w-full">
						{TfooterItem.map((item) => (
							<li key={item.id}>
								<Link
									className="text-[20px] text-[#202020] capitalize tracking-wider"
									href={item.href}
									target="_blank">
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
