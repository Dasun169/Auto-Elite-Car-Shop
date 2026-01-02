import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
  popular?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  price,
  popular,
}: ServiceCardProps) {
  return (
    <div
      className={`glass-effect rounded-xl p-6 card-hover ${
        popular ? "border-2 border-accent" : ""
      }`}
    >
      {popular && (
        <div className="bg-accent text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}

      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-white/10 p-3 rounded-lg">
          <Icon className="h-8 w-8 text-accent" />
        </div>
        <h3 className="text-xl font-heading font-semibold">{title}</h3>
      </div>

      <p className="text-gray-400 mb-4">{description}</p>

      {price && (
        <div className="mb-4">
          <span className="text-2xl font-bold">${price}</span>
          <span className="text-gray-400 ml-2">/service</span>
        </div>
      )}

      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-300">
            <span className="text-accent mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link href="/book" className="btn-primary w-full text-center block">
        Book Now
      </Link>
    </div>
  );
}
