import { Hover, Marquee } from "@animation";

export default function Project() {
	return (
		<section className="w-full my-[100rem]">
			<Marquee baseVelocity={2}>
				<h1 className="uppercase text-[#202020] text-[150rem] font-medium tracking-wider flex items-center justify-center gap-x-[20rem]">
					<span className="w-[30px] h-[30px] bg-[#8c8c8c] rounded-full" />
					selected
					<span className="w-[30px] h-[30px] bg-[#8c8c8c] rounded-full" />
					projects
				</h1>
			</Marquee>
			<div className="w-full h-screen bg-[url('/bglines.png')] bg-cover">
				<div className="w-[80%] mx-auto">
					<Hover />
				</div>
			</div>
		</section>
	);
}
