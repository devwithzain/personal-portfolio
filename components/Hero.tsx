import Navbar from "./Navbar";
import { TextMask } from "@animation";
import { motion } from "framer-motion";
import { heroVarients } from "@motion";

export default function Hero() {
	const phrases1 = ["Creative"];
	const phrases2 = ["Designer &"];
	const phrases3 = ["next js"];
	const phrases4 = ["developer"];
	return (
		<section className="w-full h-screen">
			<Navbar />
			<div className="w-full h-full flex flex-col justify-between items-center">
				<div className="w-full h-[8vh]" />
				<div className="w-full h-auto flex flex-col items-center">
					<div>
						<h1 className="text-[#202020] uppercase leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-semibold">
							<TextMask>{phrases1}</TextMask>
						</h1>
						<h1 className="text-[#202020] uppercase sm:ml-[0rem] md:ml-[250rem] ml-[500rem] leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-semibold">
							<TextMask>{phrases2}</TextMask>
						</h1>
						<h1 className="text-[#202020] uppercase sm:ml-[0rem] md:ml-[150rem] ml-[300rem] leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-semibold">
							<TextMask>{phrases3}</TextMask>
						</h1>
						<h1 className="text-[#202020] uppercase sm:ml-[0rem] md:ml-[350rem] ml-[700rem] leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-semibold">
							<TextMask>{phrases4}</TextMask>
						</h1>
					</div>
				</div>
				<motion.div
					className="w-full h-[8vh] flex items-center justify-between pb-[15rem]"
					variants={heroVarients}
					initial="initial"
					animate="vissible">
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
