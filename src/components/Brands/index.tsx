import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import EmblaCarousel from "../Embla/EmblaCarousel";
import '../../components/Embla/embla.css'

const OPTIONS = { loop: true }

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center rounded-sm px-8 py-8 sm:px-10 md:px-[10px] md:pb-[10px] md:pt-[0px] xl:p-[10px] 2xl:px-[20px] 2xl:pb-[20px]">
            <EmblaCarousel options={OPTIONS} data={brandsData}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const {  image, name } = brand;

  return (
    <div className="">
      <a
        // href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} width={300} height={200}/>
        {/* <Image src={image} alt={name} fill className="block dark:hidden" /> */}
      </a>
    </div>
  );
};
