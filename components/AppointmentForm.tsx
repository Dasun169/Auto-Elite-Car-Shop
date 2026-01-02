"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  Mail,
  AlertCircle,
} from "lucide-react";

interface AppointmentFormProps {
  defaultService?: string;
  compact?: boolean;
}

export default function AppointmentForm({
  defaultService = "",
  compact = false,
}: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    service: defaultService,
    vehicleType: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const services = [
    "Oil Change",
    "Brake Service",
    "Wheel Alignment",
    "Car Detailing",
    "Engine Repair",
    "Diagnostics",
    "AC Service",
    "Tire Rotation",
  ];

  const vehicleTypes = [
    "Sedan",
    "SUV",
    "Truck",
    "Coupe",
    "Convertible",
    "Minivan",
    "Sports Car",
    "Electric Vehicle",
  ];

  const timeSlots = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    // Validation
    if (
      !formData.service ||
      !formData.date ||
      !formData.time ||
      !formData.name ||
      !formData.email
    ) {
      setError("Please fill in all required fields");
      setSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);

    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        service: defaultService,
        vehicleType: "",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        notes: "",
      });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (submitted) {
    return (
      <div className="glass-effect rounded-xl p-8 text-center">
        <div className="bg-green-500/20 text-green-400 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <Calendar className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-heading font-semibold mb-2">
          Appointment Scheduled!
        </h3>
        <p className="text-gray-400 mb-4">
          We've sent a confirmation to {formData.email}. We'll contact you
          shortly.
        </p>
        <p className="text-sm text-gray-500">
          Appointment ID:{" "}
          {Math.random().toString(36).substring(2, 10).toUpperCase()}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`glass-effect rounded-xl ${compact ? "p-4" : "p-6 md:p-8"}`}
    >
      <div className={`${compact ? "mb-4" : "mb-6"}`}>
        <h3
          className={`${
            compact ? "text-lg" : "text-2xl"
          } font-heading font-semibold mb-2`}
        >
          Book Your Appointment
        </h3>
        {!compact && (
          <p className="text-gray-400">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg flex items-center space-x-2 text-sm">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <div className={compact ? "space-y-3" : "grid md:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Service Needed *
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
              required
            >
              <option value="">Select service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Vehicle Type *
            </label>
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
              required
            >
              <option value="">Select vehicle</option>
              {vehicleTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={compact ? "space-y-3" : "grid md:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Date *
            </label>
            <div className="relative">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split("T")[0]}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
                required
              />
              <Calendar className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Preferred Time *
            </label>
            <div className="relative">
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
                required
              >
                <option value="">Select time</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <Clock className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div className={compact ? "space-y-3" : "grid md:grid-cols-2 gap-4"}>
          <div>
            <label className="block text-sm font-medium mb-1">
              Full Name *
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
                required
              />
              <User className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
                required
              />
              <Mail className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <Phone className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {!compact && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Notes
            </label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Any special requests or vehicle issues..."
              className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors text-sm resize-none"
            />
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className={`w-full ${
            compact ? "btn-primary py-2 text-sm" : "btn-primary py-3"
          } flex items-center justify-center space-x-2`}
        >
          {submitting ? (
            <>
              <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Calendar className="h-4 w-4" />
              <span>Schedule Appointment</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By booking, you agree to our Terms of Service. We'll confirm your
          appointment via email.
        </p>
      </form>
    </div>
  );
}
