import Contact from "@/components/Contact";
import StarsCanvas from "@/components/Canvas/Stars";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This is Contact Page for AIIQ",
};

const ContactPage = () => {
  return (
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
    </div>
  );
};

export default ContactPage;
