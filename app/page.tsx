// app/page.tsx
"use client";

import { useState } from "react";
import AgentForm from "../components/AgentForm";

export default function Home() {
  const [result, setResult] = useState("");

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>PolicyAI1 - Generate Confidentiality Agreements</h1>
      <AgentForm setResult={setResult} />
      <pre
        style={{
          whiteSpace: "pre-wrap",
          backgroundColor: "#f4f4f4",
          padding: "10px",
          marginTop: "20px",
          borderRadius: "4px",
        }}
      >
        {result}
      </pre>
    </main>
  );
}
