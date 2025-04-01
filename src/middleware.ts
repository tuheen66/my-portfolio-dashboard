import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./utils/actions/UserService";

type TRole = "admin";

const authRoutes = ["/login"];
const roleBasedPrivateRoutes = {
  admin: [/^\/admin/],
};

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `http://localhost:3000/login?redirectPath=${pathname}`,
          request.url
        )
      );
    }
  }
  if (userInfo?.role && roleBasedPrivateRoutes[userInfo?.role as TRole]) {
    const routes = roleBasedPrivateRoutes[userInfo?.role as TRole];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/login", request.url));
};

export const config = {
  matcher: ["/login", "/admin", "/admin/:page"],
};
