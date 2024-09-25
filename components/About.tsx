import { paragraph } from "@constants";
import { TextMask, Word } from "@animation";

export default function About() {
	const phrases = ["About"];
	return (
		<section className="w-full my-[100rem]">
			<h1 className="text-[#202020] uppercase leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-semibold">
				<TextMask>{phrases}</TextMask>
			</h1>
			<div className="w-full">
				<Word paragraph={paragraph} />
			</div>
		</section>
	);
}
