"use client";
import { useAuth } from "../../context/AuthContext"; // adjust path

export default function LoginPage() {
  const { handleLogin } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>
    </div>
  );
}
