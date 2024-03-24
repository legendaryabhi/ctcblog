import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
  
      

      <div
        style={{
          backgroundColor: "#010511",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
            background: "#02010e",
          }}
        >
          <img src="/logo.png" alt="Logo" style={{ height: 44, width: 44 }} />
          <Link
            href="/blog"
            style={{
              color: "white",
              fontSize: 20,
              textDecoration: "none",
              fontFamily: "monospace",
            }}
          >
            Get Started
          </Link>
        </div>

        <main>
          <div>
            <h1
              style={{
                color: "white",
                marginTop: 270,
                fontFamily: "arial",
                paddingRight: 20,
                paddingLeft: 20,
                fontSize: "30px",
              }}
            >
              Welcome to ConquerortheCrown
            </h1>
            <p
              style={{
                color: "white",
                fontFamily: "monospace",
                padding: 20,
                background:
                  "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
                width: "fit-content",
                marginTop: 20,
                fontSize: "16px",
              }}
            >
              The best decision of your life.
            </p>

            <div style={{ background: "", marginTop: 80 }}>
              <Link
                href="https://app.conquerorthecrown.com"
                style={{
                  color: "white",
                  fontSize: 24,
                  textDecoration: "none",
                  fontFamily: "arial",
                  padding: 20,
                }}
              >
                Try ConquerortheCrown
              </Link>
            </div>

            <div
              style={{
                padding: 30,
                background: "black",
                borderRadius: 40,
                marginTop: 60,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  color: "white",
                  fontFamily: "arial",
                  padding: 20,
                  fontSize: "30px",
                }}
              >
                What is ConquerortheCrown
              </h1>
              <p
                style={{
                  color: "white",
                  fontFamily: "arial",
                  padding: 20,
                  fontSize: "18px",
                }}
              >
                ConquerortheCrown is your AI-powered mentor, akin to having your
                own personal Andrew Tate.
              </p>

              <iframe
                src="https://www.youtube.com/embed/yyx7uNAAl1U"
                frameborder="0"
                width="100%"
                height="100%"
                style={{ borderRadius: 20, marginTop: 40 }}
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />
            </div>
          </div>
        </main>
      </div>
    
  );
}
