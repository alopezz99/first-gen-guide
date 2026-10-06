"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function ProfilePage() {
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user);
      setLoading(false);
    }

    getUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/");
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F3ED] flex items-center justify-center">
        <p className="text-[#244A3F] font-semibold">
          Loading your profile...
        </p>
      </main>
    );
  }

  const name = user?.user_metadata?.name || "First-Gen Community Member";

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">

      {/* Navigation */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-[#244A3F]">
          The First-Gen Guide
        </a>

        <nav className="flex gap-6 items-center text-sm font-medium">
          <a
            href="/"
            className="hover:text-[#B36B45]"
          >
            Home
          </a>

          <button
            type="button"
            onClick={handleLogout}
            className="text-[#B36B45] font-semibold hover:opacity-70"
          >
            Log Out
          </button>
        </nav>
      </header>


      {/* Profile */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        <p className="text-[#B36B45] font-semibold mb-3">
          MY PROFILE
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-[#244A3F] mb-4">
          Welcome, {name}.
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          This is your home inside The First-Gen Guide community.
        </p>


        {/* Account Information */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">

          <h2 className="text-2xl font-bold text-[#244A3F] mb-6">
            Account Information
          </h2>

          <div className="space-y-5">

            <div>
              <p className="text-sm text-gray-500 mb-1">
                Name
              </p>

              <p className="font-semibold">
                {name}
              </p>
            </div>


            <div>
              <p className="text-sm text-gray-500 mb-1">
                Email
              </p>

              <p className="font-semibold">
                {user?.email}
              </p>
            </div>

          </div>

        </div>


        {/* Community Preview */}
        <div className="bg-[#244A3F] text-white rounded-2xl p-8">

          <p className="text-[#E7B08E] font-semibold mb-3">
            COMING NEXT
          </p>

          <h2 className="text-2xl font-bold mb-4">
            Your First-Gen community.
          </h2>

          <p className="text-gray-200 leading-relaxed">
            Soon you'll be able to ask questions, share your
            experiences, respond to other members, save helpful
            resources, and contribute to The First-Gen Guide.
          </p>

        </div>

      </section>

    </main>
  );
}