import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HowWeWorkTimeline from "@/components/Offer";
import ScrollingBar from "@/components/Scrollbar";
import Services from "@/components/Service";
// import Teams from "@/components/Teams";

export default function Home() {
  return (
    <div>
      <Hero />
      <Category/>
      <Services/>
      <ScrollingBar/> 
      <HowWeWorkTimeline/>
      {/* <Teams/> */}
      <Contact/>
    </div>
  );
}
