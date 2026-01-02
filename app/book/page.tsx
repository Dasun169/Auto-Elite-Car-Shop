"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Car,
  User,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const services = [
  { id: "oil", name: "Oil Change", duration: "30 min" },
  { id: "brakes", name: "Brake Service", duration: "2-3 hours" },
  { id: "alignment", name: "Wheel Alignment", duration: "1 hour" },
  { id: "diagnostics", name: "Diagnostics", duration: "1-2 hours" },
  { id: "detailing", name: "Car Detailing", duration: "3-4 hours" },
  { id: "engine", name: "Engine Repair", duration: "4+ hours" },
  { id: "ac", name: "AC Service", duration: "2 hours" },
  { id: "electrical", name: "Electrical", duration: "2-3 hours" },
];

const vehicleTypes = [
  "Sedan",
  "SUV",
  "Truck",
  "Coupe",
  "Convertible",
  "Minivan",
  "Sports Car",
  "Luxury",
  "Electric Vehicle",
  "Hybrid",
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
  "5:00 PM",
];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    service: "",
    vehicleType: "",
    date: "",
    time: "",

    // Step 2
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",

    // Step 3
    agreeTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (step < 3) {
      setStep(step + 1);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getServiceName = (serviceId: string) => {
    const service = services.find((s) => s.id === serviceId);
    return service ? service.name : serviceId;
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2070"
            alt="Book Appointment Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80" />
        </div>

        <div className="relative z-10 section-padding">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-center mb-6">
            Book Appointment
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Schedule your vehicle service in just a few clicks. We'll confirm
            your appointment shortly.
          </p>
        </div>
      </section>

      {/* Booking Process */}
      <section className="section-spacing">
        <div className="section-padding max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      step >= stepNumber ? "bg-accent" : "bg-white/10"
                    }`}
                  >
                    <span
                      className={`font-semibold ${
                        step >= stepNumber ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {stepNumber}
                    </span>
                  </div>
                  {stepNumber < 3 && (
                    <div
                      className={`w-24 h-1 mx-4 ${
                        step > stepNumber ? "bg-accent" : "bg-white/10"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Appointment Scheduled!
                </h2>
                <div className="glass-effect rounded-lg p-6 max-w-md mx-auto mb-6">
                  <h3 className="font-semibold mb-4">Appointment Details</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Service:</span>
                      <span className="font-medium">
                        {getServiceName(formData.service)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="font-medium">
                        {formatDate(formData.date)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="font-medium">{formData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Vehicle:</span>
                      <span className="font-medium">
                        {formData.vehicleType}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 mb-8">
                  We've sent a confirmation email to {formData.email}. Please
                  arrive 10 minutes before your scheduled time.
                </p>
                <button
                  onClick={() => {
                    setStep(1);
                    setSubmitted(false);
                    setFormData({
                      service: "",
                      vehicleType: "",
                      date: "",
                      time: "",
                      firstName: "",
                      lastName: "",
                      email: "",
                      phone: "",
                      notes: "",
                      agreeTerms: false,
                    });
                  }}
                  className="btn-primary"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Details */}
                {step === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        Select Service
                      </h3>
                      <p className="text-gray-400">
                        Choose the service you need for your vehicle.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              service: service.id,
                            }))
                          }
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.service === service.id
                              ? "border-accent bg-accent/10"
                              : "border-white/10 hover:border-white/20"
                          }`}
                        >
                          <div className="text-lg font-medium mb-1">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.duration}
                          </div>
                        </button>
                      ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Vehicle Type *
                        </label>
                        <select
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                          required
                        >
                          <option value="">Select vehicle type</option>
                          {vehicleTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split("T")[0]}
                            max={
                              new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                                .toISOString()
                                .split("T")[0]
                            }
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            required
                          />
                          <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Preferred Time *
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() =>
                              setFormData((prev) => ({ ...prev, time }))
                            }
                            className={`py-3 rounded-lg border transition-all ${
                              formData.time === time
                                ? "border-accent bg-accent/10"
                                : "border-white/10 hover:border-white/20"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Personal Information */}
                {step === 2 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        Your Information
                      </h3>
                      <p className="text-gray-400">
                        Tell us how we can contact you.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            required
                          />
                          <User className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            required
                          />
                          <Mail className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors"
                            required
                          />
                          <Phone className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Any special requests or additional information about your vehicle..."
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Confirmation */}
                {step === 3 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <h3 className="text-2xl font-heading font-semibold mb-2">
                        Confirm Appointment
                      </h3>
                      <p className="text-gray-400">
                        Review your appointment details before submitting.
                      </p>
                    </div>

                    <div className="glass-effect rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                          <div>
                            <div className="text-sm text-gray-400">Service</div>
                            <div className="font-semibold">
                              {getServiceName(formData.service)}
                            </div>
                          </div>
                          <Car className="h-6 w-6 text-accent" />
                        </div>

                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                          <div>
                            <div className="text-sm text-gray-400">
                              Vehicle Type
                            </div>
                            <div className="font-semibold">
                              {formData.vehicleType}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">
                              Date & Time
                            </div>
                            <div className="font-semibold">
                              {formatDate(formData.date)} at {formData.time}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4">
                          <div className="text-sm text-gray-400 mb-2">
                            Contact Information
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm">Name</div>
                              <div className="font-medium">
                                {formData.firstName} {formData.lastName}
                              </div>
                            </div>
                            <div>
                              <div className="text-sm">Contact</div>
                              <div className="font-medium">
                                {formData.email}
                              </div>
                              <div className="font-medium">
                                {formData.phone}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="terms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="text-sm text-gray-400"
                        >
                          I agree to the Terms of Service and Privacy Policy. I
                          understand that I will receive appointment reminders
                          via email and SMS.
                        </label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id="marketing"
                          name="agreeMarketing"
                          className="mt-1"
                        />
                        <label
                          htmlFor="marketing"
                          className="text-sm text-gray-400"
                        >
                          I would like to receive special offers and service
                          reminders from AutoElite.
                        </label>
                      </div>
                    </div>

                    {!formData.agreeTerms && (
                      <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 p-4 rounded-lg flex items-center space-x-2">
                        <AlertCircle size={20} />
                        <span>
                          Please agree to the terms and conditions to continue.
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-6 border-t border-white/10">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  <button type="submit" className="btn-primary px-8">
                    {step < 3 ? "Continue" : "Confirm Appointment"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
