"use client";
import { staggerContainer } from "@/app/utils/motion";
import { motion } from "framer-motion";
import type { FC } from "react";

const SectionWrapper = (Component: FC, idName: string) => {
	return function HOC() {
		return (
			<motion.div
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				exit="hidden"
				viewport={{ once: true, amount: 0.25 }}
				className="padding mx-auto relative z-0"
				style={{padding:'0px'}}
			>
			
				<Component />
			</motion.div>
		);
	};
};

export default SectionWrapper;
