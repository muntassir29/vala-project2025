
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";  // <-- import framer-motion ici
import journalStep1 from "../assets/journal-step1.webp";
import journalStep2 from "../assets/journal-step2.png";
import journalStep3 from "../assets/journal-step3.jpg";
import dashboardImage from "../assets/journal-dashboard.png"; 
import tradingEdgeImg from "../assets/trading-edge.png"; 
import tradeHeader from "../assets/tradeheader.png";
import sectionImage from "../assets/sectionimage.jpg"; 

const faqs = [
  {
    question: "How secure is my trading data?",
    answer:
      "Your data is encrypted and securely stored in the cloud with regular backups. Only you have access to your trading history.",
  },
  {
    question: "Can I import trades from my broker?",
    answer:
      "Yes! You can import your trade history from popular platforms like MetaTrader, TradingView, and more with just a few clicks.",
  },
  {
    question: "What kind of insights will I get?",
    answer:
      "You’ll get detailed reports, pattern analysis, performance breakdowns by strategy, and much more to help improve your trading edge.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Absolutely. You can try out all features for free and decide later if you want to upgrade to Silver or Gold plans.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

export default function Home() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header / Hero section */}
      <header
        className="relative text-white px-8 py-32 flex flex-col items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${tradeHeader})`,
        }}
      >
        <div className="relative z-10 max-w-4xl">
          <motion.h1
            className="text-5xl font-bold mb-4 drop-shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Welcome to Trading Journal
          </motion.h1>
          <motion.p
            className="max-w-2xl text-lg mb-6 drop-shadow-md"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Monetize your audience by promoting our industry-leading trading journal and analytics tools.
          </motion.p>
          <div className="space-x-4">
            <Link
              to="/signup"
              className="relative inline-block px-6 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#352a1e] via-[#2f3f4c] to-[#100e0b] 
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
              <span className="relative z-10">Sign up for Free</span>
            </Link>

            <Link
              to="/affiliates"
              className="relative inline-block px-6 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] 
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
              <span className="relative z-10">Affiliates</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content section */}
      <main className="flex-grow px-8 py-16 space-y-20 max-w-6xl mx-auto">
        {/* 3 Easy Steps */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">3 Easy Steps To Improve Your Performance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[journalStep1, journalStep2, journalStep3].map((img, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded-xl border shadow-md hover:shadow-lg transition-transform hover:scale-105"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ delay: idx * 0.2 }}
              >
                <motion.img
                  src={img}
                  alt={
                    idx === 0
                      ? "Journal Trades"
                      : idx === 1
                      ? "Identify Patterns"
                      : "Boost Performance"
                  }
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.2 + 0.1, duration: 0.6 }}
                />
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 + 0.3, duration: 0.6 }}
                >
                  {idx === 0
                    ? "Step 1: Journal Your Trades"
                    : idx === 1
                    ? "Step 2: Identify Your Patterns"
                    : "Step 3: Boost Your Performance"}
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: idx * 0.2 + 0.5, duration: 0.6 }}
                >
                  {idx === 0
                    ? "Journal your trades in seconds. Have peace of mind knowing your data is fully backed up and secured."
                    : idx === 1
                    ? "Let our software detect patterns to help you understand what works and what doesn’t."
                    : "Analyze your mistakes, identify weaknesses, and focus on improvement every trading day."}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section>
          <motion.h2
            className="text-3xl font-bold mb-6 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            Why Choose Trading Journal?
          </motion.h2>
          <motion.ul
            className="list-disc list-inside space-y-2 text-gray-700 text-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <li>Document your past behaviors and learn from them using our intuitive notes management system.</li>
            <li>Recurring Commissions: Earn 20% on subscriptions for the entire customer lifetime.</li>
            <li>30-Day Cookie: Earn from referrals up to one month after the initial click.</li>
            <li>Trusted Brand: Used by thousands of traders worldwide.</li>
            <li>Multiple Plans: Promote Silver and Gold subscription options.</li>
          </motion.ul>
        </section>

        {/* Trading Journal Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold">Trading Journal</h2>
            <p className="text-gray-700">
              Start recording your trades with TraderSync and let our powerful journaling show you the path to minimize your mistakes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Journal Trades:</strong> The simplest yet most powerful stock trading journal to date. Build a vault of valuable information that can be analyzed at any time from anywhere.
              </li>
              <li>
                <strong>Stop Losing Profits:</strong> Refine your performance by learning which setups are not working for you and focus on the ones that are.
              </li>
              <li>
                <strong>Save Time:</strong> Import your stock trade history from your trading platform, simple and easy.
              </li>
              <li>
                <strong>Customize Your Experience:</strong> Custom tailor your stock journal to fit your unique trading style with highly customizable modules.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={dashboardImage}
              alt="Trading Journal Dashboard"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>
        </section>

        {/* Trading Edge Section */}
        <section className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={tradingEdgeImg}
              alt="Trading Edge Reports"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </motion.div>

          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold">Find Your Trading Edge</h2>
            <p className="text-gray-700">
              Forget trying to interpret hundreds of spreadsheets of stock trading data.
              Replace those spreadsheets with our easy to use reports to understand your
              trading behavior quickly.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Find and Refine Your Trading Edge:</strong> We have synthesized everything you need to know into two reports. Refine your stock trading from feedback generated reports designed to provide quick and useful information.
              </li>
              <li>
                <strong>Understand Your Numbers:</strong> We give you feedback in plain English. Let our trading journal software interpret your data.
              </li>
              <li>
                <strong>Get Powerful Feedback:</strong> Have a clear picture of your trading patterns with customizable reports that help you understand your unique trading edge.
              </li>
            </ul>
          </motion.div>
        </section>
      </main>
      
      {/* Final CTA - Sign Up Now with background image, BEFORE FAQ */}
      <section
        className="relative text-white px-8 py-15 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${sectionImage})`,
        }}
      >
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.p
            className="mb-4 text-lg text-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            Simple. Fast. Powerful.
          </motion.p>
          <motion.p
            className="text-xl font-semibold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            The trading journal that will help improve your trading performance.
          </motion.p>
          <Link
            to="/signup"
            className="relative inline-block px-8 py-4 rounded-full text-white font-semibold 
                bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 
                overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <span className="absolute inset-0 bg-white opacity-10 blur-lg transition-opacity duration-500 group-hover:opacity-20"></span>
            <span className="relative z-10">Sign Up Now</span>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 mt-24 mb-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                <span className="text-xl text-gray-400 transition-transform duration-300">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



