"use client"

import { useState, useMemo } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { SearchIcon } from "lucide-react"

// Sample FAQ data with categories
const faqData = [
  {
    id: 1,
    category: "Getting Started",
    question: "What is Bexon?",
    answer:
      "Bexon is a modern platform designed to help you build and deploy web applications with ease using Next.js and cutting-edge technologies.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How do I get started with Bexon?",
    answer:
      "Simply sign up on our platform, connect your GitHub repository, and follow our onboarding guide to deploy your first application.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Is Bexon free to use?",
    answer:
      "Yes! Bexon offers a free tier with all essential features. You can upgrade to a paid plan for additional resources and priority support.",
  },
  {
    id: 4,
    category: "Deployment",
    question: "How do I deploy my application?",
    answer:
      "You can deploy your application with a single click. Our platform automatically builds and deploys your code whenever you push to your repository.",
  },
  {
    id: 5,
    category: "Deployment",
    question: "Can I use custom domains?",
    answer:
      "You can configure custom domains in the project settings. We support both root and subdomain configurations.",
  },
  {
    id: 6,
    category: "Deployment",
    question: "What happens if my deployment fails?",
    answer:
      "You will receive an email notification with detailed error logs. Our support team is also available to help troubleshoot deployment issues.",
  },
  {
    id: 7,
    category: "Billing",
    question: "How is billing calculated?",
    answer:
      "Billing is based on your plan tier and resource usage. You can view detailed usage metrics in your account dashboard.",
  },
  {
    id: 8,
    category: "Billing",
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    id: 9,
    category: "Support",
    question: "How do I contact support?",
    answer:
      "You can reach our support team through email, chat, or the help center. Premium users get priority support with faster response times.",
  },
  {
    id: 10,
    category: "Support",
    question: "Is there documentation available?",
    answer:
      "Yes, we have comprehensive documentation, tutorials, and API references. Visit our docs portal for more information.",
  },
]

const categories = ["All", ...Array.from(new Set(faqData.map((item) => item.category)))]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  // Filter FAQs based on category and search query
  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const categoryMatch = selectedCategory === "All" || item.category === selectedCategory
      const searchMatch =
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, searchQuery])

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="p-4 border-b">
          <h1 className="text-xl font-bold">Categories</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {categories.map((category) => (
              <SidebarMenuItem key={category}>
                <SidebarMenuButton
                  onClick={() => setSelectedCategory(category)}
                  isActive={selectedCategory === category}
                  className="w-full justify-start"
                >
                  <span>{category}</span>
                  <Badge variant="secondary" className="ml-auto">
                    {category === "All" ? faqData.length : faqData.filter((item) => item.category === category).length}
                  </Badge>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <div className="flex items-center gap-2 border-b p-4">
          <SidebarTrigger />
          <div className="flex-1">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="p-6 max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
              <p className="text-muted-foreground text-lg">
                {selectedCategory === "All"
                  ? "Browse all categories or search for specific answers."
                  : `Showing ${selectedCategory} questions`}
              </p>
            </div>

            {/* Results Count */}
            {searchQuery && (
              <div className="mb-4 text-sm text-muted-foreground">
                Found {filteredFAQs.length} result{filteredFAQs.length !== 1 ? "s" : ""} for "{searchQuery}"
              </div>
            )}

            {/* FAQ Accordion */}
            {filteredFAQs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full space-y-3">
                {filteredFAQs.map((item) => (
                  <Card key={item.id} className="border">
                    <AccordionItem value={`item-${item.id}`} className="border-0">
                      <AccordionTrigger className="p-4 hover:no-underline">
                        <div className="flex items-start gap-3 text-left w-full">
                          <div className="flex-1">
                            <p className="font-semibold text-base leading-snug">{item.question}</p>
                            <Badge variant="outline" className="mt-2 text-xs">
                              {item.category}
                            </Badge>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </Card>
                ))}
              </Accordion>
            ) : (
              <Card className="border dashed">
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground mb-2">No questions found</p>
                  <p className="text-sm text-muted-foreground">
                    Try adjusting your search or selecting a different category.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
