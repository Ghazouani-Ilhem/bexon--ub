"use client"

import { useState, useMemo } from "react"
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary"
import FaqItem from "@/components/shared/faq/FaqItem"
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper"
import Image from "next/image"
import Link from "next/link"

const Faq2 = ({ type = 1 }) => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const items = [
    {
      title: "What DCOM problems does OPCNet Broker solve?",
      desc: "It replaces DCOM with a reliable TCP-based communication layer that operates through a single configurable port, simplifying connectivity, and improving resilience.",
      initActive: true,
      category: "Getting Started",
    },
    {
      title: "Can OPCNet Broker work with existing OPC clients and servers? ",
      desc: "Yes, OPCNet Broker is completely transparent to existing OPC applications. It acts as a proxy, allowing any OPC DA, HDA, or AE client to connect to remote servers without requiring application modifications or updates.",
      initActive: false,
      category: "Integration",
    },
    {
      title: "How does OPCNet Broker ensure secure communication? ",
      desc: "	OPCNet Broker ensures communication integrity through data encryption, user authentication, application whitelisting, and the Tag Security add-on, while aligning with ISA/IEC 62443 industrial cybersecurity principles.",
      initActive: false,
      category: "Security",
    },
    {
      title: "What network configurations does OPCNet Broker support? ",
      desc: "	OPCNet Broker supports communication across firewalls, NAT devices, different domains, VPNs, and DMZ configurations. It only requires a single TCP port to be opened, simplifying firewall configuration.",
      initActive: false,
      category: "Configuration",
    },
    {
      title: "Is there a performance impact when using OPC tunneling? ",
      desc: "	OPCNet Broker is optimized for minimal latency and high throughput, making it suitable for real-time industrial applications.",
      initActive: false,
      category: "Performance",
    },
    {
      title: "How quickly can OPCNet Broker be deployed?  ",
      desc: "	 Most installations can be completed in under 30 minutes using the configuration wizard and the graphical configuration interface. No complex DCOM settings or registry modifications are required.",
      initActive: false,
      category: "Getting Started",
    },
  ]

  const categories = ["All", ...new Set(items.map((item) => item.category))]

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesCategory = !selectedCategory || selectedCategory === "All" || item.category === selectedCategory
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const categoryCount = (category) => {
    if (category === "All") return items.length
    return items.filter((item) => item.category === category).length
  }

  if (type === 3 || type === 4) {
    return (
      <section className="tj-faq-section section-gap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="content-wrap">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box"></i>Common Questions
                  </span>
                  <h2 className="sec-title title-anim">
                    Need <span>Help?</span> Start Here...
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  We stay ahead of curve, leveraging cutting-edge technologies and strategies to competitive
                </p>
                <div className="wow fadeInUp" data-wow-delay=".8s">
                  <ButtonPrimary text={"Request a Call"} url={"/contact"} />
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <BootstrapWrapper>
                <div className="accordion tj-faq style-2" id="faqOne">
                  {filteredItems?.length ? (
                    filteredItems?.map((item, idx) => <FaqItem key={idx} item={item} idx={idx} />)
                  ) : (
                    <div className="no-results p-4 text-center">
                      <p>No FAQs match your filters</p>
                    </div>
                  )}
                </div>
              </BootstrapWrapper>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="tj-faq-section section-gap tj-arrange-container-2">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6 tj-arrange-item-2">
            <div className="faq-img-area">
              <div className="faq-img overflow-hidden">
                <Image src="/images/faq/faq.webp" alt="" width={585} height={629} />
                <h2 className="title">Need Help? Start Here...</h2>
              </div>
              <div className="box-area">
                <div className="call-box">
                  <h4 className="title">Get Started Free Call?</h4>
                  <Link className="number" href="tel:18884521505">
                    <span>Contact US</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 tj-arrange-item-2">
            <div style={{ display: "flex", gap: "24px" }}>
              {/* Left Sidebar Filter */}
              <div
                style={{
                  flex: "0 0 220px",
                  padding: "24px",
                  backgroundColor: "#f8fafb",
                  borderRadius: "12px",
                  height: "fit-content",
                  border: "1px solid #e5e7eb",
                }}
              >
                {/* Search Box */}
                <div style={{ marginBottom: "24px" }}>
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      border: "1px solid #d1d5db",
                      borderRadius: "8px",
                      fontSize: "14px",
                      fontFamily: "var(--tj-ff-body)",
                      transition: "all 0.3s ease",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--tj-color-theme-primary)")}
                    onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  />
                </div>

                {/* Category Filter */}
                <div>
                  <h3
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "var(--tj-color-heading-primary)",
                      marginBottom: "14px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Categories
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                        style={{
                          padding: "10px 12px",
                          textAlign: "left",
                          border: "none",
                          borderRadius: "8px",
                          cursor: "pointer",
                          fontSize: "14px",
                          fontWeight: "500",
                          fontFamily: "var(--tj-ff-body)",
                          backgroundColor:
                            selectedCategory === cat || (cat === "All" && !selectedCategory)
                              ? "var(--tj-color-theme-primary)"
                              : "transparent",
                          color:
                            selectedCategory === cat || (cat === "All" && !selectedCategory)
                              ? "#ffffff"
                              : "var(--tj-color-text-body)",
                          transition: "all 0.3s ease",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                        onMouseOver={(e) => {
                          if (selectedCategory !== cat && !(cat === "All" && !selectedCategory)) {
                            e.target.style.backgroundColor = "#f3f4f6"
                          }
                        }}
                        onMouseOut={(e) => {
                          if (selectedCategory !== cat && !(cat === "All" && !selectedCategory)) {
                            e.target.style.backgroundColor = "transparent"
                          }
                        }}
                      >
                        <span>{cat}</span>
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            opacity: 0.7,
                          }}
                        >
                          ({categoryCount(cat)})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Results Counter */}
                {searchQuery && (
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "14px",
                      borderTop: "1px solid #e5e7eb",
                      fontSize: "12px",
                      color: "var(--tj-color-text-body-2)",
                      fontWeight: "500",
                    }}
                  >
                    {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""} found
                  </div>
                )}
              </div>

              {/* FAQ Items */}
              <div style={{ flex: "1" }}>
                <BootstrapWrapper>
                  <div className="accordion tj-faq tj-arrange-item-2" id="faqOne">
                    {filteredItems?.length ? (
                      filteredItems?.map((item, idx) => <FaqItem key={idx} item={item} idx={idx} />)
                    ) : (
                      <div
                        className="no-results p-4"
                        style={{
                          textAlign: "center",
                          padding: "40px 24px",
                          color: "var(--tj-color-text-body-2)",
                          backgroundColor: "#f9fafb",
                          borderRadius: "8px",
                        }}
                      >
                        <p style={{ margin: 0, fontSize: "16px" }}>
                          No FAQs match your filters. Try adjusting your search.
                        </p>
                      </div>
                    )}
                  </div>
                </BootstrapWrapper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq2
