export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="section-spacing">
        <div className="section-padding max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Terms & Conditions
          </h1>

          <div className="glass-effect rounded-xl p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-400">
                By accessing and using the AutoElite website and services, you
                accept and agree to be bound by these Terms and Conditions. If
                you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                2. Services Description
              </h2>
              <p className="text-gray-400 mb-4">
                AutoElite provides automotive repair, maintenance, and detailing
                services through our physical location and online booking
                system. We reserve the right to:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  Modify or discontinue any service at any time
                </li>
                <li className="list-disc">
                  Refuse service to anyone for any reason at any time
                </li>
                <li className="list-disc">
                  Change prices for our services at any time
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                3. Appointment Booking
              </h2>
              <p className="text-gray-400 mb-4">
                When booking an appointment through our website:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  Appointments are not confirmed until you receive a
                  confirmation email
                </li>
                <li className="list-disc">
                  We require 24-hour notice for appointment cancellations
                </li>
                <li className="list-disc">
                  Late arrivals may result in rescheduling
                </li>
                <li className="list-disc">
                  We reserve the right to charge a cancellation fee for no-shows
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                4. Service Warranty
              </h2>
              <p className="text-gray-400 mb-4">
                All services performed by AutoElite are covered by our standard
                warranty:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  24-month/24,000-mile warranty on parts and labor
                </li>
                <li className="list-disc">
                  Warranty is transferable to subsequent owners
                </li>
                <li className="list-disc">
                  Warranty does not cover normal wear and tear
                </li>
                <li className="list-disc">
                  Warranty becomes void if service is performed elsewhere
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-400 mb-4">
                Payment is due upon completion of service. We accept:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">All major credit cards</li>
                <li className="list-disc">Debit cards</li>
                <li className="list-disc">Cash</li>
                <li className="list-disc">Digital payments</li>
              </ul>
              <p className="text-gray-400 mt-4">
                A deposit may be required for extensive repairs. All prices are
                in USD and are subject to change without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-400">
                AutoElite shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages resulting from your
                use of our services. Our total liability for any claim arising
                from our services shall not exceed the amount paid for the
                specific service in question.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                7. Governing Law
              </h2>
              <p className="text-gray-400">
                These Terms shall be governed by and construed in accordance
                with the laws of the State of California, without regard to its
                conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                8. Changes to Terms
              </h2>
              <p className="text-gray-400">
                We reserve the right to update or change these Terms and
                Conditions at any time. Your continued use of our services after
                we post any modifications constitutes your acceptance of the
                modified Terms.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400">
                <strong>Last Updated:</strong>{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-400 mt-2">
                <strong>Contact:</strong> For questions about these Terms,
                contact us at legal@autoelite.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
