import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowWeWorkTimeline from "@/components/Proccess";
import Pricing from "@/components/Pricing";
import ScrollingBar from "@/components/Scrollbar";
import Services from "@/components/Service";
import Solutions from "@/components/Solutions";
import Teams from "@/components/Teams";
import Testimonials from "@/components/testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Services/>
      <Solutions />
      <HowWeWorkTimeline/>
      <Pricing />
      <Category/>
      <Testimonials/>
      <ScrollingBar/> 
      <Teams/>
      <Contact/>
    </div>
  );
}