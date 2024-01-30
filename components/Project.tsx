import { Hover, Marquee } from "@animation";

export default function Project() {
	return (
		<section className="w-full my-[100rem]">
			<Marquee baseVelocity={2}>
				<h1 className="uppercase text-[#202020] text-[150rem] font-medium tracking-wider flex items-center justify-center">
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					selected
					<span className="w-[40px] h-[40px] bg-[#8c8c8c] rounded-full mx-[20px]" />
					projects
				</h1>
			</Marquee>
			<div className="w-full bg-[url('/bglines.png')] bg-cover">
				<div className="w-[80%] mx-auto">
					<Hover />
				</div>
			</div>
		</section>
	);
}
