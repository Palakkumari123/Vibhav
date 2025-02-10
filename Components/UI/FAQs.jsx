import faq from "../../data/faq.json";
import { useState } from "react";

import { HiPlusCircle } from "react-icons/hi";
import { HiMinusCircle } from "react-icons/hi";
import { motion } from "framer-motion";
export default function FAQs() {
  const [faqs, setFaqs] = useState([...faq.faqs]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) => {
      return prevFaqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return { ...faq, isOpen: false };
        }
      });
    });
  };

  return (
    <div className="p-1">
    <motion.div className="container text-gray-200 z-10 max-w-screen-lg mx-auto my-20 rounded-[20px] p-8 bg-gray-600/30 bg-opacity-30 shadow-[0_20px_40px_rgba(0,0,0,.4)] "
    initial={{ opacity: 0, y:50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: .7 }}
    >
      <h2 className="sm:text-4xl text-2xl text-center  font-batman">FAQs</h2>
      <div className="leading-loose  mt-6 ">
        {faqs.map((faq, index) => (
          <div key={faq.question}>
            <button
              className={`w-full font-bold py-3 flex justify-between items-center mt-4 ${index !== faqs.length - 1 && "text-gray-200 border-b border-gray-400"}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-base sm:text-lg   font-sans text-left">
              {faq.question}
              </div>
              {faq.isOpen ? (
                <div>
                <HiMinusCircle className="w-7 h-7 " />
              </div>
              ) : (
                <div>
                  <HiPlusCircle className="w-7 h-7" />
                </div>
              )}
            </button>
            <div
              className={`text-gray-300 text-base sm:text-md  leading-6 font-sans mt-2 transition-all duration-500  ${faq.isOpen ? "h-auto opacity-100" : "h-0 opacity-0"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
    </div>
  );
}
