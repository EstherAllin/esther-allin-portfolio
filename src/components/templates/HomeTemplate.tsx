import NavBar from "../organisms/NavBar";
import HeroSection from "../organisms/HeroSection";
import AboutSection from "../organisms/AboutSection";
import ContentSection from "../organisms/ContentSection";
import MusicSection from "../organisms/MusicSection";
import LinksSection from "../organisms/LinksSection";
import FooterSection from "../organisms/FooterSection";
import type { MusicData } from "../../lib/getSpotifyData";

export default function HomeTemplate({ musicData }: { musicData: MusicData }) {
  return (
    <>
      <NavBar />
      <main>
      <HeroSection />
      <AboutSection />
      <ContentSection />
      <MusicSection {...musicData} />
      <LinksSection />
      <FooterSection />
    </main>
    </>
  );
}
