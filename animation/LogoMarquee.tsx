"use client";
import {
	motion,
	useMotionValue,
	useAnimationFrame,
	wrap,
	useTransform,
	useScroll,
	useVelocity,
	useSpring,
} from "framer-motion";
import { useRef } from "react";
import { TlogoMarqueeProps } from "@types";

export default function LogoMarquee({
	children,
	baseVelocity = 100,
}: TlogoMarqueeProps) {
	const baseX = useMotionValue(0);
	const { scrollY } = useScroll();
	const scrollVelocity = useVelocity(scrollY);
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	});
	const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
		clamp: false,
	});
	const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

	const directionFactor = useRef<number>(1);
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

		if (velocityFactor.get() < 0) {
			directionFactor.current = -1;
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1;
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get();

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
