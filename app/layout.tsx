// app/layout.tsx
import React from "react";

export const metadata = {
  title: "PolicyAI1",
  description: "AI-generated policy documents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
