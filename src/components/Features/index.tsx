"use client"
import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, textVariant, } from "@/app/utils/motion";
import { SectionWrapper } from "../HigherOrderComponents";


type ServiceCardProps = {
	index: number;
	title: string;
	icon: JSX.Element;
	paragraph: string;
};

const ServiceCard = ({ index, title, icon, paragraph }: ServiceCardProps) => {
	return (
		<>
			<Tilt
				options={{ max: 25, scale: 1, speed: 450 }}
				className="xs:w-[300px] w-full"
			>
				<motion.div
					variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
					className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
				>
					<div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col" style={{ backgroundColor: 'black' }}>
						{icon}
						<h3 className="text-white text-[20px] font-bold text-center mb-5 mt-5" style={{ lineHeight: 'normal' }}>
							{title}
						</h3>
						<p className="text-center" style={{ fontSize: '14px', color: 'rgb(120 130 147)' }}>
							{paragraph}
						</p>
					</div>
				</motion.div>
			</Tilt>
		</>
	);
};

const Features = () => {
	return (
		<>
			<section id="features" className="py-10 md:py-10 lg:py-10">

				<div className="container">
					<motion.div variants={textVariant()}>
						<SectionTitle
							title="Main Features"
							paragraph="Our AI Tools Are Designed To Cater To Your Specific Business Needs."
							center
						/>
					</motion.div>
					<div className="mt-20 flex flex-wrap gap-20" style={{ justifyContent: 'center' }}>
						{featuresData.map((service, index) => (
							<ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} paragraph={service.paragraph} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default SectionWrapper(Features, "feature");
