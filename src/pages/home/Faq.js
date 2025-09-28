import { useState } from "react";

const faqs = [
  {
    id: "01",
    question: "Is This Extension Free?",
    answer:
      "Yes! The core version with key metrics is free. We offer a Pro plan with more in-depth data and historical trends.",
  },
  {
    id: "02",
    question: "Which Browsers Do You Support?",
    answer: "We support Chrome, Firefox, Edge, and Safari browsers.",
  },
  {
    id: "03",
    question: "How Accurate Is The Data?",
    answer:
      "The data is highly accurate and updated regularly from trusted sources.",
  },
  {
    id: "04",
    question: "What Are My Homeownership Program Obligations?",
    answer:
      "You are required to meet all terms of the program agreement and maintain compliance throughout the process.",
  },
  {
    id: "05",
    question: "How Long Does The Homeownership Program Process Take?",
    answer:
      "The process typically takes 2–6 months depending on your eligibility and documentation.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-gradient-to-b from-white to-white dark:from-darkColorMode dark:to-darkColorMode pt-80">
      <section className="container mx-auto px-6">
        <h2 className="text-xl sm:text-2xl font-bold font-manrope text-center text-heading dark:text-white mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-7">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-gray-200 pb-7 cursor-pointer"
            >
              <div
                className="flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center gap-10">
                  <span className="font-semibold text-heading dark:text-white font-lato">
                    {faq.id}
                  </span>
                  <span className="font-semibold  text-heading dark:text-white  font-lato">
                    {faq.question}
                  </span>
                </div>
                <span className="text-[22px] font-medium text-heading dark:text-white">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="ml-14 mt-2 font-medium text-heading dark:text-gray-300 font-arial md:w-[640px] w-100%">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
