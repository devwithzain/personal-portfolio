import { MotionValue } from "framer-motion";

export type TParagraphProps = {
    paragraph: string;
};

export type TWordProps = {
    children: string;
    progress: MotionValue<number>;
    range: number[];
};