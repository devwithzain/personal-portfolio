import { TperspectiveTextMenuProps } from "@/types";

export default function PerspectiveText({ label }: TperspectiveTextMenuProps) {
	return (
		<div className="perspectiveText">
			<p className="leading-tight tracking-tight text-white">{label}</p>
			<p className="leading-tight tracking-tight text-white">{label}</p>
		</div>
	);
}
