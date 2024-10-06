"use client";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ item }: { item: any }) {
	return (
		<div className="relative w-full group h-full">
			<Link
				href={item.href}
				className="rounded-[10rem] overflow-hidden hover:scale-[0.95] transition cursor-pointer transform duration-[1s] ease-[.4,0,.2,1] block">
				<Image
					src={item.img}
					alt={`${item.title}Img`}
					className="object-cover rounded-[10rem] group-hover:scale-[1.09]  transform duration-[1s] ease-[.4,0,.2,1] h-full w-full"
				/>
			</Link>
		</div>
	);
}
