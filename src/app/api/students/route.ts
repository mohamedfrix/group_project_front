import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const authHeader = request.headers.get('Authorization');

  try {
    const response = await fetch('http://127.0.0.1:8080/api/students', {
      method: 'POST',
      headers: {
        'Authorization': authHeader || '',
        // Add this line to set the correct Content-Type for multipart form data
        'Content-Type': 'multipart/form-data; boundary=' + Math.random().toString().substr(2),
      },
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, {
      status: response.status,
    });
  } catch (error) {
    console.error('Error proxying request:', error);
    return NextResponse.json(
        { error: 'Failed to proxy request' },
        { status: 500 }
    );
  }
}