"use client"

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { TrendingUp, Clock, Users, Sparkles, Zap, Phone, Clock24, BarChart3, Settings, Shield, MessageSquare, Brain, Star } from "lucide-react";

export default function AIBusinessPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="medium"
      background="animatedAurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="AI Automation Hub"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622954813-odwb7qgu.jpg"
          logoAlt="AI Automation Hub Logo"
          button={{
            text: "Request Demo",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Transform Your Business with AI-Powered Solutions"
          description="Implement voice agents, AI automations, and intelligent chatbots to streamline operations, reduce costs, and delight customers. Built specifically for small businesses."
          tag="AI Innovation"
          tagIcon={Zap}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622955810-jl00pr5o.jpg"
          imageAlt="AI voice technology interface"
          imagePosition="right"
          buttons={[
            {
              text: "Start Free Trial",
              href: "contact"
            },
            {
              text: "Watch Demo",
              href: "#features"
            }
          ]}
        />
      </div>

      <div id="about-metrics" data-section="about-metrics">
        <AboutMetric
          title="Why businesses choose AI Automation Hub for their digital transformation journey"
          metrics={[
            {
              icon: TrendingUp,
              label: "Efficiency Gain",
              value: "60%+"
            },
            {
              icon: Clock,
              label: "Hours Saved Weekly",
              value: "15+"
            },
            {
              icon: Users,
              label: "Business Clients",
              value: "500+"
            },
            {
              icon: Sparkles,
              label: "Implementation Speed",
              value: "48hrs"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTen
          title="Comprehensive AI Solutions"
          description="Everything you need to automate and optimize your business operations"
          tag="Services"
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              id: "1",
              title: "Voice Agents",
              description: "AI-powered voice systems that handle customer calls, schedule appointments, and provide instant support 24/7 without human intervention",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622956589-f6naxlif.jpg"
              },
              items: [
                {
                  icon: Phone,
                  text: "Natural conversation handling"
                },
                {
                  icon: Clock24,
                  text: "Round-the-clock availability"
                },
                {
                  icon: BarChart3,
                  text: "Call analytics and reporting"
                }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "AI Automations",
              description: "Intelligent workflow automation that eliminates repetitive tasks, reduces errors, and frees your team to focus on strategic work",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622957310-ihoohq8t.jpg"
              },
              items: [
                {
                  icon: Zap,
                  text: "Lightning-fast process execution"
                },
                {
                  icon: Shield,
                  text: "Error-free automation"
                },
                {
                  icon: Settings,
                  text: "Custom workflow integration"
                }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Intelligent Chatbots",
              description: "Smart conversational AI that answers customer questions, qualifies leads, and provides personalized experiences across all channels",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622957800-evpv4830.jpg"
              },
              items: [
                {
                  icon: MessageSquare,
                  text: "Multi-channel deployment"
                },
                {
                  icon: Brain,
                  text: "Machine learning optimization"
                },
                {
                  icon: Zap,
                  text: "Instant response capability"
                }
              ],
              reverse: false
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Success Stories from Our Clients"
          description="See how small businesses are transforming with AI automation"
          tag="Testimonials"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              handle: "@sarahm_founder",
              testimonial: "We implemented voice agents for customer support and saw a 70% reduction in call handling costs within the first month. The setup was incredibly smooth.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622958298-gx06xn1p.jpg",
              imageAlt: "Sarah Mitchell portrait"
            },
            {
              id: "2",
              name: "James Rodriguez",
              handle: "@james_ceo",
              testimonial: "The chatbot integration saved our team 15+ hours per week on repetitive customer inquiries. AI Automation Hub made it simple and affordable.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622958961-hd2d7e5u.jpg",
              imageAlt: "James Rodriguez portrait"
            },
            {
              id: "3",
              name: "Emily Chen",
              handle: "@emilychen_ops",
              testimonial: "Automating our lead qualification process was a game-changer. We're now handling 3x more leads with the same team size.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622959517-t3htsv2e.jpg",
              imageAlt: "Emily Chen portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              handle: "@dthompson_biz",
              testimonial: "Customer support quality improved dramatically while costs went down. This is what digital transformation should feel like for small businesses.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622960288-yywvi1is.jpg",
              imageAlt: "David Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Simple Transparent Pricing"
          description="Choose the plan that fits your business needs. All plans include setup support and training."
          tag="Pricing"
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "starter",
              price: "$299/mo",
              name: "Starter",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#faq"
                }
              ],
              features: [
                "1 Chatbot or Voice Agent",
                "Up to 1,000 monthly interactions",
                "Basic analytics dashboard",
                "Email support",
                "Monthly optimization"
              ]
            },
            {
              id: "professional",
              badge: "Most Popular",
              badgeIcon: Star,
              price: "$799/mo",
              name: "Professional",
              buttons: [
                {
                  text: "Get Started",
                  href: "contact"
                },
                {
                  text: "Schedule Demo",
                  href: "contact"
                }
              ],
              features: [
                "3 AI Solutions deployed",
                "Up to 10,000 monthly interactions",
                "Advanced analytics & insights",
                "Priority support",
                "Weekly optimization",
                "Custom integrations"
              ]
            },
            {
              id: "enterprise",
              price: "Custom",
              name: "Enterprise",
              buttons: [
                {
                  text: "Contact Sales",
                  href: "contact"
                },
                {
                  text: "Request Quote",
                  href: "contact"
                }
              ],
              features: [
                "Unlimited AI solutions",
                "Unlimited interactions",
                "Custom dedicated dashboard",
                "24/7 dedicated support",
                "Daily optimization & monitoring",
                "Full API access",
                "White-label options"
              ]
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Get answers to common questions about AI implementation and our services"
          tag="Help"
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does it take to implement AI solutions?",
              content: "Most implementations are completed within 48 hours. We handle all the technical setup, integration, and training. Your team can start using voice agents or chatbots immediately."
            },
            {
              id: "2",
              title: "Do I need technical expertise to use these solutions?",
              content: "Not at all. Our platform is designed for business users. No coding required. We provide complete training and ongoing support to ensure your team gets maximum value."
            },
            {
              id: "3",
              title: "Can these AI solutions integrate with my existing systems?",
              content: "Yes. We integrate with most popular business tools including CRM systems, helpdesk platforms, scheduling software, and custom databases. We handle all integration work."
            },
            {
              id: "4",
              title: "What kind of ROI can we expect?",
              content: "Most clients see 40-70% reduction in operational costs within the first month. Average payback period is 6-8 weeks. We provide detailed analytics to track your exact ROI."
            },
            {
              id: "5",
              title: "Is my customer data secure?",
              content: "Absolutely. We use enterprise-grade encryption, comply with GDPR and CCPA, and conduct regular security audits. Your data is stored securely and never shared with third parties."
            },
            {
              id: "6",
              title: "Can I customize the voice or chatbot responses?",
              content: "Yes. You have full control over conversation flows, responses, and escalation rules. Our dashboard lets you customize everything without touching code."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Transform Your Business?"
          description="Schedule a personalized demo with our team. We'll show you exactly how AI automation can save time and money for your business."
          inputs={[
            {
              name: "company",
              type: "text",
              placeholder: "Your Company Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Business Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "focus",
              type: "text",
              placeholder: "Primary Focus (Voice Agents / Automations / Chatbots)",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your current challenges and goals...",
            rows: 4,
            required: false
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622961080-1suk92po.jpg"
          imageAlt="Business transformation illustration"
          mediaPosition="right"
          buttonText="Schedule Demo"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764622954813-odwb7qgu.jpg"
          copyrightText="© 2025 AI Automation Hub. All rights reserved."
          columns={[
            {
              title: "Product",
              items: [
                {
                  label: "Voice Agents",
                  href: "#features"
                },
                {
                  label: "AI Automations",
                  href: "#features"
                },
                {
                  label: "Chatbots",
                  href: "#features"
                },
                {
                  label: "Pricing",
                  href: "#pricing"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About",
                  href: "#about-metrics"
                },
                {
                  label: "Blog",
                  href: "#"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Security",
                  href: "#"
                },
                {
                  label: "Compliance",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}