import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json();

  try {
    const res = await fetch("https://n8n.unitzero.tech/webhook/chatbot-webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sessionId }),
    });

    // Try parsing text or JSON depending on the webhook's response type
    let reply = "Chatbot did not return a valid response.";
    try {
      const text = await res.text();
      // optional: detect if it's JSON accidentally
      if (text.startsWith("{") || text.startsWith("[")) {
        const parsed = JSON.parse(text);
        reply = parsed.reply || JSON.stringify(parsed);
      } else {
        reply = text;
      }
    } catch (err) {
      console.error("Failed to parse chatbot response:", err);
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Error connecting to n8n:", error);
    return NextResponse.json(
      { reply: "Unable to connect to chatbot." },
      { status: 500 }
    );
  }
}
