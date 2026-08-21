import { ImageResponse } from "next/og";
import { PERSONAL, SEO } from "@/config/portfolio.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(99,102,241,0.25), transparent 50%), radial-gradient(circle at 75% 75%, rgba(56,189,248,0.15), transparent 50%)",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#818cf8",
            marginBottom: 24,
          }}
        >
          {`${PERSONAL.currentRole} · ${PERSONAL.currentCompany}`}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#f1f5f9",
            marginBottom: 20,
          }}
        >
          {PERSONAL.name}
        </div>
        <div style={{ fontSize: 36, color: "#94a3b8", marginBottom: 16 }}>
          {PERSONAL.title}
        </div>
        <div style={{ fontSize: 26, color: "#64748b", maxWidth: 900 }}>
          {`${SEO.description.split(".")[0]}.`}
        </div>
      </div>
    ),
    { ...size }
  );
}
