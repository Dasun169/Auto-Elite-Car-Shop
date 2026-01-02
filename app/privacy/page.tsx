export default function PrivacyPage() {
  return (
    <div className="pt-24">
      <section className="section-spacing">
        <div className="section-padding max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Privacy Policy
          </h1>

          <div className="glass-effect rounded-xl p-6 md:p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-400 mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  Personal information (name, email, phone number)
                </li>
                <li className="list-disc">
                  Vehicle information (make, model, year)
                </li>
                <li className="list-disc">
                  Service history and appointment details
                </li>
                <li className="list-disc">
                  Payment information (processed securely via our payment
                  partners)
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-400 mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  Provide, maintain, and improve our services
                </li>
                <li className="list-disc">
                  Process transactions and send appointment confirmations
                </li>
                <li className="list-disc">
                  Send service reminders and maintenance updates
                </li>
                <li className="list-disc">
                  Respond to your comments and questions
                </li>
                <li className="list-disc">
                  Detect, investigate, and prevent fraudulent transactions
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                3. Information Sharing
              </h2>
              <p className="text-gray-400 mb-4">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to outside parties except:
              </p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  To trusted third parties who assist us in operating our
                  website and conducting our business
                </li>
                <li className="list-disc">
                  When required by law or to respond to legal process
                </li>
                <li className="list-disc">
                  To protect the rights and property of AutoElite, our
                  employees, customers, and the public
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-400">
                We implement a variety of security measures to maintain the
                safety of your personal information. All supplied sensitive
                information is transmitted via Secure Socket Layer (SSL)
                technology and then encrypted into our payment gateway
                provider's database.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                5. Your Rights
              </h2>
              <p className="text-gray-400 mb-4">You have the right to:</p>
              <ul className="space-y-2 text-gray-400 ml-4">
                <li className="list-disc">
                  Access the personal information we hold about you
                </li>
                <li className="list-disc">
                  Request correction of inaccurate personal information
                </li>
                <li className="list-disc">
                  Request deletion of your personal information
                </li>
                <li className="list-disc">
                  Opt-out of marketing communications
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-semibold mb-4">
                6. Changes to This Policy
              </h2>
              <p className="text-gray-400">
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new privacy policy on
                this page and updating the effective date.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-gray-400">
                <strong>Effective Date:</strong>{" "}
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="text-gray-400 mt-2">
                <strong>Contact Us:</strong> If you have questions about this
                Privacy Policy, please contact us at privacy@autoelite.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
