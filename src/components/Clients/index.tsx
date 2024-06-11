"use client";
import SectionTitle from "../Common/SectionTitle";
import Brands from "../Brands";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../HigherOrderComponents";


const Clients = () => {

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" style={{ backgroundColor: 'black' }}>
      <div className="container">
      <motion.div variants={textVariant()}>
        <SectionTitle
          title="Our Clients"
          paragraph="We utilize AI to transform businesses, catering to a diverse range of clients."
          center
          mb="10px"
        />
        </motion.div>
      </div>
      <Brands />     
    </section>
  );
};

export default SectionWrapper(Clients, '') ;
