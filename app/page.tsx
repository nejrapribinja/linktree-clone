import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CreateAndCustomize from "@/components/CreateAndCustomize/CreateAndCustomize";
import ShareSection from "@/components/ShareSection/ShareSection";
import AnalyzeSection from "@/components/AnalyzeSection/AnalyzeSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CreateAndCustomize />
      <ShareSection />
      <AnalyzeSection />
    </main>
  );
}
