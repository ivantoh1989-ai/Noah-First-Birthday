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
