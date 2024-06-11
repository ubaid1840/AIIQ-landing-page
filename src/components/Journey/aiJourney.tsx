'use client'
import { Image } from "@chakra-ui/react";
import SectionTitle from "../Common/SectionTitle";
import { SectionWrapper } from "../HigherOrderComponents";
import { textVariant } from "@/app/utils/motion";
import { motion } from 'framer-motion'

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current" style={{ color: 'white' }}>
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AiJourney = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex items-center justify-center rounded-md bg-opacity-10 text-primary" style={{ backgroundColor: 'teal', padding: '8px' }}>
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28" style={{ backgroundColor: 'black' }} >
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap ">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div variants={textVariant()}>
                <SectionTitle
                  title="Navigating Your Business's AI Transformation Journey."
                  paragraph="Embark on a guided tour through the process of integrating AI into your business operations, ensuring a seamless and prosperous transition."
                  mb="44px"
                />
              </motion.div>
              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <motion.div variants={textVariant(0.5)}>
                      <List text="Exploratory Analysis and Evaluation" />
                    </motion.div>
                    <motion.div variants={textVariant(1)}>
                      <List text="Strategic Blueprint Development" />
                    </motion.div>
                    <motion.div variants={textVariant(1.5)}>
                      <List text="Deployment and Fusion" />
                    </motion.div>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <motion.div variants={textVariant(2)}>
                      <List text="Skill Building and Enablement" />
                    </motion.div>
                    <motion.div variants={textVariant(2.5)}>
                      <List text="Continuous Enhancement and Fine-tuning" />
                    </motion.div>
                    <motion.div variants={textVariant(3)}>
                      <List text="Performance Oversight and Evolution" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  width={'100%'}
                  src="/images/journey.jpg"
                  alt="about-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(AiJourney, "");
