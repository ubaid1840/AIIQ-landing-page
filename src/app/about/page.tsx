import Hero from "@/components/About/hero";
import { Metadata } from "next";
import Partners from "@/components/Partners";
import Timeline from "@/components/About/verticalAbout";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is About Page for AIIQ",
};

const AboutPage = () => {
  return (
    <>
      <Hero />
      <Timeline />
      <Partners />
    </>
  );
};

export default AboutPage;
