import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Clients from "@/components/Clients";
import AiJourney from "@/components/Journey/aiJourney";


export const metadata: Metadata = {
  title: "AIIQ CHATBOT",
  description: "Admin Panel landing page for AIIQ chatbot",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AiJourney />
     
      <Features />
      <Clients />
    </>
  );
}
