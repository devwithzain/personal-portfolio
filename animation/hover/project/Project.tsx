"use client";

import { TprojectProps } from "@types";

export default function Project({ index, title, setModal }: TprojectProps) {
	return (
		<div
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}
			className="flex w-full justify-between items-center py-[50rem] rem-[100rem] cursor-pointer transition-all duration-[0.2s] hover:opacity-[0.5] group">
			<h2 className="text-[60rem] m-0 font-medium transition-all duration-[0.4s] group-hover:translate-x-[-10rem]">
				{title}
			</h2>
			<p className="font-normal text-[25rem] transition-all duration-[0.4s] group-hover:translate-x-[10rem]">
				Design & Development
			</p>
		</div>
	);
}
