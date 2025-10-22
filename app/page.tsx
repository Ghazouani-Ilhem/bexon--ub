"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-700/50 bg-slate-900/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
                <span className="text-sm font-bold text-slate-300">integration</span>
              </div>
              <span className="text-sm font-bold text-slate-400">objects</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                IT-OT Integration
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                AI
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                OPC Products
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                Resources
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                Contact
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                About Us
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                Ask Us a Question
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block rounded-lg bg-orange-500 text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition">
                Download SIOTH
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-300 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                IT-OT Integration
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                AI
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                OPC Products
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                Resources
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                Contact
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                About Us
              </a>
              <button className="w-full rounded-lg bg-orange-500 text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition mt-4">
                Download SIOTH
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                OPC UA Universal Server built in minutes using SIOTH®
              </h1>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-orange-500"></div>
                <a href="#" className="text-slate-300 hover:text-white transition font-medium">
                  Read More
                </a>
              </div>
            </div>

            {/* Right Image - 3D Server Stack */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Decorative circles */}
                <div className="absolute top-10 right-20 w-40 h-40 border-2 border-cyan-400/30 rounded-full"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-cyan-400/20 rounded-full"></div>

                {/* 3D Server Stack Illustration */}
                <div className="relative w-64 h-80">
                  {/* Top Server - Red/Maroon */}
                  <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-red-600 to-red-700 rounded-lg shadow-2xl"
                    style={{
                      transform: "translateX(-50%) rotateX(15deg) rotateZ(-5deg)",
                      perspective: "1000px",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"></div>
                  </div>

                  {/* Middle Server - Teal */}
                  <div
                    className="absolute top-20 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-teal-600 to-teal-700 rounded-lg shadow-2xl"
                    style={{
                      transform: "translateX(-50%) rotateX(10deg) rotateZ(2deg)",
                      perspective: "1000px",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"></div>
                    {/* Server ports */}
                    <div className="absolute bottom-2 left-4 flex gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Bottom Server - Teal */}
                  <div
                    className="absolute top-40 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-b from-teal-500 to-teal-600 rounded-lg shadow-2xl"
                    style={{
                      transform: "translateX(-50%) rotateX(5deg) rotateZ(5deg)",
                      perspective: "1000px",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg"></div>
                    {/* Server ports */}
                    <div className="absolute bottom-2 left-4 flex gap-1">
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise Integration Solutions</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Powerful tools for IT-OT integration, OPC UA connectivity, and industrial automation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "OPC UA Server",
                description:
                  "Build universal OPC servers in minutes with SIOTH® technology. Enterprise-grade connectivity for industrial systems.",
              },
              {
                title: "IT-OT Integration",
                description:
                  "Seamlessly bridge Information Technology and Operational Technology systems for unified data flow.",
              },
              {
                title: "AI-Powered Analytics",
                description:
                  "Leverage artificial intelligence for predictive maintenance and intelligent system optimization.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-700 bg-slate-800/50 p-8 hover:border-orange-500/50 transition"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">OPC Products</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Comprehensive suite of OPC solutions for industrial connectivity
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "OPC UA Server",
              "OPC DA Server",
              "OPC XML-DA",
              "SIOTH Engine",
              "Data Gateway",
              "Cloud Connector",
              "Mobile Access",
              "Security Suite",
            ].map((product, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-slate-700 bg-slate-800/50 p-6 text-center hover:border-orange-500/50 transition cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 mx-auto mb-3 group-hover:bg-orange-500/40 transition flex items-center justify-center">
                  <div className="w-6 h-6 bg-orange-500 rounded-sm"></div>
                </div>
                <p className="font-medium text-slate-200">{product}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-800 to-slate-900 border-t border-slate-700">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your OPC Solution?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Download SIOTH® today and start building enterprise-grade OPC UA servers in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-8 py-3 font-medium hover:bg-orange-600 transition">
              Download SIOTH <ArrowRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-600 text-white px-8 py-3 font-medium hover:bg-slate-800 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-orange-500 rounded-sm"></div>
                <span className="font-bold text-white">IntegrationObjects</span>
              </div>
              <p className="text-sm text-slate-400">Enterprise OPC and IT-OT integration solutions</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Products</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    OPC Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    SIOTH Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    IT-OT Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <p>&copy; 2025 IntegrationObjects. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
