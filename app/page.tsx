import Header from "./components/Header";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import WhoWeHelp from "./components/WhoWeHelp";
import QuoteBand from "./components/QuoteBand";
import Expertise from "./components/Expertise";
import HowWeWork from "./components/HowWeWork";
import Specialties from "./components/Specialties";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Header />
      <Hero />
      <Intro />
      <WhoWeHelp />
      <QuoteBand />
      <Expertise />
      <HowWeWork />
      <Specialties />
      <Schedule />
      <Footer />
    </main>
  );
}