import { ImageResponse } from "next/og";
import { PERSONAL } from "@/config/portfolio.config";

export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          backgroundImage:
            "radial-gradient(circle at 30% 25%, rgba(99,102,241,0.55), transparent 60%), radial-gradient(circle at 75% 75%, rgba(56,189,248,0.4), transparent 60%)",
        }}
      >
        <div
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "#f1f5f9",
            letterSpacing: -2,
          }}
        >
          {PERSONAL.initials}
        </div>
      </div>
    ),
    { ...size }
  );
}
