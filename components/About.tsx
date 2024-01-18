import { TextMask, Word } from "@animation";
import { paragraph } from "@constants";

export default function About() {
	const phrases = ["About"];
	return (
		<section className="w-full  my-[100rem]">
			<h1 className="text-[#202020] uppercase mb-[20rem] tracking-[5rem] text-[100rem] font-medium">
				<TextMask>{phrases}</TextMask>
			</h1>
			<div className="w-full">
				<Word paragraph={paragraph} />
			</div>
		</section>
	);
}
