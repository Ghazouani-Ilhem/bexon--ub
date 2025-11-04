"use client"

import Image from "next/image"

const Hero = () => {
  return (
    <section className="tj-banner-section section-gap-x">
      <div className="banner-area">
        <div className="banner-left-box">
          <div className="banner-content">
            <span
              className="sub-title"
              data-wow-delay=".2s"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                fontWeight: "600",
                color: "var(--tj-color-primary-500)",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              <i className="tji-excellence" style={{ fontSize: "16px" }}></i>
              OPCNet Broker DA HDA AE
            </span>

            <h1
              className="banner-title"
              style={{
                fontSize: "clamp(32px, 8vw, 74px)",
                lineHeight: "1.2",
                marginTop: "24px",
                marginBottom: "32px",
                fontWeight: "700",
                color: "var(--tj-color-heading-primary)",
                letterSpacing: "-1px",
              }}
            >
              Secure, DCOM-Free OPC Tunneling – Connecting Industrial Networks Without Complexity
            </h1>

            <div
              className="banner-desc-area wow fadeInUp"
              data-wow-delay=".7s"
              style={{
                marginBottom: "40px",
              }}
            >
              <div
                className="banner-desc"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: "var(--tj-color-text-body)",
                  maxWidth: "500px",
                }}
              >
                Enterprise-grade industrial connectivity with zero complexity. Secure your OPC networks today.
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "center",
                marginBottom: "60px",
              }}
            >
              <button
                style={{
                  padding: "14px 32px",
                  backgroundColor: "var(--tj-color-primary-500)",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 15px rgba(30, 58, 95, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--tj-color-primary-600)"
                  e.target.style.boxShadow = "0 6px 20px rgba(30, 58, 95, 0.3)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--tj-color-primary-500)"
                  e.target.style.boxShadow = "0 4px 15px rgba(30, 58, 95, 0.2)"
                }}
              >
                Get Started
              </button>
              <button
                style={{
                  padding: "14px 32px",
                  backgroundColor: "transparent",
                  color: "var(--tj-color-primary-500)",
                  border: "2px solid var(--tj-color-primary-500)",
                  borderRadius: "6px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--tj-color-primary-50)"
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent"
                }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="banner-shape">
            <img src="/images/shape/pattern-bg.webp" alt="" />
          </div>
        </div>

        <div className="banner-right-box">
          <div
            className="banner-img"
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(30, 58, 95, 0.15)",
              transition: "transform 0.3s ease",
            }}
          >
            <Image
              data-speed="0.8"
              src="/images/hero/bebsa3doun.jpg"
              alt="OPC Tunneling Solution"
              width={945}
              height={793}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
        <button
          data-target="#choose"
          className="scroll-down tj-scroll-btn"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "600",
            color: "var(--tj-color-text-body)",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--tj-color-primary-500)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--tj-color-text-body)"
          }}
        >
          <span style={{ fontSize: "20px" }}>
            <i className="tji-arrow-down-long"></i>
          </span>
          Scroll Down
        </button>
      </div>
    </section>
  )
}

export default Hero
