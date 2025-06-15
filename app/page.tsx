import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-900 text-white px-6 py-12">
      <section className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Empowering Real Estate Agents with Instant Legal Docs
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          PolicyAI helps real estate professionals instantly generate legally-compliant
          documents like listing agreements, NDAs, and disclosures.
        </p>
        <Button className="bg-white text-black text-lg px-8 py-6 font-semibold hover:bg-slate-200">
          Generate a Document
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-slate-800 text-white">
          <CardContent className="p-6">
            <Sparkles className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Listing Agreements</h3>
            <p className="text-gray-300">
              Auto-generate exclusive and non-exclusive listing agreements tailored to local laws.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 text-white">
          <CardContent className="p-6">
            <Sparkles className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Client NDAs</h3>
            <p className="text-gray-300">
              Protect sensitive property information with legally-sound confidentiality agreements.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 text-white">
          <CardContent className="p-6">
            <Sparkles className="text-blue-400 mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Disclosure Forms</h3>
            <p className="text-gray-300">
              Instantly draft property disclosures compliant with California and other jurisdictions.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="mt-24 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PolicyAI, Inc. All rights reserved.
      </footer>
    </main>
  );
}
