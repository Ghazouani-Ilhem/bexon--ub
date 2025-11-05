import { Button } from "@/components/ui/button"
import { ChevronRight, Zap, Users, Rocket, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-border/40 bg-background/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            v0
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Why v0
            </a>
            <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Impact
            </a>
          </div>
          <Button className="rounded-full px-6 bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </nav>

      <section className="relative px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="text-sm font-medium text-primary">New Release</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
              <span className="text-foreground">Build the web</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                at the speed of thought
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
              Transform your ideas into production-ready applications. With AI-powered design and development, create
              stunning web experiences in minutes, not weeks.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground group"
            >
              Start Building Now
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 border-primary/30 hover:bg-primary/5 text-foreground bg-transparent"
            >
              Explore Documentation
            </Button>
          </div>
        </div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20"></div>
        </div>
      </section>

      <section id="features" className="relative px-4 sm:px-6 lg:px-8 py-20 border-y border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Powerful Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build production-ready applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with instant deployments and industry-leading build times",
              },
              {
                icon: Users,
                title: "Collaborative",
                description: "Real-time collaboration features keep your team aligned and productive",
              },
              {
                icon: Rocket,
                title: "Ship Faster",
                description: "From concept to production in minutes with AI-powered code generation",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-border hover:border-primary/50 bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold text-balance leading-tight">Why choose v0?</h2>
              <div className="space-y-4">
                {[
                  "AI-powered code generation",
                  "Beautiful component library",
                  "Production-ready instantly",
                  "Deploy anywhere with Vercel",
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary/30 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-lg text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="rounded-full px-8 h-12 mt-8 bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/15 to-accent/10 rounded-3xl p-12 border border-primary/20 aspect-square flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
                <div className="relative text-center space-y-4 z-10">
                  <Rocket className="w-20 h-20 text-primary/80 mx-auto" />
                  <p className="text-2xl font-semibold text-foreground">Ready to launch?</p>
                  <p className="text-muted-foreground">Get started in seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Trusted by developers worldwide</h2>
            <p className="text-lg opacity-90">Join thousands of developers building faster with v0</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { stat: "10K+", label: "Active Developers" },
              { stat: "50M+", label: "Components Generated" },
              { stat: "99.9%", label: "Platform Uptime" },
            ].map((item, idx) => (
              <div key={idx} className="text-center group hover:scale-105 transition-transform">
                <div className="text-6xl font-bold mb-2 group-hover:text-accent transition-colors">{item.stat}</div>
                <p className="text-sm opacity-90">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-balance">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join the community of developers building the future of web development with v0
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Get Started for Free
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="font-bold text-lg bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                v0
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Build the web faster with AI-powered development
              </p>
            </div>
            {[
              { title: "Product", links: ["Features", "Pricing", "Security", "Blog"] },
              { title: "Resources", links: ["Documentation", "Examples", "Community", "Support"] },
              { title: "Company", links: ["About", "Contact", "Careers", "Terms"] },
            ].map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-semibold text-foreground">{col.title}</h4>
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

          <div className="border-t border-border/40 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-muted-foreground">© 2025 v0. All rights reserved.</p>
            <div className="flex gap-6">
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
