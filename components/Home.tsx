import { Parallax, Sticky } from "@animation";
import { About, Footer, Hero, Process, Project, Skills } from "@components";

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
			<div className="sm:hidden">
				<Project />
			</div>
			<Process />
			<Parallax />
			<Skills />
			<div className="px-[50rem]">{<Footer />}</div>
		</>
	);
}
