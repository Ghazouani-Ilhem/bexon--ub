"use client"

import { Menu, X, Play, Download, HelpCircle } from "lucide-react"
import { useState } from "react"

export default function OPCUAWrapperPage() {
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
                <span className="text-sm font-bold text-slate-300">IntegrationObjects</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                IT-OT Integration
              </a>
              <a href="#" className="text-sm text-slate-300 hover:text-white transition">
                AI
              </a>
              <a href="#" className="text-sm text-orange-400 hover:text-orange-300 transition font-medium">
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
              <a href="#" className="block text-sm text-orange-400 hover:text-orange-300 transition py-2 font-medium">
                OPC Products
              </a>
              <a href="#" className="block text-sm text-slate-300 hover:text-white transition py-2">
                Resources
              </a>
              <button className="w-full rounded-lg bg-orange-500 text-white px-6 py-2 text-sm font-medium hover:bg-orange-600 transition mt-4">
                Download SIOTH
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Sidebar - Product Menu */}
            <div className="md:col-span-1">
              <div className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden sticky top-24">
                <div className="bg-slate-700 px-4 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-white">OPC Products</h3>
                  <span className="text-orange-400">▼</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <span>⊕</span> OPC UA
                  </div>
                  <div className="ml-4 space-y-1 text-sm">
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server for Modbus
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server for SNMP
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server for DNP3
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Universal Server
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Bridge
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server Simulator – Full Edition
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server Toolkit
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA IoT Broker
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server for Databases
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Client Toolkit
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Server Simulator
                    </a>
                    <a href="#" className="block text-slate-400 hover:text-white transition">
                      OPC UA Proxy
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block mt-3 px-3 py-2 bg-orange-500 text-white text-sm font-medium rounded hover:bg-orange-600 transition"
                  >
                    ▶ OPC UA Wrapper
                  </a>
                  <a href="#" className="block text-slate-400 hover:text-white transition text-sm">
                    OPC UA Client
                  </a>
                </div>
                <div className="border-t border-slate-700 px-4 py-3">
                  <div className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                    <span>⊕</span> OPC Tunneling
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-balance">OPC UA Wrapper</h1>

              {/* Demo Video Section */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Play className="w-5 h-5 text-orange-400" />
                <span className="text-slate-300 font-medium">Watch Demo Videos</span>
              </div>

              {/* Main Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Migrate to OPC Unified Architecture (OPC UA) seamlessly with the OPC UA Wrapper
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Integration Objects' <span className="font-semibold text-white">OPC UA Wrapper</span> is a
                    plug-and-play software designed for seamless integration between OPC DA (Data Access), OPC HDA
                    (Historical Data Access), OPC AE (Alarms and Events) and OPC UA (Unified Architecture) systems. This
                    OPC UA software provides a reliable and secure bridge between{" "}
                    <span className="font-semibold text-white">OPC Classic</span> (COM/
                    <span className="text-orange-400">DCOM</span>-based OPC) servers and{" "}
                    <span className="font-semibold text-white">OPC UA</span> clients, and vice versa.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">Key Components of the OPC UA Wrapper</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="text-orange-400 font-bold text-lg">▶</div>
                      <div>
                        <p className="text-slate-300">
                          <span className="font-semibold text-white">OPC UA Wrapper</span> that acts as a bridge between
                          OPC Classic servers and OPC UA clients. It maps the address space of OPC Classic servers to
                          the address space of an OPC UA server.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-orange-400 font-bold text-lg">▶</div>
                      <div>
                        <p className="text-slate-300">
                          <span className="font-semibold text-white text-orange-400">OPC UA Proxy</span> that acts as a
                          bridge between OPC UA servers and OPC Classic clients, enabling seamless data exchange across
                          different OPC protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <p className="text-slate-300 leading-relaxed mb-4">
                    This OPC UA add-on can read and write OPC item values, read historical data, read and acknowledge
                    alarms and events. It can also manage security, authentication settings, and certificates.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    It supports OPC Data Access (OPC DA), OPC Historical Data Access (OPC HDA), and OPC Alarms & Events
                    (OPC AE) specifications, ensuring robust communication across both modern and legacy systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Sidebar CTA - Sticky */}
      <div className="fixed right-4 top-32 md:flex flex-col gap-3 hidden z-40">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition shadow-lg">
          <span>Buy Now</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition shadow-lg">
          <Download className="w-4 h-4" />
          <span>Download</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition shadow-lg">
          <span>Ask Us a Question</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 text-white px-6 py-3 font-medium hover:bg-orange-600 transition shadow-lg">
          <HelpCircle className="w-4 h-4" />
          <span>FAQs</span>
        </button>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-900/50 py-12 mt-20">
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
