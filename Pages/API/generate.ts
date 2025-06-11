import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  text: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ text: "Method Not Allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ text: "Prompt is required" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1000,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return res.status(500).json({ text: `OpenAI Error: ${data.error.message}` });
    }

    const output = data.choices?.[0]?.message?.content || "No output from OpenAI";

    return res.status(200).json({ text: output });
  } catch (error: any) {
    return res.status(500).json({ text: `Server error: ${error.message}` });
  }
}
