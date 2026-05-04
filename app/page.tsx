import { getMusicData } from "../src/lib/getSpotifyData";
import HomeTemplate from "../src/components/templates/HomeTemplate";

export default async function Home() {
  const musicData = await getMusicData();
  return <HomeTemplate musicData={musicData} />;
}
