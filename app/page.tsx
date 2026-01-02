import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";
import {
  Wrench,
  Droplets,
  Braces,
  Settings,
  Sparkles,
  Scan,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Engine Repair",
    description:
      "Complete engine diagnostics and repair services using state-of-the-art equipment.",
    features: ["Engine Diagnostics", "Complete Overhaul", "Performance Tuning"],
  },
  {
    icon: Droplets,
    title: "Oil Change",
    description:
      "Premium oil change service with synthetic oil options for optimal engine performance.",
    features: ["Synthetic Oil", "Filter Replacement", "Fluid Check"],
  },
  {
    icon: Braces,
    title: "Brake Service",
    description:
      "Comprehensive brake inspection, repair, and replacement for your safety.",
    features: ["Brake Pad Replacement", "Rotor Resurfacing", "System Bleeding"],
  },
  {
    icon: Settings,
    title: "Wheel Alignment",
    description:
      "Precision wheel alignment services to ensure smooth driving and tire longevity.",
    features: ["Four-Wheel Alignment", "Tire Balancing", "Suspension Check"],
  },
  {
    icon: Sparkles,
    title: "Car Detailing",
    description:
      "Professional interior and exterior detailing to restore your car's showroom shine.",
    features: ["Interior Deep Clean", "Paint Correction", "Ceramic Coating"],
  },
  {
    icon: Scan,
    title: "Diagnostics",
    description:
      "Advanced computer diagnostics to identify and fix complex vehicle issues.",
    features: [
      "Computer Scanning",
      "Electrical System",
      "Performance Analysis",
    ],
  },
];

const testimonials = [
  {
    name: "Michael Rodriguez",
    car: "2022 BMW M3",
    rating: 5,
    comment:
      "Exceptional service! My BMW runs better than ever. The team is professional and transparent about all costs.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100",
  },
  {
    name: "Sarah Johnson",
    car: "2021 Tesla Model 3",
    rating: 5,
    comment:
      "As an EV owner, I was worried about finding specialized service. AutoElite exceeded my expectations!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100",
  },
  {
    name: "James Wilson",
    car: "2019 Ford F-150",
    rating: 5,
    comment:
      "They handled my truck's suspension issues perfectly. Fair pricing and quick turnaround.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100",
  },
];

const stats = [
  { icon: Clock, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10K+", label: "Happy Customers" },
  { icon: Award, value: "50+", label: "Certified Mechanics" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee" },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Premium Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer a comprehensive range of automotive services using the
              latest technology and tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose AutoElite
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine expertise, technology, and customer care for an
              unparalleled service experience.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/5 p-4 rounded-full inline-block mb-4">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="bg-accent/20 text-accent font-bold px-4 py-2 rounded-full inline-block mb-4">
                  LIMITED TIME OFFER
                </div>
                <h3 className="text-3xl font-heading font-bold mb-4">
                  20% Off Complete Car Service Package
                </h3>
                <p className="text-gray-400 mb-6">
                  Includes oil change, brake inspection, wheel alignment, and
                  full diagnostics. Valid until December 31st.
                </p>
                <button className="btn-primary">Claim Offer</button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-xl" />
                <img
                  src="https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?auto=format&fit=crop&w=800"
                  alt="Car Service Special"
                  className="rounded-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied
              customers have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2070"
                alt="Car Service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
            </div>

            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready for Premium Service?
              </h3>
              <p className="text-gray-300 mb-8 max-w-xl">
                Schedule your appointment today and experience the AutoElite
                difference. Your vehicle deserves the best care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary">Book Now</button>
                <button className="btn-secondary">Call: (555) 123-4567</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
