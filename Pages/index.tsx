import { useState } from "react";

export default function AgentConfidentialityForm() {
  const [form, setForm] = useState({
    agentName: "",
    brokerage: "",
    clientName: "",
    propertyAddress: "",
    confidentialInfo: "",
    duration: "",
    state: "California",
  });

  const [generatedAgreement, setGeneratedAgreement] = useState("");
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

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setGeneratedAgreement(data.text);
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h1>Agent Confidentiality Agreement Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="agentName"
          placeholder="Agent Name"
          onChange={handleChange}
          value={form.agentName}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="brokerage"
          placeholder="Brokerage"
          onChange={handleChange}
          value={form.brokerage}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="clientName"
          placeholder="Client Name"
          onChange={handleChange}
          value={form.clientName}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="propertyAddress"
          placeholder="Property Address"
          onChange={handleChange}
          value={form.propertyAddress}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          name="confidentialInfo"
          placeholder="Confidential Information (e.g. pricing, appraisal)"
          onChange={handleChange}
          value={form.confidentialInfo}
          required
          rows={4}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="duration"
          placeholder="Agreement Duration (e.g. 12 months)"
          onChange={handleChange}
          value={form.duration}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Agreement"}
        </button>
      </form>

      {generatedAgreement && (
        <div
          style={{
            whiteSpace: "pre-wrap",
            marginTop: "30px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h2>Generated Agreement</h2>
          <p>{generatedAgreement}</p>
        </div>
      )}
    </div>
  );
}
