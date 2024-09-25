import { Hover, Marquee } from "@animation";

export default function Project() {
	return (
		<section className="w-full my-[100rem]">
			<Marquee baseVelocity={2}>
				<h1 className="text-[#202020] uppercase text-[130rem] font-semibold flex items-center justify-center">
					<span className="w-[40rem] h-[40rem] bg-[#8c8c8c] rounded-full mx-[20rem]" />
					selected
					<span className="w-[40rem] h-[40rem] bg-[#8c8c8c] rounded-full mx-[20rem]" />
					projects
				</h1>
			</Marquee>
			<div className="w-full bg-[url('/bglines.png')] bg-cover">
				<div className="w-[80%] mx-auto sm:w-full sm:px-[20rem]">
					<Hover />
				</div>
			</div>
		</section>
	);
}
