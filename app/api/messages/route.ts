import { Message } from "@/types/message";
import type { NextRequest } from "next/server";
import { allmessages } from "@/mockdata/messages";
type MessageResponse = Array<Message>;

async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url || '');
    const result = allmessages.filter((message) => {
        return (
            (
                searchParams.has('from') 
                ? searchParams.get('from') === message.sender 
                : true
            )
            && 
            (
                searchParams.has('to') 
                ? searchParams.get('to') === message.recipient
                : true
            ));
    });
    return Response.json(result);
}

export { GET };
export type { MessageResponse };
