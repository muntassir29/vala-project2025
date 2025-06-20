export default function Affiliates() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
        Affiliate Program
      </h1>

      <p className="text-lg text-center mb-10">
        Are you passionate about trading and financial markets? <br />
        Monetize your audience by promoting our industry-leading trading journal and analytics tools.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">1. Apply</h3>
          <p>Contact us to get approved and receive your unique affiliate link.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">2. Promote</h3>
          <p>Share the platform with your audience of active traders.</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">3. Earn 20% commission</h3>
          <p>Get 20% commission on all paid subscriptions for as long as the customer remains active.</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
      <ul className="space-y-4 mb-12 text-gray-700">
        <li>✅ Document and learn from your trading behavior with powerful tools.</li>
        <li>✅ Recurring 20% lifetime commissions on all subscriptions.</li>
        <li>✅ 30-day cookie window for delayed conversions.</li>
        <li>✅ Trusted platform used by thousands of traders worldwide.</li>
        <li>✅ Promote Silver and Gold plans with strong earnings potential.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Potential Earnings</h2>
      <div className="grid md:grid-cols-2 gap-6 text-gray-700 mb-12">
        <div className="bg-white shadow-sm rounded-lg p-4 border">
          <h3 className="text-lg font-semibold mb-2">Silver Plan</h3>
          <p>💰 Price: $29/month</p>
          <p>💸 Commission: $5.80/month</p>
          <p>📅 Annual Earnings: $69.60 per customer</p>
        </div>
        <div className="bg-white shadow-sm rounded-lg p-4 border">
          <h3 className="text-lg font-semibold mb-2">Gold Plan</h3>
          <p>💰 Price: $49/month</p>
          <p>💸 Commission: $9.80/month</p>
          <p>📅 Annual Earnings: $117.60 per customer</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <p className="mb-8">
        Once you apply, we will review your application and provide you with all the details to get started.
        Your affiliate dashboard will allow you to track performance in real-time.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-md text-center hover:bg-blue-700 transition"
        >
          Contact Us to Apply
        </a>
        <a
          href="/signup"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-center hover:bg-blue-50 transition"
        >
          Sign Up for Free
        </a>
      </div>
    </div>
  );
}
