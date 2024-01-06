import { MotionValue } from "framer-motion";
import { StaticImageData } from "next/image";

export type TParagraphProps = {
    paragraph: string;
};

export type TWordProps = {
    children: string;
    progress: MotionValue<number>;
    range: number[];
};

export type TperspectiveTextProps = {
    children: React.ReactNode;
};


export type TmodalProps = {
    modal: {
        active: boolean;
        index: number;
    };
    projects: {
        img: StaticImageData;
        color: string;
    }[];
};

export type TprojectProps = {
    title: string,
    index: number,
    setModal: (modal: { active: boolean; index: number; }) => void;
};

export type TlogoMarqueeProps = {
    children: React.ReactNode;
    baseVelocity: number;
};