import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I book a property visit?",
      answer:
        "Once you are logged in, navigate to the property details page. You will see a 'Request Visit' button where you can select a preferred date and time. Our agent will then confirm the appointment via email.",
    },
    {
      question: "Are there any hidden fees for buyers?",
      answer:
        "No, HomeNest believes in complete transparency. All platform service fees are clearly listed in the property breakdown. Standard legal and registration fees vary by location and are the responsibility of the buyer.",
    },
    {
      question: "Can I list my property for free?",
      answer:
        "Yes! Every new user gets their first property listing for free. For multiple listings or featured placements, we offer premium packages that provide higher visibility to potential buyers.",
    },
    {
      question: "How is the property price verified?",
      answer:
        "We use a combination of local market data, recent sales in the area, and professional appraisals to ensure that all listed prices are fair and competitive.",
    },
    {
      question: "What documents do I need for a rental agreement?",
      answer:
        "Typically, you will need a valid ID, proof of income (last 3 months), and a security deposit. Requirements may vary slightly depending on the specific landlord or property management company.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mb-4">
            <FaQuestionCircle className="text-2xl text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Everything you need to know about the HomeNest process.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-bold text-gray-900 dark:text-white md:text-lg">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-blue-600 dark:text-blue-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-800 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            Still have questions?{" "}
            <a
              href="/contact"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
