import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import CreateAndCustomize from "@/components/CreateAndCustomize/CreateAndCustomize";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CreateAndCustomize />
    </main>
  );
}
