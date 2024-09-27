"use client";

import React, { MouseEvent } from "react";
import {
	SiBun,
	SiNextdotjs,
	SiPrisma,
	SiReacthookform,
	SiRedux,
	SiTrpc,
	SiTypescript,
	SiZod,
} from "react-icons/si";
import { useAnimate } from "framer-motion";
import { IconType } from "react-icons";
import {
	FaCss3Alt,
	FaDocker,
	FaHtml5,
	FaNodeJs,
	FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaFigma } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";

export default function Skill() {
	return (
		<div className="px-[16rem] py-[48rem]">
			<div className="mx-auto max-w-[1280rem]">
				<ClipPathLinks />
			</div>
		</div>
	);
}

const ClipPathLinks = () => {
	return (
		<>
			<div className="w-full border-t border-x border-black p-[10rem]">
				<button className="px-[8rem] py-[4rem] border-[2rem] border-black text-[20rem] font-semibold uppercase rounded-full">
					frontend
				</button>
			</div>
			<div className="divide-y divide-neutral-900 border border-neutral-900">
				<div className="grid grid-cols-2 divide-x divide-neutral-900">
					<LinkBox
						Icon={FaHtml5}
						href="#"
					/>
					<LinkBox
						Icon={FaCss3Alt}
						href="#"
					/>
				</div>
				<div className="grid grid-cols-4 divide-x divide-neutral-900">
					<LinkBox
						Icon={RiTailwindCssFill}
						href="#"
					/>
					<LinkBox
						Icon={FaFigma}
						href="#"
					/>
					<LinkBox
						Icon={SiTypescript}
						href="#"
					/>
					<LinkBox
						Icon={SiNextdotjs}
						href="#"
					/>
				</div>
				<div className="grid grid-cols-3 divide-x divide-neutral-900">
					<LinkBox
						Icon={SiZod}
						href="#"
					/>
					<LinkBox
						Icon={FaReact}
						href="#"
					/>
					<LinkBox
						Icon={SiReacthookform}
						href="#"
					/>
				</div>
			</div>
			{/* asd */}
			<div className="w-full border-x border-black p-[10rem]">
				<button className="px-[8rem] py-[4rem] border-[2rem] border-black text-[20rem] font-semibold uppercase rounded-full">
					backend
				</button>
			</div>
			<div className="divide-y divide-neutral-900 border border-neutral-900">
				<div className="grid grid-cols-3 divide-x divide-neutral-900">
					<LinkBox
						Icon={FaDocker}
						href="#"
					/>
					<LinkBox
						Icon={FaPython}
						href="#"
					/>
					<LinkBox
						Icon={SiBun}
						href="#"
					/>
				</div>
				<div className="grid grid-cols-4 divide-x divide-neutral-900">
					<LinkBox
						Icon={SiTrpc}
						href="#"
					/>
					<LinkBox
						Icon={SiPrisma}
						href="#"
					/>
					<LinkBox
						Icon={SiRedux}
						href="#"
					/>
					<LinkBox
						Icon={BiLogoPostgresql}
						href="#"
					/>
				</div>
				<div className="grid grid-cols-2 divide-x divide-neutral-900">
					<LinkBox
						Icon={DiMongodb}
						href="#"
					/>
					<LinkBox
						Icon={FaNodeJs}
						href="#"
					/>
				</div>
			</div>
		</>
	);
};

const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
	[key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
	left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
	left: [NO_CLIP, TOP_RIGHT_CLIP],
	bottom: [NO_CLIP, TOP_RIGHT_CLIP],
	top: [NO_CLIP, TOP_RIGHT_CLIP],
	right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href }: { Icon: IconType; href: string }) => {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e: MouseEvent) => {
		const box = (e.target as HTMLElement).getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: "left" as Side,
		};
		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: "right" as Side,
		};
		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: "top" as Side,
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: "bottom" as Side,
		};

		const sortedProximity = [
			proximityToLeft,
			proximityToRight,
			proximityToTop,
			proximityToBottom,
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};

	const handleMouseEnter = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side],
		});
	};

	const handleMouseLeave = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side],
		});
	};

	return (
		<a
			href={href}
			onMouseEnter={(e) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e) => {
				handleMouseLeave(e);
			}}
			className="relative grid h-[130rem] w-full place-content-center ">
			<Icon className="text-[60rem]" />

			<div
				ref={scope}
				style={{
					clipPath: BOTTOM_RIGHT_CLIP,
				}}
				className="absolute inset-0 grid place-content-center bg-neutral-900 text-white">
				<Icon className="text-[60rem]" />
			</div>
		</a>
	);
};
