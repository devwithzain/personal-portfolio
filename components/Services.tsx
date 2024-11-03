"use client";
import { gsap } from "gsap";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { servicesItem } from "@constants";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
	const cardsRef = useRef<HTMLDivElement[]>([]);
	const stickyHeaderRef = useRef<HTMLDivElement>(null);
	const stickySectionRef = useRef<HTMLDivElement>(null);

	const stickyHeight = window.innerHeight * 5;

	const transforms = [
		[
			[10, 50, -10, 10],
			[20, -10, -45, 10],
		],
		[
			[0, 47.5, -10, 15],
			[-25, 15, -45, 30],
		],
		[
			[0, 52.5, -10, 5],
			[15, -5, -40, 60],
		],
		[
			[10, 50, -10, 10],
			[20, -10, -45, 90],
		],
		[
			[0, 55, -15, 30],
			[25, -15, 60, 120],
		],
	];

	useEffect(() => {
		const lenis = new Lenis();
		lenis.on("scroll", ScrollTrigger.update);
		gsap.ticker.add((time) => lenis.raf(time * 1000));
		gsap.ticker.lagSmoothing(0);

		ScrollTrigger.create({
			trigger: stickySectionRef.current,
			start: "top top",
			end: `+=${stickyHeight}px`,
			pin: true,
			pinSpacing: true,
			onUpdate: (self) => {
				const progress = self.progress;

				if (stickyHeaderRef.current) {
					const maxTranslate =
						stickyHeaderRef.current.offsetWidth - window.innerWidth;
					const translateX = -progress * maxTranslate;
					gsap.set(stickyHeaderRef.current, { x: translateX });
				}

				cardsRef.current.forEach((card, index) => {
					const delay = index * 0.1125;
					const cardProgress = Math.max(0, Math.min((progress - delay) * 2, 1));

					if (cardProgress > 0) {
						const cardStartX = 25;
						const cardEndX = -650;
						const yPos = transforms[index]?.[0] || [0];
						const rotations = transforms[index]?.[1] || [0];

						const cardX = gsap.utils.interpolate(
							cardStartX,
							cardEndX,
							cardProgress,
						);
						const yProgress = cardProgress * 3;
						const yIndex = Math.min(Math.floor(yProgress), yPos.length - 2);
						const yInterpolation = yProgress - yIndex;
						const cardY = gsap.utils.interpolate(
							yPos[yIndex],
							yPos[yIndex + 1],
							yInterpolation,
						);
						const cardRotation = gsap.utils.interpolate(
							rotations[yIndex],
							rotations[yIndex + 1],
							yInterpolation,
						);

						gsap.set(card, {
							xPercent: cardX,
							yPercent: cardY,
							rotation: cardRotation,
							opacity: 1,
						});
					} else {
						gsap.set(card, { opacity: 0 });
					}
				});
			},
		});

		return () => {
			ScrollTrigger.killAll();
		};
	}, []);

	return (
		<div
			className="relative bg-[#d6d5d5] w-full h-screen overflow-hidden"
			id="services"
			ref={stickySectionRef}>
			<div
				className="absolute top-0 left-0 w-[250vw] h-full flex items-center justify-center will-change-transform"
				ref={stickyHeaderRef}>
				<h1 className="text-black text-[30vw] tracking-tight leading-tight font-semibold m-0">
					services i provide
				</h1>
			</div>
			{servicesItem.map((card, index) => (
				<div
					key={card.id}
					className="absolute left-full w-[325px] bg-black rounded-[10px] p-3 will-change-transform z-20"
					ref={(el) => (cardsRef.current[index] = el!)}>
					<div className="w-full h-[200px] rounded-lg overflow-hidden">
						<Image
							src={card.img}
							alt=""
							width={500}
							height={500}
						/>
					</div>
					<div className="w-full h-[300px] flex flex-col justify-between text-white p-2">
						<div>
							<h2 className="text-[42px] tracking-tighter leading-tight font-medium">
								{card.title}
							</h2>
						</div>
						<div>
							<p className="text-[20px] leading-tight">{card.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
