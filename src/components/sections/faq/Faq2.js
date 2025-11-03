"use client"

import { useState } from "react"
import FaqItem2 from "@/components/shared/faq/FaqItem2"
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper"

const Faq3 = () => {
  const items = [
    {
      title: "What services does Bexon offer to clients?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      initActive: true,
      category: "Services",
    },
    {
      title: "How do I get started with Corporate Business?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      initActive: false,
      category: "Getting Started",
    },
    {
      title: "How do you ensure the success of a project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      initActive: false,
      category: "Process",
    },
    {
      title: "How long will it take to complete my project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      initActive: false,
      category: "Timeline",
    },
    {
      title: "Can I track the progress of my project?",
      desc: "Getting started is easy! Simply reach out to us through our contact form or give us a call, and we'll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
      initActive: false,
      category: "Tracking",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  // Get unique categories from items
  const categories = ["All Categories", ...new Set(items.map((item) => item.category))]

  // Filter items based on selected category and search term
  const filteredItems = items.filter((item) => {
    const matchesCategory =
      !selectedCategory || selectedCategory === "All Categories" || item.category === selectedCategory
    const matchesSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

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

          <div className="row justify-content-center mt-4">
            <div className="col-lg-3">
              <div className="faq-sidebar" style={{ paddingRight: "20px" }}>
                <h5 className="mb-3" style={{ fontSize: "16px", fontWeight: "600" }}>
                  Filter by Category
                </h5>
                <div className="category-list">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
                      className="d-block w-100 text-start p-2 mb-2"
                      style={{
                        background: selectedCategory === category ? "#0066ff" : "#f5f5f5",
                        color: selectedCategory === category ? "#fff" : "#333",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: selectedCategory === category ? "600" : "400",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {category}
                      <span
                        style={{
                          marginLeft: "auto",
                          float: "right",
                          fontSize: "12px",
                        }}
                      >
                        (
                        {category === "All Categories"
                          ? items.length
                          : items.filter((i) => i.category === category).length}
                        )
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <h5 className="mb-3" style={{ fontSize: "16px", fontWeight: "600" }}>
                    Search
                  </h5>
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                    style={{
                      borderRadius: "6px",
                      border: "1px solid #ddd",
                      padding: "8px 12px",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <BootstrapWrapper>
                <div className="accordion tj-faq pt-0" id="faqTwo">
                  {filteredItems?.length ? (
                    filteredItems?.map((item, idx) => <FaqItem2 key={idx} item={item} idx={idx} />)
                  ) : (
                    <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>
                      No FAQs match your search. Try adjusting your filters.
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
