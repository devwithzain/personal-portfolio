import Image from "next/image";
import { Marquee } from "@animation";
import { skillsData } from "@constants";

export default function Skills() {
	return (
		<section className="my-[150rem]">
			<div className="w-full flex flex-col gap-[50rem]">
				<Marquee baseVelocity={-1}>
					<div className="flex m-0 gap-x-[40rem] items-center mr-[20rem]">
						{skillsData.map((item) => (
							<div
								className="w-[150rem] h-[100rem]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={100}
									className="w-[150rem] h-[100rem]"
								/>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={1}>
					<div className="flex m-0 gap-x-[40rem] items-center mr-[20rem]">
						{skillsData.map((item) => (
							<div
								className="w-[150rem] h-[100rem]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={100}
									className="w-[150rem] h-[100rem]"
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
}
