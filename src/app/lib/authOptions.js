import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Credentials Provider for email/password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // **TODO: Call your Express API here to verify user credentials**
        // Example API call (replace with actual fetch):
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { ... });
        // const user = await res.json();
        
        // This is a temporary hardcoded check:
        if (credentials?.email === "admin@event.com" && credentials?.password === "password123") {
          return {
            id: "user-id-123",
            name: "Event Admin",
            email: "admin@event.com",
            role: "admin"
          };
        }
        return null; // Return null if user cannot be authenticated
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // Add custom fields (like role) to the JWT and session
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};