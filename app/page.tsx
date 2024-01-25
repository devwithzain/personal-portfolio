"use client";
import { Home } from "@components";
import { PreLoad } from "@animation";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		(() => {
			setTimeout(() => {
				setIsLoading(false);
				document.body.style.cursor = "default";
				window.scrollTo(0, 0);
			}, 3000);
		})();
	}, []);
	return (
		<>
			<AnimatePresence mode="wait">{isLoading && <PreLoad />}</AnimatePresence>
			{isLoading === false ? <Home /> : ""}
		</>
	);
}
