import TestimonialCard from "@/components/TestimonialCard";
import { Star, Award, ThumbsUp, TrendingUp } from "lucide-react";

export default function ReviewsPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=2070"
            alt="Reviews Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            See what our customers have to say about their AutoElite experience.
          </p>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="section-spacing">
        <div className="section-padding">
          <div className="glass-effect rounded-2xl p-8 mb-12">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <div className="text-gray-400">Overall Rating</div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">98%</div>
                <div className="flex justify-center mb-2">
                  <ThumbsUp className="h-8 w-8 text-green-500" />
                </div>
                <div className="text-gray-400">Customer Satisfaction</div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">10K+</div>
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div className="text-gray-400">Happy Customers</div>
              </div>

              <div>
                <div className="text-5xl font-bold mb-2">96%</div>
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-blue-500" />
                </div>
                <div className="text-gray-400">Return Customers</div>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">
              Rating Breakdown
            </h2>
            <div className="max-w-xl mx-auto space-y-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 w-20">
                    <span className="w-8">{rating}</span>
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 rounded-full"
                      style={{
                        width: `${
                          rating === 5
                            ? "85"
                            : rating === 4
                            ? "10"
                            : rating === 3
                            ? "3"
                            : rating === 2
                            ? "1"
                            : "1"
                        }%`,
                      }}
                    />
                  </div>
                  <div className="w-12 text-right text-gray-400">
                    {rating === 5
                      ? "85%"
                      : rating === 4
                      ? "10%"
                      : rating === 3
                      ? "3%"
                      : rating === 2
                      ? "1%"
                      : "1%"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Grid */}
          <h2 className="text-3xl font-heading font-bold mb-8 text-center">
            Recent Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
              {
                name: "Emily Chen",
                car: "2020 Mercedes-Benz C300",
                rating: 5,
                comment:
                  "The detailing service brought my car back to showroom condition. Attention to detail was impressive.",
                avatar:
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100",
              },
              {
                name: "Thomas Anderson",
                car: "2023 Porsche 911",
                rating: 5,
                comment:
                  "For high-performance vehicles, you need experts. AutoElite knows what they're doing with sports cars.",
                avatar:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100",
              },
              {
                name: "Lisa Wang",
                car: "2022 Toyota RAV4",
                rating: 5,
                comment:
                  "Friendly service, fair prices, and they finished earlier than expected. Highly recommended!",
                avatar:
                  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=100",
              },
            ].map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary section-spacing">
        <div className="section-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Ready to Experience Premium Service?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of satisfied customers who trust AutoElite with
              their vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/book" className="btn-primary">
                Book Your Appointment
              </a>
              <a href="tel:5551234567" className="btn-secondary">
                Call: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
