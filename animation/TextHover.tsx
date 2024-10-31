import { TtextHoverProps } from "@types";

export default function TextHover({
	titile1,
	subTitle1,
	titile2,
	subTitle2,
}: TtextHoverProps) {
	return (
		<div className="group flex gap-x-[20px] overflow-hidden cursor-pointer transition-all ease-in-out duration-200">
			<div className="relative transition-all  ease-in-out duration-500">
				<div className="">
					<h1 className="text-[40px] translate-y-[-100%] group-hover:translate-y-[0%] absolute  left-0 transition-all ease-in-out duration-500 flex">
						<div className="translate-y-[-100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
							{titile1}
						</div>
					</h1>
					<h1 className="text-[40px] relative flex gap-x-[7px] transition-all ease-in-out duration-500">
						<div className="translate-y-[0%] group-hover:translate-y-[110%] transition-all ease-in-out duration-500">
							{titile1}
						</div>
						<div className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500">
							{subTitle1}
						</div>
					</h1>
					<h1 className="flex gap-x-[7px] text-[40px] absolute translate-y-[100%] group-hover:translate-y-[-100%] right-0 transition-all ease-in-out duration-500">
						<div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
							{subTitle1}
						</div>
					</h1>
				</div>
			</div>
			<div className="relative transition-all  ease-in-out duration-500">
				<div className="">
					<h1 className="text-[40px] translate-y-[-100%] group-hover:translate-y-[0%] absolute  left-0 transition-all ease-in-out duration-500 flex">
						<div className="translate-y-[-100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
							{titile2}
						</div>
					</h1>
					<h1 className="text-[40px] relative flex gap-x-[7px] transition-all ease-in-out duration-500">
						<div className="translate-y-[0%] group-hover:translate-y-[110%] transition-all ease-in-out duration-500">
							{titile2}
						</div>
						<div className="translate-y-[0%] group-hover:translate-y-[-100%] transition-all ease-in-out duration-500">
							{subTitle2}
						</div>
					</h1>
					<h1 className="flex gap-x-[7px] text-[40px] absolute translate-y-[100%] group-hover:translate-y-[-100%] right-0 transition-all ease-in-out duration-500">
						<div className="translate-y-[100%] group-hover:translate-y-[0%] transition-all ease-in-out duration-500">
							{subTitle2}
						</div>
					</h1>
				</div>
			</div>
		</div>
	);
}
