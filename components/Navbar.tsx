import Image from "next/image";
import { logo } from "@public";
import { Menu } from "@components";
import { navVarients } from "@motion";
import { motion } from "framer-motion";

export default function Navbar() {
	return (
		<motion.nav
			variants={navVarients}
			initial="initial"
			animate="vissible"
			className="w-full h-[8vh] flex items-center px-[50rem] justify-between fixed backdrop-blur-[1.7rem] z-10 top-0 left-0">
			<div className="w-[200rem]">
				<div>
					<Image
						src={logo}
						alt=""
						className="w-[40rem] h-[40rem] object-cover"
					/>
				</div>
			</div>
			<div className="w-[200rem] flex items-center justify-center">
				<h1 className="text-[30rem] font-bold tracking-wider text-[#202020] uppercase">
					Zain
				</h1>
			</div>
			<div className="w-[200rem] flex items-center justify-center">
				<Menu />
			</div>
		</motion.nav>
	);
}
