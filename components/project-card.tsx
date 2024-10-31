"use client";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

export default function ProjectCard({
	item,
	index,
	setModal,
}: {
	item: any;
	index: number;
	setModal: Dispatch<
		SetStateAction<{
			active: boolean;
			index: number;
		}>
	>;
}) {
	return (
		<div
			className="relative w-full h-full"
			onMouseEnter={() => {
				setModal({ active: true, index });
			}}
			onMouseLeave={() => {
				setModal({ active: false, index });
			}}>
			<Link
				href={item.href}
				target="_blank"
				className="rounded-[10px] overflow-hidden block">
				<Image
					src={item.img}
					alt={`${item.title}Img`}
					className="object-cover rounded-[10px] h-full w-full"
				/>
			</Link>
		</div>
	);
}
