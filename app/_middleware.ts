import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  // Example: Redirect `/` to `/home`
  if (url.pathname === "/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}
