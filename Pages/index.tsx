// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>PolicyAI – AI-Powered Real Estate Compliance</title>
        <meta
          name="description"
          content="Generate real estate documents instantly with PolicyAI. Secure, fast, and legally sound."
        />
      </Head>

      <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
        <h1 className="text-2xl font-bold text-indigo-600">PolicyAI</h1>
        <div className="space-x-4 text-sm font-medium text-gray-700">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#how" className="hover:text-indigo-600">How it Works</a>
          <a href="#documents" className="hover:text-indigo-600">Documents</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </div>
      </nav>

      <main className="bg-gray-50 text-gray-800">
        {/* HERO */}
        <section className="text-center py-24 px-4 bg-gradient-to-br from-indigo-50 to-white">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Simplify Real Estate Compliance
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-gray-600 mb-6">
            Instantly generate legally sound documents for real estate professionals using AI.
          </p>
          <a href="#documents" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">
            Get Started
          </a>
        </section>

        {/* STATS BAR */}
        <section className="flex justify-center gap-6 py-6 bg-indigo-100 text-sm text-gray-700">
          <div className="bg-white px-4 py-2 rounded-full shadow">Avg generation time: <strong>12s</strong></div>
          <div className="bg-white px-4 py-2 rounded-full shadow">Documents generated: <strong>8,230+</strong></div>
          <div className="bg-white px-4 py-2 rounded-full shadow">Compliance types: <strong>12</strong></div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 px-4 text-center bg-white">
          <h3 className="text-3xl font-bold mb-12">Why PolicyAI?</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div>
              <Image src="/images/ai-docs.png" alt="AI Docs" width={100} height={100} className="mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">AI-Powered Accuracy</h4>
              <p className="text-gray-600">Documents are tailored with context-aware AI trained on legal standards.</p>
            </div>
            <div>
              <Image src="/images/time-save.png" alt="Time Saving" width={100} height={100} className="mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Save Time</h4>
              <p className="text-gray-600">Eliminate hours of manual drafting with our fast and secure generation system.</p>
            </div>
            <div>
              <Image src="/images/compliance.png" alt="Compliance" width={100} height={100} className="mx-auto mb-4" />
              <h4 className="font-semibold text-lg mb-2">Built-in Compliance</h4>
              <p className="text-gray-600">Ensure HIPAA, CCPA, and industry-specific compliance by default.</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="bg-indigo-50 py-20 px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">How It Works</h3>
          <ol className="space-y-6 max-w-3xl mx-auto text-left">
            <li>
              <strong className="text-indigo-600">1.</strong> Choose a document type (e.g. NDA, Buyer Agreement)
            </li>
            <li>
              <strong className="text-indigo-600">2.</strong> Fill out a smart, dynamic form
            </li>
            <li>
              <strong className="text-indigo-600">3.</strong> Receive a downloadable, compliant document in seconds
            </li>
          </ol>
        </section>

        {/* DOCUMENT CTA */}
        <section id="documents" className="bg-white py-20 text-center">
          <h3 className="text-3xl font-bold mb-6">Start Your First Document</h3>
          <p className="mb-8 text-gray-600">Confidentiality Agreements, Buyer-Seller Contracts, Disclosures, and more.</p>
          <a
            href="/documents"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Explore Documents
          </a>
        </section>

        {/* FOOTER */}
        <footer id="contact" className="bg-gray-900 text-white py-12 text-center">
          <div className="mb-4">
            <h4 className="text-xl font-semibold">PolicyAI</h4>
            <p className="text-sm text-gray-400">AI-generated real estate policies, faster and safer.</p>
          </div>
          <div className="text-xs text-gray-500">
            © {new Date().getFullYear()} PolicyAIDreams, Inc. All rights reserved.
          </div>
        </footer>
      </main>
    </>
  );
}
