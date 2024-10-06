export const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
        y: "0",
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.68, 1],
            delay: 0.5,
        },
    }),
};

export const navVarients = {
    initial: { opacity: 0, y: "-100%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
    vissible: { opacity: 1, y: "0%", transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] } },
};

export const heroVarients = {
    initial: { y: "100%", opacity: 0 },
    vissible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1 } },
};

export const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
        scale: 1,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        scale: 0,
        x: "-50%",
        y: "-50%",
        transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
};

export const menu = {
    open: {
        width: "auto",
        height: "auto",
        top: "-10px",
        right: "-10px",
        transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
        width: "100px",
        height: "40px",
        top: "0px",
        right: "0px",
        transition: {
            duration: 0.75,
            delay: 0.35,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
        },
    },
};

export const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
        translateY: 80,
        translateX: -20,
    },
    enter: (i: number) => ({
        opacity: 1,
        rotateX: 0,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 0.65,
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1],
            opacity: { duration: 0.35 }
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    }
};

export const slideIn = {
    initial: {
        opacity: 0,
        y: 20
    },
    enter: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.75 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: { duration: 0.5, type: "tween", ease: "easeInOut" }
    }
};