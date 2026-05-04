import { SpotifyIcon } from "../atoms/icons";

interface SpotifyEmbedProps {
  // Accepts a standard Spotify URL or an embed URL.
  // Examples:
  //   "https://open.spotify.com/artist/YOUR_ARTIST_ID"
  //   "https://open.spotify.com/playlist/YOUR_PLAYLIST_ID"
  //   "https://open.spotify.com/album/YOUR_ALBUM_ID"
  //   "https://open.spotify.com/track/YOUR_TRACK_ID"
  spotifyUrl: string;
  title?: string;
  height?: number;
}

function toEmbedUrl(url: string): string {
  if (url.includes("/embed/")) return url;
  // Convert open.spotify.com/TYPE/ID → open.spotify.com/embed/TYPE/ID
  return url.replace("open.spotify.com/", "open.spotify.com/embed/") + "?utm_source=generator&theme=0";
}

export default function SpotifyEmbed({
  spotifyUrl,
  title = "ValaShibbs on Spotify",
  height = 352,
}: SpotifyEmbedProps) {
  const embedUrl = toEmbedUrl(spotifyUrl);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-transparent">
      {/* Header row */}
      <div className="flex items-center gap-2.5 border-b border-white/5 px-5 py-3">
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-green-500">
          <SpotifyIcon size={15} />
        </span>
        <span className="text-sm font-semibold text-zinc-200">{title}</span>
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs text-zinc-500 transition hover:text-green-400"
        >
          Open in Spotify →
        </a>
      </div>

      {/* Embed */}
      <iframe
        src={embedUrl}
        width="100%"
        height={height}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title={title}
        className="block"
      />
    </div>
  );
}
