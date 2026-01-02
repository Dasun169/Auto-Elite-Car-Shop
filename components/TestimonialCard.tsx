"use client";

import { useState } from "react";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  car: string;
  rating: number;
  comment: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  car,
  rating,
  comment,
  avatar,
}: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLongComment = comment.length > 150;

  return (
    <div className="glass-effect rounded-xl p-6 card-hover h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-400">{car}</p>
          </div>
        </div>
        <Quote className="h-8 w-8 text-accent/30" />
      </div>

      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-700"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-300 mb-4">
        {expanded || !isLongComment
          ? comment
          : `${comment.substring(0, 150)}...`}
        {isLongComment && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-accent hover:text-accent/80 ml-2 font-medium"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </p>

      <div className="text-sm text-gray-500 mt-4">Verified Customer</div>
    </div>
  );
}
