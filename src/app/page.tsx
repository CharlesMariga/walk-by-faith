import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import WhoWeAre from "@/components/who-we-are";

import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Impact />
      <WhoWeAre />
      <Footer />
    </>
  );
}
