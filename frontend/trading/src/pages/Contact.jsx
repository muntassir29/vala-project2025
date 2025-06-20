// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-gray-700 text-lg mb-8 text-center">
        Have questions, suggestions, or want to join our affiliate program? We’d love to hear from you!
      </p>

      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-medium">Your Name</label>
          <input type="text" className="w-full border border-gray-300 px-4 py-2 rounded-md" required />
        </div>

        <div>
          <label className="block mb-2 font-medium">Email Address</label>
          <input type="email" className="w-full border border-gray-300 px-4 py-2 rounded-md" required />
        </div>

        <div>
          <label className="block mb-2 font-medium">Message</label>
          <textarea className="w-full border border-gray-300 px-4 py-2 rounded-md" rows="5" required></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
