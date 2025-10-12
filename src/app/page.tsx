import Contact from "@/components/contact";
import Donate from "@/components/donate";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Stories from "@/components/stories";
import SuccessAlertDialog from "@/components/success-alert-dialog";
import WhoWeAre from "@/components/who-we-are";
import WyGive from "@/components/why-give";

import Nav from "../components/nav";

export default function Home({
  searchParams,
}: {
  searchParams: { payment: string };
}) {
  const { payment } = searchParams;

  return (
    <>
      <SuccessAlertDialog payment={payment} />
      <Nav />
      <Hero />
      <Impact />
      <WhoWeAre />
      <Donate />
      <WyGive />
      <Stories />
      <Contact />
      <Footer />
    </>
  );
}
