import { allusers } from "@/mockdata/users";
import type { NextApiRequest } from "next";

async function GET(req: NextApiRequest) {
    const { searchParams } = new URL(req.url || '');
    const results = allusers.filter(user => {
        return searchParams.has('id') ? searchParams.get('id') === user.id : true
    });
    return Response.json(results);
}

export { GET }
