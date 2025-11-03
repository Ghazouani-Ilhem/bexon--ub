"use client"

import { useState, useMemo } from "react"
import FaqItem2 from "@/components/shared/faq/FaqItem2"
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper"

const Faq3 = () => {
  const items = [
    {
      title: "What services does Bexon offer to clients?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      category: "Services",
      initActive: true,
    },
    {
      title: "How do I get started with Corporate Business?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      category: "Getting Started",
      initActive: false,
    },
    {
      title: "How do you ensure the success of a project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      category: "Project Management",
      initActive: false,
    },
    {
      title: "How long will it take to complete my project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      category: "Project Management",
      initActive: false,
    },
    {
      title: "Can I track the progress of my project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      category: "Project Management",
      initActive: false,
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((item) => item.category)))
    return cats
  }, [])

  // Filter items based on category and search
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchCategory = !selectedCategory || item.category === selectedCategory
      const matchSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section className="tj-faq-section section-gap section-separator">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                <i className="tji-box"></i>Common Questions
              </span>
              <h2 className="sec-title title-anim">
                Need <span>Help?</span> Start Here...
              </h2>
            </div>
          </div>

          <div className="row justify-content-center">
            {/* Sidebar */}
            <div className="col-lg-3">
              <div className="faq-sidebar">
                {/* Search Bar */}
                <div className="faq-search mb-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      padding: "10px 15px",
                      borderRadius: "6px",
                      border: "1px solid #e0e0e0",
                    }}
                  />
                </div>

                {/* Categories Filter */}
                <div className="faq-categories">
                  <h5
                    className="mb-3"
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Categories
                  </h5>
                  <div
                    className="category-list"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {/* All Categories Button */}
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`category-btn ${!selectedCategory ? "active" : ""}`}
                      style={{
                        padding: "10px 15px",
                        border: !selectedCategory ? "2px solid #007bff" : "1px solid #e0e0e0",
                        borderRadius: "6px",
                        backgroundColor: !selectedCategory ? "#f0f7ff" : "#fff",
                        cursor: "pointer",
                        textAlign: "left",
                        fontWeight: !selectedCategory ? "600" : "500",
                        color: !selectedCategory ? "#007bff" : "#333",
                        transition: "all 0.3s ease",
                      }}
                    >
                      All Categories ({items.length})
                    </button>

                    {/* Individual Categories */}
                    {categories.map((category) => {
                      const count = items.filter((item) => item.category === category).length
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`category-btn ${selectedCategory === category ? "active" : ""}`}
                          style={{
                            padding: "10px 15px",
                            border: selectedCategory === category ? "2px solid #007bff" : "1px solid #e0e0e0",
                            borderRadius: "6px",
                            backgroundColor: selectedCategory === category ? "#f0f7ff" : "#fff",
                            cursor: "pointer",
                            textAlign: "left",
                            fontWeight: selectedCategory === category ? "600" : "500",
                            color: selectedCategory === category ? "#007bff" : "#333",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {category} ({count})
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Results Count */}
                <div
                  className="faq-results mt-4 pt-4"
                  style={{
                    borderTop: "1px solid #e0e0e0",
                    paddingTop: "20px",
                  }}
                >
                  <small
                    style={{
                      color: "#666",
                      fontSize: "14px",
                    }}
                  >
                    Showing {filteredItems.length} of {items.length} FAQs
                  </small>
                </div>
              </div>
            </div>

            {/* FAQ Items */}
            <div className="col-lg-9">
              <BootstrapWrapper>
                <div className="accordion tj-faq pt-0" id="faqTwo">
                  {filteredItems?.length ? (
                    filteredItems?.map((item, idx) => <FaqItem2 key={idx} item={item} idx={idx} />)
                  ) : (
                    <div
                      style={{
                        padding: "40px 20px",
                        textAlign: "center",
                        color: "#999",
                      }}
                    >
                      <p>No FAQs found. Try adjusting your filters.</p>
                    </div>
                  )}
                </div>
              </BootstrapWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq3
