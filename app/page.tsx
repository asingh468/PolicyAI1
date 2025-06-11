'use client'; // ✅ This must be at the very top

import { useState } from 'react';
import AgentForm from '../components/AgentForm';

export default function HomePage() {
  const [generatedAgreement, setGeneratedAgreement] = useState('');

  return (
    <main style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Agent Confidentiality Agreement Generator</h1>
      <AgentForm onGenerated={setGeneratedAgreement} />

      {generatedAgreement && (
        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: '1rem', borderRadius: '5px' }}>
          <h2>Generated Agreement</h2>
          <p>{generatedAgreement}</p>
        </div>
      )}
    </main>
  );
}

