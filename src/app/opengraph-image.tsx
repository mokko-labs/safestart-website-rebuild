import { ImageResponse } from "next/og";

export const alt = "SafeStart | Surgical Safety System";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0b1f16 0%, #14532d 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* check-circle mark */}
          <svg
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4ade80"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
            <path d="m9 11 3 3L22 4" />
          </svg>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
            SAFESTART
            <span style={{ fontSize: 40, marginTop: 8 }}>®</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 36,
            color: "#d1fae5",
          }}
        >
          Surgical Safety System
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 26,
            color: "#86efac",
          }}
        >
          We help you prevent Never Events
        </div>
      </div>
    ),
    { ...size },
  );
}
