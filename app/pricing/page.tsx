import PricingCard from "@/components/PricingCard";
import { Check, Shield, Clock, Users, Award } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=2070"
            alt="Pricing Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            No hidden fees. Quality service at fair prices with our premium
            warranty included.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <PricingCard
              title="Basic Service"
              price={89}
              description="Essential maintenance for your vehicle"
              features={[
                "Oil & Filter Change",
                "Tire Rotation",
                "Fluid Level Check",
                "Basic Inspection",
                "12-month Warranty",
              ]}
              excluded={[
                "Engine Diagnostics",
                "Brake Inspection",
                "Alignment Check",
              ]}
              buttonText="Choose Basic"
            />

            <PricingCard
              title="Premium Service"
              price={199}
              description="Complete check-up and maintenance"
              features={[
                "Everything in Basic",
                "Brake Inspection",
                "Wheel Alignment",
                "Engine Diagnostics",
                "Battery Test",
                "24-month Warranty",
              ]}
              excluded={["Major Repairs", "Detailing Services"]}
              popular={true}
              buttonText="Choose Premium"
            />

            <PricingCard
              title="Full Inspection"
              price={149}
              description="Comprehensive vehicle inspection"
              features={[
                "150-Point Inspection",
                "Computer Diagnostics",
                "Brake System Check",
                "Suspension Analysis",
                "Electrical Test",
                "Detailed Report",
              ]}
              excluded={["Repairs Included", "Parts Replacement"]}
              buttonText="Schedule Inspection"
            />
          </div>

          {/* Service Packages */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Service Packages
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Oil Change Package",
                  price: 129,
                  includes: [
                    "Synthetic Oil",
                    "Filter",
                    "Multi-point Inspection",
                  ],
                  duration: "30 min",
                },
                {
                  title: "Brake Service Package",
                  price: 299,
                  includes: ["Brake Pads", "Rotor Resurfacing", "Brake Fluid"],
                  duration: "2-3 hours",
                },
                {
                  title: "Detailing Package",
                  price: 249,
                  includes: [
                    "Interior/Exterior",
                    "Paint Protection",
                    "Engine Bay",
                  ],
                  duration: "3-4 hours",
                },
                {
                  title: "Winter Prep Package",
                  price: 179,
                  includes: ["Tire Change", "Battery Test", "Fluid Check"],
                  duration: "1 hour",
                },
              ].map((packageItem, index) => (
                <div key={index} className="glass-effect rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {packageItem.title}
                  </h3>
                  <div className="text-2xl font-bold mb-4">
                    ${packageItem.price}
                  </div>
                  <ul className="space-y-2 mb-4">
                    {packageItem.includes.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <Check className="h-4 w-4 text-accent mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-gray-400">
                    Duration: {packageItem.duration}
                  </div>
                  <button className="btn-secondary w-full mt-4 text-sm py-2">
                    Book Package
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Our Prices */}
          <div className="glass-effect rounded-2xl p-8">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">
              Why Choose AutoElite
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-accent/20 p-4 rounded-full inline-block mb-4">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Premium Warranty</h3>
                <p className="text-gray-400 text-sm">
                  24-month warranty on all services
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/20 p-4 rounded-full inline-block mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Certified Technicians</h3>
                <p className="text-gray-400 text-sm">
                  ASE certified master technicians
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/20 p-4 rounded-full inline-block mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                <p className="text-gray-400 text-sm">
                  No hidden fees or surprises
                </p>
              </div>

              <div className="text-center">
                <div className="bg-accent/20 p-4 rounded-full inline-block mb-4">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Quality Parts</h3>
                <p className="text-gray-400 text-sm">
                  OEM or better quality parts only
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                question: "Are your prices all-inclusive?",
                answer:
                  "Yes, our prices include parts, labor, and taxes. No hidden fees.",
              },
              {
                question: "Do you offer financing options?",
                answer:
                  "Yes, we offer flexible financing options for major repairs through our partners.",
              },
              {
                question: "Can I get a quote before service?",
                answer:
                  "Absolutely! We provide free, no-obligation quotes for all services.",
              },
              {
                question: "What is your cancellation policy?",
                answer:
                  "We require 24-hour notice for cancellations. Same-day cancellations may incur a fee.",
              },
              {
                question: "Do you work on all vehicle makes and models?",
                answer:
                  "Yes, we service all domestic and import vehicles, including electric vehicles.",
              },
            ].map((faq, index) => (
              <div key={index} className="glass-effect rounded-lg p-6">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
