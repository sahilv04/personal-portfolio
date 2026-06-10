import { ImageResponse } from "next/og";
import { personal } from "@/content/personal";

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
          background: "#F3EDE0",
          color: "#211D14",
          fontFamily: "Georgia, 'Times New Roman', serif",
          padding: "56px 72px",
        }}
      >
        {/* Masthead rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "4px solid #211D14",
            paddingBottom: "20px",
            fontSize: "22px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#57503F",
          }}
        >
          <span>Est. 2016 — Chandigarh, IN</span>
          <span>sahilverma.in</span>
          <span>Vol. IX</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 1,
            gap: "22px",
          }}
        >
          <div style={{ fontSize: "104px", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", display: "flex" }}>
            <span>{personal.name}</span>
            <span style={{ color: "#C8401F" }}>.</span>
          </div>
          <div style={{ fontSize: "38px", fontStyle: "italic", color: "#57503F", display: "flex" }}>
            {personal.role}
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              fontSize: "22px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#211D14",
            }}
          >
            <span style={{ border: "2px solid #211D14", padding: "8px 18px" }}>React</span>
            <span style={{ border: "2px solid #211D14", padding: "8px 18px" }}>Angular</span>
            <span style={{ border: "2px solid #211D14", padding: "8px 18px" }}>Node.js</span>
            <span style={{ border: "2px solid #C8401F", color: "#C8401F", padding: "8px 18px" }}>AWS ×3 Certified</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "2px solid #211D14",
            paddingTop: "18px",
            fontSize: "22px",
            color: "#57503F",
            fontStyle: "italic",
          }}
        >
          <span>End-to-end products, and the engineers who ship them.</span>
          <span style={{ color: "#C8401F" }}>fig. 01</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
