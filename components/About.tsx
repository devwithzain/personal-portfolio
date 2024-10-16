import { Word } from "@animation";
import { paragraph } from "@constants";
import { motion } from "framer-motion";

export default function About() {
	return (
		<section className="w-full my-[100rem]">
			<h1 className="text-[#202020] uppercase leading-none sm:text-[80rem] md:text-[100rem] text-[100rem] font-bold tracking-tight overflow-hidden">
				{"about".split("").map((item: string, i: number) => (
					<motion.span
						initial={{ y: "100%" }}
						whileInView={{ y: 0 }}
						viewport={{ once: true }}
						transition={{
							delay: i * 0.1,
							duration: 0.5,
							ease: [0.4, 0, 0.2, 1],
						}}
						className="inline-block"
						key={i}>
						{item}
					</motion.span>
				))}
			</h1>
			<div className="w-full">
				<Word paragraph={paragraph} />
			</div>
		</section>
	);
}
