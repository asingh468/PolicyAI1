'use client';
import { useState } from 'react';

export default function AgentForm({ onGenerated }: { onGenerated: (text: string) => void }) {
  const [form, setForm] = useState({
    agentName: '',
    brokerage: '',
    clientName: '',
    propertyAddress: '',
    confidentialInfo: '',
    duration: '',
    state: 'California',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const prompt = `Create a real estate agent confidentiality agreement for California:
Agent: ${form.agentName}
Brokerage: ${form.brokerage}
Client: ${form.clientName}
Property: ${form.propertyAddress}
Confidential Info: ${form.confidentialInfo}
Duration: ${form.duration}.
Use professional legal formatting.`;

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setLoading(false);
    onGenerated(data.text);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input type="text" name="agentName" placeholder="Agent Name" onChange={handleChange} required />
      <input type="text" name="brokerage" placeholder="Brokerage" onChange={handleChange} required />
      <input type="text" name="clientName" placeholder="Client Name" onChange={handleChange} required />
      <input type="text" name="propertyAddress" placeholder="Property Address" onChange={handleChange} required />
      <textarea name="confidentialInfo" placeholder="Confidential Info" onChange={handleChange} required />
      <input type="text" name="duration" placeholder="Duration (e.g., 12 months)" onChange={handleChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Generating...' : 'Generate Agreement'}
      </button>
    </form>
  );
}
