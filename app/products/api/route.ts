import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log(id,'**************************id')
  const res = await new Promise(resolve => {
    resolve(45555555)
  });
  const product = res;

  return NextResponse.json({ product });
}
