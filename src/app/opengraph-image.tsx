import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const alt = "Bullnose Consulting - Get control of your cash flow";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  try {
    // Load the hero background image
    const heroImageData = await readFile(
      join(process.cwd(), "public/static-assets/hero.png")
    );
    const heroImageSrc = `data:image/png;base64,${heroImageData.toString(
      "base64"
    )}`;

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background Image */}
          <img
            src={heroImageSrc}
            alt="Hero background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Dark overlay for text readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to top right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 75%)",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              padding: "80px",
              width: "100%",
              height: "100%",
              textAlign: "left",
            }}
          >
            {/* Main Heading */}
            <h1
              style={{
                fontSize: "96px",
                fontWeight: 900,
                margin: 0,
                lineHeight: 0.9,
                color: "white",
                maxWidth: "800px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Bullnose Consulting
            </h1>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    // Fallback if image loading fails
    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(135deg, #232166 0%, #98B21D 100%)",
            color: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px",
            textAlign: "left",
          }}
        >
          {/* Main Heading */}
          <h1
            style={{
              fontSize: "96px",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.9,
              color: "white",
              maxWidth: "800px",
              textAlign: "left",
            }}
          >
            Bullnose Consulting
          </h1>
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
