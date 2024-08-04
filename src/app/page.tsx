import { Button } from "@/components/ui/button";
import Navbar from "@/components/fixed/navbar";
import HeroSection from "./components/hero-section";
import Details from "./components/details-section";
import Features from "./components/features-section";
import Footer from "../components/fixed/footer";
import { HeroScroll } from "./components/hero-scroll";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HeroScroll />
        <Details />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
