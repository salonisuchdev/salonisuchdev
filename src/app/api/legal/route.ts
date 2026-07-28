import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(request: NextRequest) {
  const { query } = await request.json();
  if (!query) return NextResponse.json({ error: 'Query is required' }, { status: 400 });

  let message;
  try {
    message = await client.messages.create({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: `You are a UK legal system expert who explains complex legal concepts in plain, accessible English. Your role is to help a business professional understand legal terminology, processes, court structures, practice areas, and law firm dynamics, particularly in the context of how AI is being adopted in legal work.

When explaining concepts:
- Use simple, clear language with no unnecessary jargon
- Always give a real-world example to illustrate
- Where relevant, note why this concept matters for law firm operations or AI adoption
- Keep responses concise but complete, around 150-250 words
- Structure with a clear definition, then an example, then why it matters in practice

You focus on UK law but can draw comparisons with other jurisdictions when helpful.`,
      messages: [{ role: 'user', content: query }],
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const content = message.content[0];
  if (content.type !== 'text') return NextResponse.json({ error: 'Unexpected response' }, { status: 500 });
  return NextResponse.json({ response: content.text });
}
