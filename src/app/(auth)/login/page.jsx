"use client";

export const dynamic = "force-dynamic"; // <--- ADD THIS

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaSignInAlt } from "react-icons/fa";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/manage-events";

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-center text-indigo-700">
          Sign In
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Access your EventPulse dashboard
        </p>

        <button
          onClick={() =>
            signIn("google", { callbackUrl }) // Google login
          }
          className="w-full flex items-center justify-center bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
        >
          <FaSignInAlt className="mr-2" /> Sign In with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-indigo-600 ml-1 hover:text-indigo-500"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
