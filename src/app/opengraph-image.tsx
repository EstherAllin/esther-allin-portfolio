import { ImageResponse } from "next/og";

export const alt = "Esther Allin — Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#020617",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div
          style={{
            width: "56px",
            height: "4px",
            background: "#a855f7",
            marginBottom: "40px",
            borderRadius: "2px",
          }}
        />
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            marginBottom: "20px",
            fontWeight: 400,
          }}
        >
          {"Websites shouldn't frustrate people."}
        </div>
        <div
          style={{
            fontSize: "80px",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-3px",
            lineHeight: 1.05,
            marginBottom: "20px",
          }}
        >
          Esther Allin
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#c084fc",
            fontWeight: 500,
          }}
        >
          Frontend Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
