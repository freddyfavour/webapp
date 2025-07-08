import { useState } from "react";
import forwardarrow from "/forwardarrow.svg";

const faqs = [
  {
    question: "How do I add a debit card?",
    answer:
      "To add a debit card, go to your profile settings, click on 'Payment Methods', and select 'Add Debit Card'. Enter your card details and save.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes, go to account settings and scroll down to the bottom. You'll find an option to delete your account permanently.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' at the login screen. Enter your email, and we’ll send a link to reset it.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Absolutely. We use industry-standard encryption to protect your data. Read our privacy policy for more details.",
  },
  {
    question: "Can I change my username?",
    answer:
      "Yes. Navigate to your profile page and click 'Edit Profile'. You can change your username there.",
  },
];

const FaqsComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-full mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white w-full rounded-md shadow-md mb-4 px-4 py-4 cursor-pointer transition-all duration-300"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src="/dot-p.svg" alt="" className="w-2" />
              <p className="text-black font-semibold text-sm">{faq.question}</p>
            </div>
            <img
              src={forwardarrow}
              alt=""
              className={`transform transition-transform duration-300 ${activeIndex === index ? "rotate-90" : ""
                }`}
            />
          </div>
          {activeIndex === index && (
            <div className="mt-4 text-gray-600 text-sm">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqsComponent;
