import ServiceCard from "@/components/ServiceCard";
import {
  Wrench,
  Droplets,
  Braces,
  Settings,
  Sparkles,
  Scan,
  Battery,
  Airplay,
  Zap,
  Shield,
  Thermometer,
  Radio,
} from "lucide-react";

const allServices = [
  {
    icon: Wrench,
    title: "Engine Repair & Rebuild",
    description:
      "Complete engine diagnostics, repair, and rebuilding services for all makes and models.",
    features: [
      "Engine Diagnostics",
      "Complete Overhaul",
      "Cylinder Head Repair",
      "Timing Belt Replacement",
      "Performance Tuning",
    ],
    price: "299+",
  },
  {
    icon: Droplets,
    title: "Oil & Fluid Services",
    description:
      "Comprehensive fluid maintenance with premium synthetic oils and genuine filters.",
    features: [
      "Synthetic Oil Change",
      "Filter Replacement",
      "Transmission Fluid",
      "Coolant Flush",
      "Brake Fluid",
    ],
    price: "89",
  },
  {
    icon: Braces,
    title: "Brake System Service",
    description:
      "Complete brake inspection, repair, and replacement ensuring optimal stopping power.",
    features: [
      "Brake Pad Replacement",
      "Rotor Resurfacing",
      "Caliper Service",
      "ABS System Repair",
      "Brake Fluid Flush",
    ],
    price: "199+",
  },
  {
    icon: Settings,
    title: "Suspension & Alignment",
    description:
      "Precision wheel alignment and suspension services for smooth, safe driving.",
    features: [
      "Four-Wheel Alignment",
      "Wheel Balancing",
      "Strut Replacement",
      "Shock Absorbers",
      "Suspension Tuning",
    ],
    price: "129",
  },
  {
    icon: Sparkles,
    title: "Professional Detailing",
    description:
      "Interior and exterior detailing to restore and protect your vehicle's appearance.",
    features: [
      "Interior Deep Clean",
      "Paint Correction",
      "Ceramic Coating",
      "Headlight Restoration",
      "Leather Treatment",
    ],
    price: "199+",
  },
  {
    icon: Scan,
    title: "Advanced Diagnostics",
    description:
      "State-of-the-art computer diagnostics for all modern vehicle systems.",
    features: [
      "Computer Scanning",
      "Electrical System",
      "Performance Analysis",
      "Emissions Testing",
      "Factory Reset",
    ],
    price: "99",
  },
  {
    icon: Battery,
    title: "Electrical Systems",
    description:
      "Complete electrical system repair including battery, alternator, and wiring.",
    features: [
      "Battery Replacement",
      "Alternator Repair",
      "Starter Motor",
      "Wiring Harness",
      "Lighting Systems",
    ],
    price: "149+",
  },
  {
    icon: Airplay,
    title: "AC & Heating Repair",
    description:
      "Complete climate control system service for optimal comfort year-round.",
    features: [
      "AC Recharge",
      "Compressor Repair",
      "Heater Core",
      "Blower Motor",
      "Climate Control",
    ],
    price: "179+",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2070"
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Comprehensive automotive services using state-of-the-art equipment
            and certified technicians.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              All Services Include Our Premium Warranty
            </h2>
            <p className="text-gray-400 mb-8">
              Every service comes with our 24-month/24,000-mile warranty. We
              stand behind our work with confidence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">24 Months</div>
                <div className="text-gray-400">Service Warranty</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">24,000 Miles</div>
                <div className="text-gray-400">Warranty Coverage</div>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-2xl font-bold mb-2">Nationwide</div>
                <div className="text-gray-400">Transferable Warranty</div>
              </div>
            </div>
            <button className="btn-primary text-lg px-8 py-4">
              Schedule Service Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
