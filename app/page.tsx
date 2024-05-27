import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CreateAndCustomize from "@/components/CreateAndCustomize/CreateAndCustomize";
import ShareSection from "@/components/ShareSection/ShareSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CreateAndCustomize />
      <ShareSection />
    </main>
  );
}
