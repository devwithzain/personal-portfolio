import Image from "next/image";
import { testimonials } from "@constants";
import { Marquee, TextMask } from "@animation";

export default function Testimonials() {
	const phares = ["what our"];
	const phares1 = ["client says"];
	return (
		<section className="pt-[80rem] bg-[#e1e1e1] relative z-[60]">
			<div className="w-full flex justify-start padding-x pb-[40rem]">
				<h1 className="text-[#202020] uppercase leading-none sm:text-[80rem] md:text-[100rem] text-[130rem] font-bold overflow-hidden">
					<TextMask>{phares}</TextMask>
					<TextMask>{phares1}</TextMask>
				</h1>
			</div>
			<div className="w-full flex flex-col gap-[20rem] bg-[#e1e1e1] relative z-[60]">
				<Marquee baseVelocity={-0.2}>
					<div className="flex m-0 gap-x-[20rem] items-center mr-[20rem] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(0, 4).map((item) => (
							<div
								className="flex flex-col gap-[20rem]"
								key={item.id}>
								<div className="min-w-[500rem] min-h-[400rem] py-[20rem] px-[40rem] border border-[#222222]/10 rounded-[10rem] bg-[#d6d5d5] flex flex-col gap-[20rem] justify-between">
									<p className="text-black text-[30rem] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20rem]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18rem] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16rem] font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={0.1}>
					<div className="flex m-0 gap-x-[20rem] items-center mr-[20rem] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(5).map((item) => (
							<div
								className="flex flex-col gap-[20rem]"
								key={item.id}>
								<div className="min-w-[500rem] min-h-[400rem] py-[20rem] px-[40rem] border border-[#222222]/10 rounded-[10rem] bg-[#d6d5d5] flex flex-col gap-[20rem] justify-between">
									<p className="text-black text-[30rem] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20rem]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18rem] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16rem] font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
}
