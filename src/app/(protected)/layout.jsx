"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProtectedLayout({ children }) {
  const { data: session, status } = useSession();

  // Show loading while checking session
  if (status === "loading") {
    return <div className="p-20 text-center">Checking authentication...</div>;
  }

  // If not logged in → redirect to login page
  if (!session) {
    redirect("/login");  // <= your login path
  }

  // If authenticated → Allow access
  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-[85vh]">
      {children}
    </div>
  );
}
