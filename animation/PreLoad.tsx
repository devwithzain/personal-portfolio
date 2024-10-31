"use client";
import gsap from "gsap";
import Image from "next/image";
import { frame } from "@/public";
import { useEffect } from "react";

export default function Loader() {
	useEffect(() => {
		gsap.to(".bar", {
			delay: 1,
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			duration: 1,
			ease: "power4.inOut",
			stagger: {
				amount: 0.5,
				from: "start",
			},
		});

		gsap.to(".finder-container img", {
			scale: 1,
			delay: 2,
		});

		gsap.to(".finder-container img", {
			scale: 0,
			delay: 5,
			duration: 0.5,
			stagger: 0.075,
		});

		gsap.to(".bar", {
			delay: 5,
			clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
			duration: 1,
			ease: "power4.inOut",
			stagger: {
				amount: 0.5,
				from: "end",
			},
		});

		gsap.to(".marquee", {
			delay: 0,
			left: "0vw",
			duration: 4,
			ease: "power4.inOut",
			onComplete: () => {
				gsap.to(".marquee", {
					opacity: 0,
					repeat: 4,
					yoyo: true,
					duration: 0.1,
					onComplete: () => {
						gsap.to(".marquee", {
							opacity: 1,
						});
					},
				});
			},
		});

		gsap.to(".marquee", {
			delay: 4,
			left: "-100vw",
			duration: 4,
			ease: "power4.inOut",
		});
	}, []);

	return (
		<div className="fixed w-full h-full flex flex-col top-0 left-0 z-50">
			<div className="finder-container w-[80%] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
				{[frame, frame, frame, frame, frame].map((frame, index) => (
					<Image
						key={index}
						src={frame}
						alt="frame"
						className="w-full h-full object-cover absolute scale-0"
					/>
				))}
			</div>
			<div className="bar flex-1 w-full bg-[#d6d5d5] py-[24px] mt-[-1px]">
				<div className="marquee relative left-[100vw] w-[300vw] flex gap-[40px] text-[18px] uppercase">
					{Array(20)
						.fill("zain")
						.map((text, index) => (
							<p
								key={index}
								className="flex items-center gap-[10px] text-[18px] font-medium whitespace-nowrap">
								<span className="relative pr-[4px] text-[36px]">■</span>
								{text}
							</p>
						))}
				</div>
			</div>
			<div className="bar flex-1 w-full bg-[#d6d5d5] py-[24px] mt-[-1px]" />
			<div className="bar flex-1 w-full bg-[#d6d5d5] py-[24px] mt-[-1px]" />
			<div className="bar flex-1 w-full bg-[#d6d5d5] py-[24px] mt-[-1px]" />
			<div className="bar flex-1 w-full bg-[#d6d5d5] py-[24px] mt-[-1px] flex flex-col justify-end">
				<div className="marquee relative left-[100vw] w-[300vw] flex gap-[40px] text-[18px] uppercase">
					{Array(20)
						.fill("zain")
						.map((text, index) => (
							<p
								key={index}
								className="flex items-center gap-[10px] text-[18px] font-medium whitespace-nowrap">
								<span className="relative pr-[4px] text-[36px]">■</span>
								{text}
							</p>
						))}
				</div>
			</div>
		</div>
	);
}
