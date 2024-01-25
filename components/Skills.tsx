import Image from "next/image";
import { Marquee } from "@animation";
import { skillsData } from "@constants";

export default function Skills() {
	return (
		<section className="my-[100rem]">
			<div className="w-full flex flex-col gap-y-[50px]">
				<Marquee baseVelocity={-1}>
					<div className="flex m-0 gap-x-[40px] items-center">
						{skillsData.map((item) => (
							<div
								className="w-[200px] h-[100]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={100}
									className="w-[200px] h-[100px]"
								/>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={1}>
					<div className="flex m-0 gap-x-[40px] items-center">
						{skillsData.map((item) => (
							<div
								className="w-[200px] h-[100]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={100}
									className="w-[200px] h-[100px]"
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
}
