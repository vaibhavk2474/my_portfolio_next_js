import Navbar from "@/components/Navbar";
import FooterUI from "@/components/FooterUI";
import Home from "@/components/Home";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";

export default function HomePage() {
  return (
    <main className="">
      <Home />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Services />
      <ContactUs />
    </main>
  );
}
