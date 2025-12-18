import { easeInOut, Variants } from "framer-motion";

export const variants: Variants = {
    hidden: (direction: "left" | "right") => ({
        opacity: 0,
        x: direction === "left" ? -100 : 100,
    }),
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: easeInOut },
    },
    exit: (direction: "left" | "right") => ({
        opacity: 0,
        x: direction === "left" ? 100 : -100,
        transition: { duration: 0.5, ease: easeInOut },
    }),
};