import { FaUserPlus, FaBullhorn, FaMoneyBillWave, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import affiliateBanner from "../assets/affiliate-banner.jpg"; // Add your own image here
import heroSideImage from "../assets/affiliate-side.webp"; // Add this image alongside the hero text

export default function Affiliates() {
  return (
    <div className="w-full text-gray-800">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            🚀 Join Our Affiliate Program
          </h1>
          <p className="text-lg text-gray-700">
            Promote our powerful trading journal platform and earn lifetime commissions.
          </p>
        </motion.div>

        <motion.img
          src={heroSideImage}
          alt="Affiliate side graphic"
          className="w-full max-w-md h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </div>

      <motion.img
        src={affiliateBanner}
        alt="Affiliate banner"
        className="w-full h-[350px] object-cover object-bottom-right mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: <FaUserPlus size={32} className="text-blue-600" />, 
              title: "Apply", 
              desc: "Get approved quickly and receive your unique referral link."
            },
            {
              icon: <FaBullhorn size={32} className="text-green-600" />, 
              title: "Promote", 
              desc: "Share your link with trading communities and content platforms."
            },
            {
              icon: <FaMoneyBillWave size={32} className="text-yellow-600" />, 
              title: "Earn", 
              desc: "Receive 20% recurring commissions for every paying user."
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-6 border"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{`${i + 1}. ${step.title}`}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Why Join Us?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-700">
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> 20% lifetime recurring commissions</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> 30-day tracking cookie</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Promote high-conversion Silver and Gold plans</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Dashboard to monitor clicks, conversions, and earnings</li>
            <li><FaCheckCircle className="inline mr-2 text-green-500" /> Fast approval and responsive affiliate support</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">💸 Commission Potential</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Silver Plan</h3>
              <p>💰 Price: $29/month</p>
              <p>💸 You earn: $5.80/month</p>
              <p>📅 Annual Earnings: $69.60</p>
            </div>
            <div className="bg-white border shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Gold Plan</h3>
              <p>💰 Price: $49/month</p>
              <p>💸 You earn: $9.80/month</p>
              <p>📅 Annual Earnings: $117.60</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Started Today</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Submit your application and start promoting in minutes. Monitor your traffic and earnings with our real-time dashboard.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Contact Us to Apply
            </a>
            <a
              href="/signup"
              className="bg-gradient-to-r from-[#2f3f4c] via-[#352a1e] to-[#100e0b] text-white px-6 py-3 rounded-md text-center hover:opacity-90 transition"
            >
              Sign Up for Free
            </a>
          </div>
          <br></br>
        </div>
      </div>
    </div>
  );
}