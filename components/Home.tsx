import { Parallax, Sticky } from "@animation";
import {
	About,
	Footer,
	Hero,
	Process,
	Project,
	FrontEnd,
	Testimonials,
	Services,
} from "@components";

export default function Home() {
	return (
		<>
			<div className="sm:hidden block">
				<Sticky />
			</div>
			<div className="px-[50px]">
				<Hero />
				<About />
			</div>
			<Project />
			<Process />
			<Parallax />
			<FrontEnd />
			<Testimonials />
			<Services />
			<div className="px-[50px]">{<Footer />}</div>
		</>
	);
}
