// pages/index.tsx
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>PolicyAIDreams – AI Document Generator for Real Estate</title>
      </Head>

      <main className="min-h-screen bg-white text-gray-800 px-6 py-12">
        <section className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PolicyAIDreams</h1>
          <p className="text-xl text-gray-600 mb-8">
            Instantly generate real estate documents using AI — fast, simple, and secure.
          </p>
          <a
            href="/documents"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Generate a Document
          </a>
        </section>

        <section className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-medium mb-2">Step 1: Choose a Document</h3>
              <p className="text-gray-600">Select from a list of real estate agreements and forms.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Step 2: Fill Out a Form</h3>
              <p className="text-gray-600">Answer a few questions about your client or property.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Step 3: Get Your Document</h3>
              <p className="text-gray-600">AI instantly creates a ready-to-use legal-style document.</p>
            </div>
          </div>
        </section>

        <section className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Why Use PolicyAIDreams?</h2>
          <ul className="list-disc list-inside text-gray-700 text-left inline-block">
            <li>🚀 Save hours of manual editing</li>
            <li>💼 Look professional with high-quality templates</li>
            <li>🧠 Stay compliant with legal best practices</li>
            <li>📄 Customize any document with ease</li>
          </ul>
        </section>

        <footer className="mt-24 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} PolicyAIDreams. This platform is not a substitute for legal advice. Please consult a legal professional if needed.
          </p>
        </footer>
      </main>
    </>
  );
}
