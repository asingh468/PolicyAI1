export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-600">PolicyAI</div>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition">How It Works</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-blue-50 via-white to-blue-100">
        <h1 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
          Instantly Generate Cybersecurity & Compliance Policies
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          PolicyAI helps small businesses create SOC 2, HIPAA, and privacy policies with ease — just fill out a simple form.
        </p>
        <a href="/start" className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:bg-blue-700 transition">
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">Features</h2>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">AI-Driven Forms</h3>
            <p className="text-gray-600">Answer simple questions to generate complex policies instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Compliance Ready</h3>
            <p className="text-gray-600">Policies align with SOC 2, HIPAA, and CCPA requirements.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Editable & Branded</h3>
            <p className="text-gray-600">Download, customize, and add your logo before sharing with clients or auditors.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="text-white font-semibold mb-2">PolicyAI</h4>
            <p>© {new Date().getFullYear()} PolicyAI Inc. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p>Email: support@policyai.app</p>
            <p>San Francisco, CA</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
