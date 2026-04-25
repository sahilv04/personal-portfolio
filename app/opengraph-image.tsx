import { ImageResponse } from "next/og";
import { personal } from "@/content/personal";

export const runtime = "edge";
export const alt = `${personal.name} — ${personal.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, #1a1a3a 0%, #060611 60%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
            }}
          />
          <span style={{ fontSize: "28px", opacity: 0.85, letterSpacing: "-0.02em" }}>
            sahilverma.in
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {personal.name}
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 400,
              opacity: 0.85,
              letterSpacing: "-0.02em",
            }}
          >
            {personal.role}
          </div>
          <div
            style={{
              fontSize: "26px",
              opacity: 0.6,
              maxWidth: "900px",
              lineHeight: 1.4,
              marginTop: "12px",
            }}
          >
            React · Angular · Node.js · Cloud · Opensource — enterprise scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "22px",
            opacity: 0.5,
          }}
        >
          <span>Webmob Software Solutions</span>
          <span>·</span>
          <span>ex-Infosys (London)</span>
          <span>·</span>
          <span>{personal.location}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
