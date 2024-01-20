import { NextResponse } from "next/server";
import { GiConsoleController } from "react-icons/gi";
let messages = [
  {
    id: 1,
    username: "Tezz",
    message: "Hi",
  },
  {
    id: 2,
    username: "Joe",
    message: "How you doing?",
  },
];
export async function POST(req: Request) {
  try {
    console.log("posting");
    const body = await req.json();
    console.log(body);
    const message = {
      id: messages.length + 1,
      ...body,
    };
    messages.push(message);
    // console.log(data);
    return NextResponse.json(message);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "failed" });
  }
}

const GET = async (request: Request) => {
  return NextResponse.json(messages);
};

export { GET };
