export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",

          // مهم جدًا لـ OpenRouter (مو اختياري)
          "HTTP-Referer": "http://localhost:3000",
          "X-Title": "My Next.js Chatbot",
        },
        body: JSON.stringify({
          model: "openai/gpt-4o-mini", 
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    const data = await response.json();

    // استخراج الرد
    const reply = data?.choices?.[0]?.message?.content;

    return Response.json({
      reply: reply || "No response from AI",
    });

  } catch (error) {
    console.error(error);
    return Response.json(
      { reply: "Server error" },
      { status: 500 }
    );
  }
}