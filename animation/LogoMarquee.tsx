"use client";
import {
	motion,
	useMotionValue,
	useAnimationFrame,
	wrap,
	useTransform,
} from "framer-motion";
import { useRef } from "react";
import { TlogoMarqueeProps } from "@types";

export default function LogoMarquee({
	children,
	baseVelocity = 100,
}: TlogoMarqueeProps) {
	const baseX = useMotionValue(0);
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		baseX.set(baseX.get() + moveBy);
	});

	return (
		<div className="overflow-hidden flex flex-wrap">
			<motion.div
				className="flex flex-nowrap"
				style={{ x }}>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
				<span>{children} </span>
			</motion.div>
		</div>
	);
}
