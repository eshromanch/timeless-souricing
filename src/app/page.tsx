import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import OurServices from "@/components/sections/OurServices";
import ProductCategories from "@/components/sections/ProductCategories";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ClientsPartners from "@/components/sections/ClientsPartners";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <ProductCategories />
      <WhyChooseUs />
      <ClientsPartners />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
