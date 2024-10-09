import LinkBox from "./Skill";
import { TextMask } from "@animation";
import { motion } from "framer-motion";
import { iconGroups } from "@constants";

export default function FrontEnd() {
	const phares = ["front end"];
	const phares1 = ["skills"];
	return (
		<div className="w-full h-screen padding-x py-[20rem] sticky top-0 bg-[#e1e1e1]">
			<div className="flex flex-col justify-center items-center h-full gap-[20rem]">
				<div className="w-full flex justify-start">
					<h1 className="text-[#202020] uppercase leading-none tracking-tight sm:text-[80rem] md:text-[100rem] text-[130rem] font-bold overflow-hidden">
						<TextMask>{phares}</TextMask>
						<TextMask>{phares1}</TextMask>
					</h1>
				</div>
				<div className="w-full">
					<div className="w-full divide-neutral-900 border border-neutral-900">
						{iconGroups.map((item, index) => (
							<div
								key={item.id}
								className="w-full">
								<div className="grid grid-cols-2 divide-x divide-neutral-900">
									{item.row1?.map((items, i) => (
										<motion.div
											key={items.id}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											className="origin-center"
											transition={{
												duration: 0.5,
												ease: "easeInOut",
												delay: i * 0.3,
											}}>
											<LinkBox Icon={items.Icon} />
										</motion.div>
									))}
								</div>
								<div className="grid grid-cols-4 divide-x divide-neutral-900">
									{item.row2?.map((items, i) => (
										<motion.div
											key={items.id}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											className="origin-center"
											transition={{
												duration: 0.5,
												ease: "easeInOut",
												delay: i * 0.3,
											}}>
											<LinkBox Icon={items.Icon} />
										</motion.div>
									))}
								</div>
								<div
									className={`grid grid-cols-3 divide-x divide-neutral-900 ${
										item.id !== iconGroups.length - 1 ? "border-t-[0.1rem]" : ""
									} border-neutral-900`}>
									{item.row3?.map((items, i) => (
										<motion.div
											key={items.id}
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											className="origin-center"
											transition={{
												duration: 0.5,
												ease: "easeInOut",
												delay: i * 0.3,
											}}>
											<LinkBox Icon={items.Icon} />
										</motion.div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
