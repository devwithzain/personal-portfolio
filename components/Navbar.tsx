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
			className="w-full h-[8vh] flex items-center px-[50px] justify-between fixed backdrop-blur-[1.7px] z-[99] top-0 left-0">
			<div className="w-[200px]">
				<div>
					<Image
						src={logo}
						alt=""
						className="w-[40px] h-[40px] object-cover"
					/>
				</div>
			</div>
			<div className="w-[200px] flex items-center justify-center">
				<h1 className="text-[30px] font-bold tracking-wider text-[#202020] uppercase">
					Zain
				</h1>
			</div>
			<div className="w-[200px] flex items-center justify-center">
				<Menu />
			</div>
		</motion.nav>
	);
}
