import { Parallax, Sticky } from "@animation";
import {
	About,
	Footer,
	Hero,
	Process,
	Project,
	Skill,
	Testimonials,
} from "@components";

export default function Home() {
	return (
		<>
			<div className="sm:hidden block">
				<Sticky />
			</div>
			<div className="px-[50rem]">
				<Hero />
				<About />
			</div>
			<Project />
			<Process />
			<Parallax />
			<Skill />
			<Testimonials />
			<div className="px-[50rem]">{<Footer />}</div>
		</>
	);
}
