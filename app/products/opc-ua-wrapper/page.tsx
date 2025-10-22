"use client"

import { Menu, X, Play, Download, HelpCircle, ChevronRight, Zap, Shield, Layers } from "lucide-react"
import { useState } from "react"

export default function OPCUAWrapperPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-6 bg-blue-500 rounded-sm"></div>
                <span className="text-sm font-bold text-slate-900">bexon</span>
              </div>
              <span className="text-sm font-bold text-slate-500">theme</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                IT-OT Integration
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                AI
              </a>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 transition font-medium">
                OPC Products
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Resources
              </a>
              <a href="#" className="text-sm text-slate-600 hover:text-slate-900 transition">
                Contact
              </a>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button className="hidden md:block rounded-lg bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition">
                Download
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-600 hover:text-slate-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#" className="block text-sm text-slate-600 hover:text-slate-900 transition py-2">
                IT-OT Integration
              </a>
              <a href="#" className="block text-sm text-slate-600 hover:text-slate-900 transition py-2">
                AI
              </a>
              <a href="#" className="block text-sm text-blue-600 hover:text-blue-700 transition py-2 font-medium">
                OPC Products
              </a>
              <a href="#" className="block text-sm text-slate-600 hover:text-slate-900 transition py-2">
                Resources
              </a>
              <button className="w-full rounded-lg bg-blue-600 text-white px-6 py-2 text-sm font-medium hover:bg-blue-700 transition mt-4">
                Download
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Sidebar - Product Menu */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden sticky top-24 shadow-sm">
                <div className="bg-gradient-to-r from-blue-50 to-teal-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                  <h3 className="font-bold text-slate-900">OPC Products</h3>
                  <span className="text-blue-600">▼</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <span>⊕</span> OPC UA
                  </div>
                  <div className="ml-4 space-y-1 text-sm">
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server for Modbus
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server for SNMP
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server for DNP3
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Universal Server
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Bridge
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server Simulator – Full Edition
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server Toolkit
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA IoT Broker
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server for Databases
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Client Toolkit
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Server Simulator
                    </a>
                    <a href="#" className="block text-slate-600 hover:text-blue-600 transition">
                      OPC UA Proxy
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block mt-3 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
                  >
                    ▶ OPC UA Wrapper
                  </a>
                  <a href="#" className="block text-slate-600 hover:text-blue-600 transition text-sm">
                    OPC UA Client
                  </a>
                </div>
                <div className="border-t border-slate-200 px-4 py-3">
                  <div className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <span>⊕</span> OPC Tunneling
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance text-slate-900">
                OPC UA Wrapper
              </h1>

              {/* Demo Video Section */}
              <div className="flex items-center gap-3 mb-8 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition shadow-sm">
                <Play className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-medium">Watch Demo Videos</span>
              </div>

              {/* Main Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    Migrate to OPC Unified Architecture (OPC UA) seamlessly
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The <span className="font-semibold text-slate-900">OPC UA Wrapper</span> is a plug-and-play software
                    designed for seamless integration between OPC DA (Data Access), OPC HDA (Historical Data Access),
                    OPC AE (Alarms and Events) and OPC UA (Unified Architecture) systems. This software provides a
                    reliable and secure bridge between <span className="font-semibold text-slate-900">OPC Classic</span>{" "}
                    (COM/
                    <span className="text-blue-600">DCOM</span>-based OPC) servers and{" "}
                    <span className="font-semibold text-slate-900">OPC UA</span> clients, and vice versa.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6 text-slate-900">Key Components</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition">
                      <div className="text-blue-600 font-bold text-lg flex-shrink-0">▶</div>
                      <div>
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-900">OPC UA Wrapper</span> acts as a bridge between
                          OPC Classic servers and OPC UA clients. It maps the address space of OPC Classic servers to
                          the address space of an OPC UA server.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-white rounded-lg border border-slate-200 hover:border-blue-300 transition">
                      <div className="text-blue-600 font-bold text-lg flex-shrink-0">▶</div>
                      <div>
                        <p className="text-slate-600">
                          <span className="font-semibold text-slate-900">OPC UA Proxy</span> acts as a bridge between
                          OPC UA servers and OPC Classic clients, enabling seamless data exchange across different OPC
                          protocols.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-teal-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    This OPC UA add-on can read and write OPC item values, read historical data, read and acknowledge
                    alarms and events. It can also manage security, authentication settings, and certificates.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    It supports OPC Data Access (OPC DA), OPC Historical Data Access (OPC HDA), and OPC Alarms & Events
                    (OPC AE) specifications, ensuring robust communication across both modern and legacy systems.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 transition">
                    <Zap className="w-6 h-6 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">Fast Integration</h4>
                    <p className="text-sm text-slate-600">Plug-and-play setup for quick deployment</p>
                  </div>
                  <div className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 transition">
                    <Shield className="w-6 h-6 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">Secure</h4>
                    <p className="text-sm text-slate-600">Enterprise-grade security and encryption</p>
                  </div>
                  <div className="bg-white rounded-lg border border-slate-200 p-4 hover:border-blue-300 transition">
                    <Layers className="w-6 h-6 text-blue-600 mb-3" />
                    <h4 className="font-semibold text-slate-900 mb-2">Compatible</h4>
                    <p className="text-sm text-slate-600">Works with OPC DA, HDA, and AE systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Sidebar CTA - Sticky */}
      <div className="fixed right-4 top-32 md:flex flex-col gap-3 hidden z-40">
        <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
          <span>Buy Now</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 text-white px-6 py-3 font-medium hover:bg-teal-700 transition shadow-lg hover:shadow-xl">
          <Download className="w-4 h-4" />
          <span>Download</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-slate-200 text-slate-900 px-6 py-3 font-medium hover:bg-slate-300 transition shadow-lg hover:shadow-xl">
          <span>Ask Us</span>
        </button>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-slate-200 text-slate-900 px-6 py-3 font-medium hover:bg-slate-300 transition shadow-lg hover:shadow-xl">
          <HelpCircle className="w-4 h-4" />
          <span>FAQs</span>
        </button>
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Download the OPC UA Wrapper today and seamlessly bridge your OPC Classic and OPC UA systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-white text-blue-600 px-8 py-3 font-medium hover:bg-blue-50 transition">
              Download Now <ChevronRight className="w-4 h-4" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-lg border-2 border-white text-white px-8 py-3 font-medium hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-blue-600 rounded-sm"></div>
                <span className="font-bold text-slate-900">bexon</span>
              </div>
              <p className="text-sm text-slate-600">Modern design system for enterprise applications</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Products</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    OPC Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    SIOTH Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    IT-OT Integration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
            <p>&copy; 2025 bexon. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-600 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-600 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
