"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/");
  }

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">

      {/* Navigation */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-[#244A3F]">
          The First-Gen Guide
        </a>

        <a
          href="/"
          className="text-sm font-medium hover:text-[#B36B45]"
        >
          Back Home
        </a>
      </header>


      {/* Login */}
      <section className="max-w-md mx-auto px-6 py-16">

        <p className="text-[#B36B45] font-semibold mb-3">
          WELCOME BACK
        </p>

        <h1 className="text-4xl font-bold text-[#244A3F] mb-4">
          Log in to your account.
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Continue exploring The First-Gen Guide and connect with the
          community.
        </p>


        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >

          <label className="block font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded-xl p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
          />


          <label className="block font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Your password"
            className="w-full border border-gray-300 rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
          />


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#244A3F] text-white py-4 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Log In →"}
          </button>


          {error && (
            <div className="mt-5 bg-red-50 text-red-700 p-4 rounded-xl">
              {error}
            </div>
          )}

        </form>


        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-[#244A3F] hover:text-[#B36B45]"
          >
            Create one
          </a>
        </p>

      </section>

    </main>
  );
}