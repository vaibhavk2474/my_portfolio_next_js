import Home from "@/components/MainPage/Home";
import About from "@/components/MainPage/About";
import TechStack from "@/components/MainPage/TechStack";
import ExperienceEnhanced from "@/components/MainPage/ExperienceEnhanced";
import Projects from "@/components/MainPage/Projects";
import Services from "@/components/MainPage/Services";
import ContactUs from "@/components/MainPage/ContactUs";

export default function HomePage() {
	return (
		<main className="">
			<Home />
			<About />
			<TechStack />
			<ExperienceEnhanced />
			<Projects />
			<Services />
			<ContactUs />
		</main>
	);
}
