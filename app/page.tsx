import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import Welcome from "./components/Welcome";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Event from "./components/Event";
import Venue from "./components/Venue";
import Itinerary from "./components/Itinerary";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      
      <Countdown />
      
      <Welcome />

      <Timeline />

      <Gallery />

      <Event />

      <Venue />

      <Itinerary />

      <Footer />
    </main>
  );
}
