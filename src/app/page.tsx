import LandingUi from "./Components/ui/LandingUi";
import ClientUi from "./Components/ui/ClientUi";
import Services from "./Components/ui/ServiceUi";
import OtherServices from "./Components/ui/OtherServicesUi";
import GrowthSection from "./Components/ui/Growth";
import Testimonials from "./Components/ui/Testimonial";
import ContactFormUi from "./Components/ui/ContactFormUi";
import VideoCarousel from "./Components/ui/videoUi";

export default function Home() {
  return (
    <>
      <LandingUi />
      <ClientUi />
      <Services/>
      <OtherServices/>
      <VideoCarousel/>
      {/* <Testimonials/> */}
      <GrowthSection/>
      <section className="relative bg-white z-20 text-black">
            <ContactFormUi />
          </section>
    </>
  );
}
