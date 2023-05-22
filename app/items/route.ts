import {NextRequest, NextResponse} from 'next/server';
import {cookies} from "next/headers";
import {redirect} from "next/navigation";






export const runtime = 'nodejs'; // 'nodejs' is the default
// https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator: any) {
  console.log('************run time')
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

const arr = new Uint8Array()
async function* makeIterator() {
  yield encoder.encode('<p>One</p>');
  await sleep(2000);
  yield encoder.encode('<p>Two</p>');
  await sleep(2000);
  yield encoder.encode('<p>Three</p>');
}

export async function GET() {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  return new Response(stream,{
    status:200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }
  });
}


// export async function GET(request: Request) {
//   // const cookieStore = cookies();
//   // const token = cookieStore.get('token');
//   //  使用抽象读取
//   // const requestHeaders = new Headers(request.headers);
//   const token = new NextRequest(request).cookies.get('cookie')
//   // 重定向
//   // redirect('/abc')
//   return new Response('Hello, Next.js!', {
//     status: 200,
//     headers: {
//       'Set-Cookie': `token=${token}+++++++++++` ,
//       referer: 'referer++++++++++++',},
//   });
// }

// export async function GET(request:Request) {
//   const cookieStore = cookies()
//   const token = cookieStore.get('token')
//   const data = await new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve(Math.random()*1000)
//     },500)
//   })
//   const response = {
//     data,
//     msg:'hello'
//   }
//   return new Response(JSON.stringify(response),{
//     status:200,
//     headers:{
//       'Set-Cookie':`token=${token || 'token'}`
//     }
//   })
// }
