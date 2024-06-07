import { Message } from "@/types/message";
import type { NextApiRequest, NextApiResponse } from "next";
import { allmessages } from "@/mockdata/messages";
type MessageResponse = Array<Message>;

async function GET(req: NextApiRequest) {
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
