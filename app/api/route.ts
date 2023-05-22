import {NextResponse} from "next/server";

export async function GET(r:Request){
  console.log(r.url,'==================request url')
  return NextResponse.json({ data:'api' });
}
