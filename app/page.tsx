import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Users, Rocket, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">v0</div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm font-medium hover:text-primary transition">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium hover:text-primary transition">
              Benefits
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition">
              Pricing
            </a>
          </div>
          <Button className="rounded-full px-6">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
            <span className="text-sm font-medium text-primary">✨ Introducing v0 Enhanced</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Build the web faster
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Create stunning, production-ready web applications with AI-powered design and development tools. Ship
            features at the speed of thought.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="rounded-full px-8 h-12">
              Start Building Now
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 bg-transparent">
              View Documentation
            </Button>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 sm:px-6 lg:px-8 py-20 bg-card/40 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with industry-leading build times and instant deployments",
              },
              {
                icon: Users,
                title: "Collaborative",
                description: "Work seamlessly with your team using real-time collaboration features",
              },
              {
                icon: Rocket,
                title: "Ship Faster",
                description: "From concept to production in minutes, not days or weeks",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl border border-border hover:border-primary/50 bg-card transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Why Choose v0?</h2>
              <div className="space-y-4">
                {[
                  "AI-powered code generation for faster development",
                  "Beautiful, pre-built component library",
                  "Production-ready in every environment",
                  "Seamless deployment to Vercel",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="rounded-full px-8 h-12 mt-6">
                Learn More
              </Button>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-12 border border-primary/20 flex items-center justify-center min-h-96">
              <div className="text-center space-y-4">
                <Rocket className="w-16 h-16 text-primary mx-auto" />
                <p className="text-xl font-semibold">Ready to launch?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by developers worldwide</h2>
            <p className="text-lg opacity-90">Join thousands of developers building faster with v0</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "10K+", label: "Active Users" },
              { stat: "50M+", label: "Components Built" },
              { stat: "99.9%", label: "Uptime" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{item.stat}</div>
                <p className="text-sm opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground">
            Join the community of developers building the future of web development
          </p>
          <Button size="lg" className="rounded-full px-8 h-12">
            Get Started for Free
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">v0</h3>
              <p className="text-sm text-muted-foreground">Build the web faster</p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security"] },
              { title: "Resources", links: ["Docs", "Blog", "Community"] },
              { title: "Company", links: ["About", "Contact", "Careers"] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 v0. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {["Twitter", "GitHub", "LinkedIn"].map((social, idx) => (
                <a key={idx} href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
