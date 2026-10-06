"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setMessage(
        "Your account was created! Welcome to The First-Gen Guide. You can now log in."
      );

    setName("");
    setEmail("");
    setPassword("");
    setLoading(false);
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


      {/* Signup */}
      <section className="max-w-md mx-auto px-6 py-16">

        <p className="text-[#B36B45] font-semibold mb-3">
          JOIN THE COMMUNITY
        </p>

        <h1 className="text-4xl font-bold text-[#244A3F] mb-4">
          Create your account.
        </h1>

        <p className="text-gray-600 leading-relaxed mb-8">
          Join The First-Gen Guide community to connect with others,
          share what you've learned, ask questions, and help make the
          first-gen journey a little easier for someone else.
        </p>


        <form
          onSubmit={handleSignup}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >

          <label className="block font-semibold mb-2">
            Your name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Alma"
            className="w-full border border-gray-300 rounded-xl p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
          />


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
            minLength="6"
            placeholder="At least 6 characters"
            className="w-full border border-gray-300 rounded-xl p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
          />


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#244A3F] text-white py-4 rounded-xl font-semibold hover:opacity-90 disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account →"}
          </button>


          {message && (
            <div className="mt-5 bg-green-50 text-green-800 p-4 rounded-xl">
              {message}
            </div>
          )}


          {error && (
            <div className="mt-5 bg-red-50 text-red-700 p-4 rounded-xl">
              {error}
            </div>
          )}

        </form>


        <p className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <span className="font-semibold text-[#244A3F]">
            Log in
          </span>
        </p>

      </section>

    </main>
  );
}