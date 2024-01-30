"use client";
import { useState } from "react";
import Modal from "./modal/Modal";
import { project } from "@constants";
import Project from "./project/Project";
export default function Hover() {
	const [modal, setModal] = useState({ active: false, index: 0 });
	return (
		<main className="flex items-center justify-center">
			<div className="w-full flex flex-col items-center justify-center">
				{project.map((project, index) => {
					return (
						<Project
							index={index}
							title={project.title}
							setModal={setModal}
							key={index}
						/>
					);
				})}
			</div>
			<Modal
				modal={modal}
				projects={project}
			/>
		</main>
	);
}
