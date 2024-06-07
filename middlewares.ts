import { NextRequest, NextResponse } from "next/server";

// Remark: Middleware to provide page url to server (avoid hardcoding url)
export function middleware(request: NextRequest) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-url', request.url);
    return NextResponse.next({
        request: {
            headers: requestHeaders
        }
    })
}