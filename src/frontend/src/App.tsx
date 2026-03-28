import { Toaster } from "@/components/ui/sonner";
import Contact from "./components/Contact";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import SuccessStories from "./components/SuccessStories";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen font-poppins">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <SuccessStories />
        <Destinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
