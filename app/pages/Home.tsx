"use client";

import { AnimatePresence, motion } from "framer-motion";
import { sectionsContent } from "../data/sections-content";
import { useTypingEffect } from "../hooks/useTypingEffect";
export default function Home({ slideDirection, variants }: {
    slideDirection: any;
    variants: any;
}) {
    const typedName = useTypingEffect("Alli Ibrahim A.", 90);

    return (
        <>
            <motion.section
                key="home"
                custom={slideDirection}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-center py-20"
            >
                {/* <h1 className="text-5xl font-bold mb-4 text-green-500">{sectionsContent.home.title}</h1> */}
                <h1 className="text-5xl font-bold mb-4 text-green-500">
                    {typedName}
                    {/* <span className="animate-pulse">▋</span> */}
                    <span className="cursor">▋</span>
                </h1>
                <p className="text-xl mb-6 text-green-300">{sectionsContent.home.subtitle}!!!!@@@</p>
                <p className="max-w-xl mx-auto text-green-100">{sectionsContent.home.content}</p>
            </motion.section>
        </>
    )
}
