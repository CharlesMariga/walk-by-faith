import Footer from "@/components/footer";
import FullGallery from "@/components/full-gallery";
import Nav from "@/components/nav";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Nav />
      <FullGallery />
      <Footer />
    </main>
  );
}
