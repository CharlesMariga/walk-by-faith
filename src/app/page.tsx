import Contact from "@/components/contact";
import Donate from "@/components/donate";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Impact from "@/components/impact";
import Stories from "@/components/stories";
import SuccessAlertDialog from "@/components/success-alert-dialog";
import WhoWeAre from "@/components/who-we-are";
import WyGive from "@/components/why-give";

import Nav from "../components/nav";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    payment: string;
    payment_intent: string;
    payment_intent_client_secret: string;
  };
}) {
  const { payment, payment_intent, payment_intent_client_secret } =
    await searchParams;

  return (
    <>
      <SuccessAlertDialog
        payment={payment}
        paymentIntent={payment_intent}
        paymentIntentClientSecret={payment_intent_client_secret}
      />
      <Nav />
      <Hero />
      <Impact />
      <WhoWeAre />
      <Donate />
      <WyGive />
      <Gallery />
      <Stories />
      <Contact />
      <Footer />
    </>
  );
}
