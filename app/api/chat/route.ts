import { NextResponse } from "next/server";
import OpenAI from "openai";
import { portfolioContext } from "@/lib/portfolio";

const client = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const chatMessages = messages.map((message: { role: "user" | "assistant"; content: string }) => ({
        role: message.role,
        content: message.content
    }))

    const response = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: portfolioContext,
        },
        ...chatMessages,
      ],
    });

    console.log("message", chatMessages)
    console.log("response", response)

    return NextResponse.json({
      message: response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}