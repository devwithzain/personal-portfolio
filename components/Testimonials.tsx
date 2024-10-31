import Image from "next/image";
import { testimonials } from "@constants";
import { Marquee, TextMask } from "@animation";

export default function Testimonials() {
	const phares = ["what my"];
	const phares1 = ["client says"];
	return (
		<section className="py-[80px] bg-[#e1e1e1] relative z-[60]">
			<div className="w-full flex justify-start padding-x pb-[40px]">
				<h1 className="text-[#202020] uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold overflow-hidden">
					<TextMask>{phares}</TextMask>
					<TextMask>{phares1}</TextMask>
				</h1>
			</div>
			<div className="w-full flex flex-col gap-[20px] bg-[#e1e1e1] relative z-[60]">
				<Marquee baseVelocity={-0.2}>
					<div className="flex m-0 gap-x-[20px] items-center mr-[20px] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(0, 4).map((item) => (
							<div
								className="flex flex-col gap-[20px]"
								key={item.id}>
								<div className="min-w-[500px] min-h-[400px] py-[20px] px-[40px] border border-[#222222]/10 rounded-[10px] bg-[#d6d5d5] flex flex-col gap-[20px] justify-between">
									<p className="text-black text-[30px] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20px]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18px] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16px] font-normal leading-tight">
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
					<div className="flex m-0 gap-x-[20px] items-center mr-[20px] bg-[#e1e1e1] relative z-[60]">
						{testimonials.slice(5).map((item) => (
							<div
								className="flex flex-col gap-[20px]"
								key={item.id}>
								<div className="min-w-[500px] min-h-[400px] py-[20px] px-[40px] border border-[#222222]/10 rounded-[10px] bg-[#d6d5d5] flex flex-col gap-[20px] justify-between">
									<p className="text-black text-[30px] font-medium leading-tight tracking-wide">
										{item.text}
									</p>
									<div className="flex items-center gap-[20px]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
											className="rounded-full h-[60px] w-[60px]"
										/>
										<div className="flex flex-col">
											<h1 className="text-black text-[18px] font-medium leading-tight">
												{item.name}
											</h1>
											<p className="text-black text-[16px] font-normal leading-tight">
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
