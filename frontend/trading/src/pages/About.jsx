import { motion } from 'framer-motion'
import { FaChartLine, FaLightbulb, FaUserShield, FaHandshake } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { Link } from 'react-router-dom'
import statsImage from '../assets/about-stats.jpg'
import notesImage from '../assets/about-notes.jpg'

export default function About() {
  return (
    <div className="px-6 md:px-20 py-16 bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">About Our Platform</h1>
        <p className="text-lg md:text-xl text-gray-600">
          A modern trading journal built for serious traders who want to evolve.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 mb-20"
      >
        <img src={statsImage} alt="Statistics dashboard" className="rounded-xl shadow-lg w-full object-cover h-[300px]" />
        <img src={notesImage} alt="Trade notes" className="rounded-xl shadow-lg w-full object-cover h-[300px]" />
      </motion.div>

      {/* Mission & Vision */}
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center max-w-3xl mx-auto"
      >
  <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
  <p className="text-gray-600 leading-relaxed">
          To help you turn every trade into a learning opportunity. With detailed stats, structured notes,
          and intelligent tracking — our platform is designed to support your growth, day after day.
        </p>
      </motion.div>

      {/* Key Features */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-12 mb-16"
      >
        <Feature
          icon={<FaChartLine className="text-blue-600 text-3xl" />}
          title="Advanced Statistics"
          text="Analyze your performance by strategy, session, or timeframe. Make better decisions with clear insights."
        />
        <Feature
          icon={<FaLightbulb className="text-yellow-500 text-3xl" />}
          title="Notes & Goals"
          text="Track your reflections, lessons, and objectives. Writing helps you improve and prepare."
        />
        <Feature
          icon={<FaUserShield className="text-green-600 text-3xl" />}
          title="Secure & Private"
          text="Your data belongs to you only. Encrypted and protected using modern security standards."
        />
        <Feature
          icon={<MdGroups className="text-purple-600 text-3xl" />}
          title="Community & Support"
          text="A place to share, learn, and grow with other traders who share your mindset."
        />
      </motion.div>

      {/* Values */}
     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mb-20 text-center max-w-3xl mx-auto"
>
  <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
  <ul className="list-disc text-left inline-block text-gray-600 space-y-2 pl-6">
          <li>Transparency and honesty in performance</li>
          <li>Discipline and consistency in journaling</li>
          <li>Continuous improvement, one trade at a time</li>
          <li>Supportive and ambitious community</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-lg mb-4">Ready to take your trading to the next level?</p>
        <Link
          to="/signup"
          className="relative inline-block px-8 py-3 font-semibold rounded-full 
          bg-gradient-to-r from-pink-500 to-sky-500 shadow-lg transform transition-all duration-300
          hover:scale-105 hover:shadow-xl hover:text-black
          before:absolute before:inset-0 before:rounded-full
          before:bg-gradient-to-r before:from-pink-400 before:to-sky-400 before:opacity-0 
          hover:before:opacity-30 before:transition before:duration-300"
        >
          Sign up for Free 🚀
        </Link>
      </motion.div>
    </div>
  )
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex items-start space-x-4">
      <div>{icon}</div>
      <div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  )
}

