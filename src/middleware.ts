import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/profile"]);

export const config = {
  matcher: ["/profile"],
};