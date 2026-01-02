import { Target, Eye, Calendar, Users, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2070"
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            For over 15 years, AutoElite has been providing premium automotive
            services with integrity, expertise, and customer-focused care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-effect rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                To provide exceptional automotive services that exceed customer
                expectations through technical expertise, transparent
                communication, and state-of-the-art technology.
              </p>
              <ul className="space-y-2">
                {[
                  "Quality Service",
                  "Customer Satisfaction",
                  "Technical Excellence",
                  "Fair Pricing",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-effect rounded-xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/20 p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-heading font-semibold">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-400 mb-4">
                To become the most trusted automotive service provider in the
                region, recognized for innovation, reliability, and
                customer-centric approach.
              </p>
              <ul className="space-y-2">
                {[
                  "Industry Leadership",
                  "Community Partnership",
                  "Sustainable Practices",
                  "Continuous Innovation",
                ].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <CheckCircle className="h-5 w-5 text-accent mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                State-of-the-Art Workshop
              </h2>
              <p className="text-gray-400 mb-6">
                Our 10,000 sq ft facility is equipped with the latest diagnostic
                equipment and tools. We maintain a clean, organized environment
                that reflects our commitment to excellence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Calendar, label: "15+ Years Experience" },
                  { icon: Users, label: "Certified Technicians" },
                  { icon: Award, label: "ASE Certified" },
                  { icon: CheckCircle, label: "Warranty Backed" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <span className="text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1621461133947-f63381c2f7f8?auto=format&fit=crop&w=600"
                alt="Workshop 1"
                className="rounded-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w-600"
                alt="Workshop 2"
                className="rounded-lg h-48 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=600"
                alt="Workshop 3"
                className="rounded-lg h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=600"
                alt="Workshop 4"
                className="rounded-lg h-48 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
