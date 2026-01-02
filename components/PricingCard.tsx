import { Check, X } from "lucide-react";
import Link from "next/link";

interface PricingCardProps {
  title: string;
  price: number;
  description: string;
  features: string[];
  excluded?: string[];
  popular?: boolean;
  buttonText?: string;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  excluded = [],
  popular = false,
  buttonText = "Choose Plan",
}: PricingCardProps) {
  return (
    <div
      className={`glass-effect rounded-2xl p-8 relative overflow-hidden ${
        popular ? "border-2 border-accent" : ""
      }`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-400 ml-2">/service</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Tax not included</p>
      </div>

      <div className="space-y-4 mb-8">
        <h4 className="font-semibold text-lg">What's Included:</h4>
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}

        {excluded.length > 0 && (
          <>
            <h4 className="font-semibold text-lg mt-6">Not Included:</h4>
            {excluded.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 opacity-50"
              >
                <X className="h-5 w-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </>
        )}
      </div>

      <Link
        href="/book"
        className={`btn-primary w-full text-center block ${
          popular
            ? "bg-accent hover:bg-accent/90"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        {buttonText}
      </Link>

      <div className="text-center mt-4 text-sm text-gray-500">
        24-month warranty included
      </div>
    </div>
  );
}
