import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Simulate a delay (e.g., sending to an external service)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically save to a database or send to a newsletter service
    console.log(`Newsletter subscription for: ${email}`);

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
