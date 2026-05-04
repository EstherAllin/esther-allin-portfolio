// Server-only — never import this from a client component.
// Token is cached in module scope for the lifetime of the server process / build worker.

const TOKEN_URL = "https://accounts.spotify.com/api/token";

let cachedToken: { value: string; expiresAt: number } | null = null;

export async function getSpotifyToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET must be set.");
  }

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    // Never cache the token fetch itself — we manage expiry manually.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Spotify token request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  cachedToken = {
    value: data.access_token as string,
    // Expire 60 seconds early to avoid using a token right as it expires.
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };

  return cachedToken.value;
}
