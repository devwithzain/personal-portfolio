import Image from "next/image";
import { Marquee } from "@animation";
import { testimonials } from "@constants";

export default function Testimonials() {
	return (
		<section className="my-[150rem]">
			<div className="w-full flex flex-col gap-[10rem]">
				<Marquee baseVelocity={-0.1}>
					<div className="flex m-0 gap-x-[20rem] items-center mr-[20rem]">
						{[...testimonials, ...testimonials, ...testimonials].map((item) => (
							<div
								className="flex flex-col gap-[20rem]"
								key={item.id}>
								<div className="min-w-[400rem] min-h-[250rem] py-[20rem] px-[40rem] shadow border border-[#222222]/10 rounded-[30rem] bg-white flex flex-col gap-[20rem] justify-between">
									<p className="text-[#010D3E] font-dmSans text-[20rem] font-normal leading-tight">
										{item.text}
									</p>
									<div className="flex items-center gap-[20rem]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
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
					<div className="flex m-0 gap-x-[20rem] items-center mr-[20rem]">
						{[...testimonials, ...testimonials, ...testimonials].map((item) => (
							<div
								className="flex flex-col gap-[20rem]"
								key={item.id}>
								<div className="min-w-[400rem] min-h-[250rem] py-[20rem] px-[40rem] shadow border border-[#222222]/10 rounded-[30rem] bg-white flex flex-col gap-[20rem] justify-between">
									<p className="text-[#010D3E] font-dmSans text-[20rem] font-normal leading-tight">
										{item.text}
									</p>
									<div className="flex items-center gap-[20rem]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
												{item.username}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={-0.1}>
					<div className="flex m-0 gap-x-[20rem] items-center mr-[20rem]">
						{[...testimonials, ...testimonials, ...testimonials].map((item) => (
							<div
								className="flex flex-col gap-[20rem]"
								key={item.id}>
								<div className="min-w-[400rem] min-h-[250rem] py-[20rem] px-[40rem] shadow border border-[#222222]/10 rounded-[30rem] bg-white flex flex-col gap-[20rem] justify-between">
									<p className="text-[#010D3E] font-dmSans text-[20rem] font-normal leading-tight">
										{item.text}
									</p>
									<div className="flex items-center gap-[20rem]">
										<Image
											src={item.src}
											alt="asd"
											width={50}
											height={50}
										/>
										<div className="flex flex-col">
											<h1 className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
												{item.name}
											</h1>
											<p className="text-[#010D3E] font-dmSans text-[16rem] font-normal leading-tight">
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
