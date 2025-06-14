// pages/index.tsx
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>PolicyAI – AI-Powered Real Estate Documents</title>
        <meta name="description" content="Generate real estate documents with AI. Save time, stay compliant, and close faster." />
      </Head>

      <main className="bg-white text-gray-800">
        {/* HERO SECTION */}
        <section
          className="bg-cover bg-center h-[90vh] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1400&q=80')`,
          }}
        >
          <div className="bg-black/60 p-8 rounded-xl">
            <h1 className="text-5xl font-bold mb-4">Welcome to PolicyAI</h1>
            <p className="text-xl mb-6">
              Instantly generate compliant real estate documents using AI.
            </p>
            <a
              href="#features"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">What is PolicyAI?</h2>
          <p className="text-gray-600 text-lg">
            PolicyAI is an AI-powered tool that helps real estate professionals create customized legal documents like confidentiality agreements, buyer contracts, and disclosures. No legal team needed. Just fill a quick form — and our system generates a ready-to-use document tailored to your needs.
          </p>
        </section>

        {/* FEATURES */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12 text-center">
            <div>
              <img
                src="https://img.icons8.com/fluency/96/contract.png"
                alt="Contracts icon"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Instant Legal Docs</h3>
              <p className="text-gray-600">Generate NDAs, Buyer Agreements, and more in under 60 seconds.</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/fluency/96/artificial-intelligence.png"
                alt="AI icon"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Powered by AI</h3>
              <p className="text-gray-600">Trained on real estate legal best practices and patterns.</p>
            </div>
            <div>
              <img
                src="https://img.icons8.com/fluency/96/cloud-check.png"
                alt="Compliance icon"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Compliant & Secure</h3>
              <p className="text-gray-600">Built with security and document compliance in mind.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to automate your real estate paperwork?</h2>
          <a
            href="/documents"
            className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Start Generating Docs
          </a>
        </section>

        {/* FOOTER */}
        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} PolicyAI. Not a substitute for legal advice.
        </footer>
      </main>
    </>
  );
}
