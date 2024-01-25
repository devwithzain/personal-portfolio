import Navbar from "./Navbar";
import { TextMask } from "@animation";
import { motion } from "framer-motion";
import { heroVarients } from "@motion";

export default function Hero() {
	const phrases1 = ["Creative"];
	const phrases2 = ["Designer &"];
	const phrases3 = ["next js"];
	const phrases4 = [" developer"];
	return (
		<section className="w-full h-[100svh]">
			<Navbar />
			<div className="h-[90svh] flex flex-col items-center justify-around gap-y-[50rem] py-[10rem] sm:pt-[100px]">
				<div>
					<h1 className="text-[#202020] uppercase tracking-[5rem] h-[150rem] sm:text-[100rem] text-[130rem] font-semibold">
						<TextMask>{phrases1}</TextMask>
					</h1>
					<h1 className="text-[#202020] uppercase sm:ml-[0rem] ml-[500rem] tracking-[5rem] h-[150rem] sm:text-[100rem] text-[130rem] font-semibold">
						<TextMask>{phrases2}</TextMask>
					</h1>
					<h1 className="text-[#202020] uppercase sm:ml-[0rem] ml-[300rem] tracking-[5rem] h-[150rem] sm:text-[100rem] text-[130rem] font-semibold">
						<TextMask>{phrases3}</TextMask>
					</h1>
					<h1 className="text-[#202020] uppercase sm:ml-[0rem] ml-[700rem] tracking-[5rem] h-[150rem] sm:text-[100rem] text-[130rem] font-semibold">
						<TextMask>{phrases4}</TextMask>
					</h1>
				</div>
				<motion.div
					className="w-full flex items-center justify-between"
					variants={heroVarients}
					initial="initial"
					whileInView="vissible">
					<div className="">
						<h1 className="text-[18rem] text-[#202020] tracking-wider">
							Email: <br /> zainsoftwear11@gmail.com
						</h1>
					</div>
					<div className="">
						<h1 className="text-[18rem] text-[#202020] tracking-wider">
							Passionate about crafting <br /> unforgettable experiences.
						</h1>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
