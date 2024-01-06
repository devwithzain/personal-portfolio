import { navVarients } from "@motion";
import { motion } from "framer-motion";
export default function Navbar() {
	return (
		<motion.nav
			variants={navVarients}
			initial="initial"
			whileInView="vissible">
			<div className="w-full h-[10vh] flex items-center justify-between">
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
						<span className="w-[22rem] h-[3rem]  rounded-[10rem] bg-[#ACAAAC]"></span>
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
						<span className="w-[18rem] tracking-wider h-[3rem] rounded-[10rem] bg-[#ACAAAC]"></span>
						<h1 className="text-[15rem] text-[#202020] font-medium">Vol 01 </h1>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
