// import { NextAuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions: NextAuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID as string,
//       clientSecret: process.env.GITHUB_SECRET as string,
//     }),
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID as string,
//       clientSecret: process.env.GOOGLE_SECRET as string,
//     }),
//   ],
//   pages: { signIn: "/login" }, // *to redirect user to login page after logout
//   secret: process.env.NEXTAUTH_SECRET,
// };