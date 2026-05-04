// Server-only — called from async Server Components only.
import { getSpotifyToken } from "./spotify";

const ARTIST_ID = "46mozgeLDTOlfF5dMbPGuV";
const API_BASE = "https://api.spotify.com/v1";

// ─── Public types ─────────────────────────────────────────────────────────────

export interface FeaturedTrack {
  label: string;
  title: string;
  description: string;
  tags: string[];
  duration: string;
  year: string;
  spotify: string;
  image?: string;
}

export interface MusicRelease {
  title: string;
  type: string;
  description: string;
  tags: string[];
  spotify: string | null;
  image?: string;
}

export interface MusicData {
  featuredTrack: FeaturedTrack;
  releases: MusicRelease[];
}

// ─── Fallback (mirrors the original hardcoded placeholder content) ─────────────

const FALLBACK: MusicData = {
  featuredTrack: {
    label: "Latest Single",
    title: "Untitled Vol. 1",
    description:
      "The debut drop. Raw energy, chaotic production, and zero compromises. Out now on Spotify.",
    tags: ["Electronic", "Experimental"],
    duration: "3:42",
    year: "2026",
    spotify: `https://open.spotify.com/artist/${ARTIST_ID}`,
  },
  releases: [
    {
      title: "VALACORE EP",
      type: "EP · 6 tracks",
      description: "Part gaming soundtrack, part fever dream. The full debut collection.",
      tags: ["Lo-fi Chaos", "Electronic"],
      spotify: null,
    },
    {
      title: "Glitch Mode",
      type: "Single",
      description: "An experiment in broken beats and distorted synths.",
      tags: ["Glitch", "Experimental"],
      spotify: null,
    },
    {
      title: "Boss Music",
      type: "Single",
      description: "For those final-form moments that need a soundtrack.",
      tags: ["Cinematic", "Electronic"],
      spotify: null,
    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function buildTypeLabel(albumType: string, totalTracks: number): string {
  if (albumType === "single" && totalTracks === 1) return "Single";
  if (albumType === "single") return `Single · ${totalTracks} tracks`;
  if (albumType === "album" && totalTracks <= 7) return `EP · ${totalTracks} tracks`;
  if (albumType === "album") return `Album · ${totalTracks} tracks`;
  return albumType.charAt(0).toUpperCase() + albumType.slice(1);
}

// ─── Main fetch ───────────────────────────────────────────────────────────────

export async function getMusicData(): Promise<MusicData> {
  try {
    const token = await getSpotifyToken();
    const headers = { Authorization: `Bearer ${token}` };

    // Revalidate once per hour so the build output stays fresh on Vercel.
    const fetchOpts = { headers, next: { revalidate: 3600 } } as RequestInit;

    const [tracksRes, albumsRes] = await Promise.all([
      fetch(
        `${API_BASE}/artists/${ARTIST_ID}/top-tracks?market=US`,
        fetchOpts,
      ),
      fetch(
        `${API_BASE}/artists/${ARTIST_ID}/albums?include_groups=single,album&market=US&limit=10`,
        fetchOpts,
      ),
    ]);

    if (!tracksRes.ok || !albumsRes.ok) return FALLBACK;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tracksData: any = await tracksRes.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const albumsData: any = await albumsRes.json();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const topTracks: any[] = tracksData.tracks ?? [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const albums: any[] = albumsData.items ?? [];

    // Featured track: most popular result from top-tracks
    let featuredTrack: FeaturedTrack = FALLBACK.featuredTrack;
    if (topTracks.length > 0) {
      const track = topTracks[0];
      const year = (track.album?.release_date as string)?.slice(0, 4) ?? "2026";
      featuredTrack = {
        label: "Latest Single",
        title: track.name as string,
        description: `From "${track.album?.name ?? "the latest release"}". Out now on Spotify.`,
        tags: ["Music"],
        duration: formatDuration(track.duration_ms as number),
        year,
        spotify:
          (track.external_urls?.spotify as string) ??
          `https://open.spotify.com/artist/${ARTIST_ID}`,
        image: (track.album?.images?.[0]?.url as string) ?? undefined,
      };
    }

    // Releases: up to 3 most recent albums/singles
    const releases: MusicRelease[] = albums.slice(0, 3).map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (album: any): MusicRelease => ({
        title: album.name as string,
        type: buildTypeLabel(album.album_type as string, album.total_tracks as number),
        description: `Released ${(album.release_date as string)?.slice(0, 4) ?? "recently"}.`,
        tags: [
          (album.album_type as string) === "single" ? "Single" : "Album",
        ],
        spotify:
          (album.external_urls?.spotify as string) ?? null,
        image: (album.images?.[1]?.url as string) ?? undefined,
      }),
    );

    return {
      featuredTrack,
      releases: releases.length > 0 ? releases : FALLBACK.releases,
    };
  } catch {
    // Network failure, missing credentials, or malformed response — use fallback.
    return FALLBACK;
  }
}
