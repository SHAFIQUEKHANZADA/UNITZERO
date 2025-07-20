import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import HowWeWorkTimeline from "@/components/Offer";
import ScrollingBar from "@/components/Scrollbar";
import Services from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category/>
      <Services/>
      <ScrollingBar/> 
      <HowWeWorkTimeline/>
      <Contact/>
      <Footer />
    </div>
  );
}
