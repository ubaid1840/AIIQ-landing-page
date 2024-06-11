import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./PartnersData";
import EmblaCarousel from "../Embla/EmblaCarousel";
import '../../components/Embla/embla.css'
import PartnersData from "./PartnersData";
import SectionTitle from "../Common/SectionTitle";
import { Box } from "@chakra-ui/react";
import Link from "next/link";

const OPTIONS = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Partners = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28" style={{ backgroundColor: 'black' }}>
    <div className="container">
      <SectionTitle
        title="Our Partners"
        paragraph="Together, We’re Crafting the Future, One Step at a Time."
        center
        mb="80px"
      />
    </div>

    <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[10px] md:pb-[10px] md:pt-[0px] xl:p-[10px] 2xl:px-[20px] 2xl:pb-[20px]" style={{backgroundColor:'black'}}>
            <EmblaCarousel options={OPTIONS} data={PartnersData}/>
            </div>
          </div>
        </div>
      </div>
  </section>

  );
};

export default Partners;