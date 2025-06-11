// components/AgentForm.tsx
"use client";

import React, { useState } from "react";

export default function AgentForm({ setResult }: { setResult: (text: string) => void }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // You can add your API call here
    setResult(`Generated agreement for ${name} from ${company}`);
  }

  return (
    <form onSubmit={onSubmit} style={{ maxWidth: "400px" }}>
      <label>
        Agent Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ width: "100%", marginBottom: "10px" }}
        />
      </label>
      <button type="submit" style={{ padding: "8px 12px" }}>
        Generate
      </button>
    </form>
  );
}
