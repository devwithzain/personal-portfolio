"use client";
import gsap from "gsap";
import Image from "next/image";
import { hero } from "@public";
import { useEffect } from "react";
import { Navbar } from "@/components";

export default function Hero() {
	useEffect(() => {
		const textWrapper = document.querySelector(".ml12");
		if (textWrapper && textWrapper.textContent) {
			textWrapper.innerHTML = textWrapper.textContent.replace(
				/\S/g,
				"<span class='letter'>$&</span>",
			);
		}

		gsap.timeline().from(".ml12 .letter", {
			opacity: 0,
			stagger: {
				amount: 0.5,
				grid: "auto",
				from: "random",
			},
			ease: "power2.out",
		});

		gsap.to("nav", {
			top: 0,
			ease: "power3.inOut",
			duration: 1,
		});

		gsap.to(".hero-img", {
			duration: 1,
			ease: "power4.inOut",
			clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
		});

		gsap.to(".header .col p", {
			left: 0,
			opacity: 1,
			duration: 1,
			ease: "power2.inOut",
		});
	}, []);
	return (
		<section className="w-full h-screen relative py-[20rem]">
			<Navbar />
			<div className="w-full h-full flex flex-col gap-[30rem] pt-[8vh] overflow-hidden">
				<div className="header w-full flex gap-[30rem] justify-between">
					<div className="col flex-1">
						<h1 className="ml12 text-[80rem] font-medium leading-none tracking-tighter uppercase inline-block">
							The game web design <br /> deserves the most.
						</h1>
					</div>
					<div className="col flex flex-1 flex-col gap-[10rem]">
						<p className="relative opacity-0 text-[18rem] inline-block leading-normal tracking-wide">
							As a creative web developer, I blend technical expertise with
							innovative design to craft engaging digital experiences. With a
							passion for problem-solving, I strive to build user-friendly
							interfaces that not only look great but also function seamlessly.
							My journey in web development has equipped me with a diverse skill
							set, including proficiency in modern frameworks, responsive
							design, and interactive animations.
						</p>
						<p className="relative opacity-0 text-[18rem] inline-block leading-normal tracking-wide">
							Join me as I continue to explore the endless possibilities of the
							web, turning ideas into reality through creativity and code.
						</p>
					</div>
				</div>
				<div className="hero-img w-full">
					<Image
						src={hero}
						alt="heroImg"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
