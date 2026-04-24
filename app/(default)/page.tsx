export const metadata = {
  title: "Amerta Beeswax — Natural, Reusable Food Wraps",
  description:
    "Discover Amerta's 100% natural beeswax wraps — the eco-friendly alternative to plastic wrap. Scroll to reveal our story.",
};

import BeeswaxHeroMobile from "@/components/BeeswaxHeroMobile";
import BeeswaxHeroDesktop from "@/components/BeeswaxHeroDesktop";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <div className="block md:hidden">
        <BeeswaxHeroMobile />
      </div>
      <div className="hidden md:block">
        <BeeswaxHeroDesktop />
      </div>
      <FeaturesPlanet />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
