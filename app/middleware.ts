import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") as string;
  const isMobile = /Mobi|Android/i.test(userAgent);
  const response = NextResponse.next();
  response.headers.set("x-is-mobile", isMobile.toString());
  console.log("🚀 ~ middleware ~ isMobile:", isMobile)
  return response;
}
