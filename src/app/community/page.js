"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function CommunityPage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("College");

  const [replyText, setReplyText] = useState({});
  const [loading, setLoading] = useState(true);
  const [posting, setPosting] = useState(false);
  const [replyingTo, setReplyingTo] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    loadCommunity();
  }, []);

  async function loadCommunity() {
    setLoading(true);
    setError("");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);

    const { data: postData, error: postError } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (postError) {
      setError(postError.message);
      setLoading(false);
      return;
    }

    setPosts(postData || []);

    const { data: commentData, error: commentError } = await supabase
      .from("comments")
      .select("*")
      .order("created_at", { ascending: true });

    if (commentError) {
      setError(commentError.message);
    } else {
      const groupedComments = {};

      (commentData || []).forEach((comment) => {
        if (!groupedComments[comment.post_id]) {
          groupedComments[comment.post_id] = [];
        }

        groupedComments[comment.post_id].push(comment);
      });

      setComments(groupedComments);
    }

    setLoading(false);
  }

  async function createPost(e) {
    e.preventDefault();

    if (!user) {
      setError("Please log in before creating a post.");
      return;
    }

    if (!title.trim() || !content.trim()) {
      setError("Please add a title and message.");
      return;
    }

    setPosting(true);
    setError("");

    const authorName =
      user.user_metadata?.name || "First-Gen Community Member";

    const { error } = await supabase.from("posts").insert({
      user_id: user.id,
      author_name: authorName,
      title: title.trim(),
      content: content.trim(),
      category,
    });

    if (error) {
      setError(error.message);
      setPosting(false);
      return;
    }

    setTitle("");
    setContent("");
    setCategory("College");

    await loadCommunity();

    setPosting(false);
  }

  async function createReply(postId) {
    if (!user) {
      setError("Please log in before replying.");
      return;
    }

    const reply = replyText[postId]?.trim();

    if (!reply) {
      setError("Please write a reply first.");
      return;
    }

    setReplyingTo(postId);
    setError("");

    const authorName =
      user.user_metadata?.name || "First-Gen Community Member";

    const { error } = await supabase.from("comments").insert({
      post_id: postId,
      user_id: user.id,
      author_name: authorName,
      content: reply,
    });

    if (error) {
      setError(error.message);
      setReplyingTo(null);
      return;
    }

    setReplyText((previous) => ({
      ...previous,
      [postId]: "",
    }));

    await loadCommunity();

    setReplyingTo(null);
  }

  return (
    <main className="min-h-screen bg-[#F7F3ED] text-[#1F2933]">

      {/* Navigation */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">

        <a href="/" className="text-xl font-bold text-[#244A3F]">
          The First-Gen Guide
        </a>

        <nav className="flex gap-6 text-sm font-medium items-center">

          <a href="/college" className="hover:text-[#B36B45]">
            College
          </a>

          <a href="/career" className="hover:text-[#B36B45]">
            Career
          </a>

          {user ? (
            <a
              href="/profile"
              className="font-semibold text-[#244A3F] hover:text-[#B36B45]"
            >
              My Profile
            </a>
          ) : (
            <a
              href="/login"
              className="font-semibold text-[#244A3F] hover:text-[#B36B45]"
            >
              Log In
            </a>
          )}

        </nav>

      </header>


      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-10 text-center">

        <p className="text-[#B36B45] font-semibold mb-3">
          FIRST-GEN COMMUNITY
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[#244A3F] mb-6">
          You don't have to figure it all out alone.
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Ask questions, share what you've learned, and connect with
          people navigating college, careers, money, and professional life.
        </p>

      </section>


      <section className="max-w-4xl mx-auto px-6 pb-20">

        {/* Create Post */}
        {user ? (
          <form
            onSubmit={createPost}
            className="bg-white rounded-2xl p-8 shadow-sm mb-12"
          >

            <p className="text-[#B36B45] text-sm font-semibold mb-2">
              SHARE WITH THE COMMUNITY
            </p>

            <h2 className="text-2xl font-bold text-[#244A3F] mb-6">
              Ask a question or share your experience.
            </h2>

            <label className="block font-semibold mb-2">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl p-3 mb-5 bg-white"
            >
              <option>College</option>
              <option>Job Search</option>
              <option>Career</option>
              <option>Money</option>
              <option>Corporate Life</option>
              <option>First-Gen Life</option>
            </select>

            <label className="block font-semibold mb-2">
              Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What do you want to ask or share?"
              maxLength="150"
              className="w-full border border-gray-300 rounded-xl p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
            />

            <label className="block font-semibold mb-2">
              Your post
            </label>

            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows="6"
              maxLength="3000"
              placeholder="Share a question, experience, lesson, or advice..."
              className="w-full border border-gray-300 rounded-xl p-4 mb-5 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
            />

            <button
              type="submit"
              disabled={posting}
              className="bg-[#244A3F] text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 disabled:opacity-50"
            >
              {posting ? "Publishing..." : "Publish Post →"}
            </button>

          </form>
        ) : (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-12 text-center">

            <h2 className="text-2xl font-bold text-[#244A3F] mb-3">
              Join the conversation.
            </h2>

            <p className="text-gray-600 mb-6">
              Create an account or log in to ask questions and share
              your experiences.
            </p>

            <a
              href="/login"
              className="inline-block bg-[#244A3F] text-white px-7 py-3 rounded-full font-semibold"
            >
              Log In →
            </a>

          </div>
        )}


        {error && (
          <div className="bg-red-50 text-red-700 p-4 rounded-xl mb-8">
            {error}
          </div>
        )}


        {/* Community Feed */}
        <div>

          <p className="text-[#B36B45] text-sm font-semibold mb-2">
            COMMUNITY CONVERSATIONS
          </p>

          <h2 className="text-3xl font-bold text-[#244A3F] mb-8">
            Latest from the community
          </h2>


          {loading ? (
            <p className="text-gray-500">
              Loading conversations...
            </p>
          ) : posts.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center">

              <h3 className="text-xl font-bold text-[#244A3F] mb-2">
                No posts yet.
              </h3>

              <p className="text-gray-600">
                Be the first person to start a conversation.
              </p>

            </div>
          ) : (
            <div className="space-y-8">

              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl p-7 shadow-sm"
                >

                  <div className="flex justify-between gap-4 mb-4">

                    <span className="text-sm font-semibold text-[#B36B45]">
                      {post.category}
                    </span>

                    <span className="text-sm text-gray-400">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>

                  </div>


                  <h3 className="text-2xl font-bold text-[#244A3F] mb-3">
                    {post.title}
                  </h3>


                  <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-5">
                    {post.content}
                  </p>


                  <p className="text-sm text-gray-500 mb-6">
                    Shared by{" "}
                    <span className="font-semibold text-[#1F2933]">
                      {post.author_name}
                    </span>
                  </p>


                  {/* Replies */}
                  <div className="border-t border-gray-200 pt-6">

                    <h4 className="font-bold text-[#244A3F] mb-4">
                      Replies ({comments[post.id]?.length || 0})
                    </h4>


                    {comments[post.id]?.length > 0 && (
                      <div className="space-y-4 mb-6">

                        {comments[post.id].map((comment) => (
                          <div
                            key={comment.id}
                            className="bg-[#F7F3ED] rounded-xl p-4"
                          >

                            <div className="flex justify-between gap-4 mb-2">

                              <span className="font-semibold text-sm">
                                {comment.author_name}
                              </span>

                              <span className="text-xs text-gray-400">
                                {new Date(
                                  comment.created_at
                                ).toLocaleDateString()}
                              </span>

                            </div>

                            <p className="text-gray-700 whitespace-pre-line">
                              {comment.content}
                            </p>

                          </div>
                        ))}

                      </div>
                    )}


                    {user ? (
                      <div>

                        <textarea
                          value={replyText[post.id] || ""}
                          onChange={(e) =>
                            setReplyText((previous) => ({
                              ...previous,
                              [post.id]: e.target.value,
                            }))
                          }
                          rows="3"
                          maxLength="1500"
                          placeholder="Write a reply..."
                          className="w-full border border-gray-300 rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-[#244A3F]"
                        />

                        <button
                          type="button"
                          onClick={() => createReply(post.id)}
                          disabled={replyingTo === post.id}
                          className="bg-[#244A3F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 disabled:opacity-50"
                        >
                          {replyingTo === post.id
                            ? "Replying..."
                            : "Reply →"}
                        </button>

                      </div>
                    ) : (
                      <p className="text-sm text-gray-500">
                        <a
                          href="/login"
                          className="font-semibold text-[#244A3F]"
                        >
                          Log in
                        </a>{" "}
                        to reply to this conversation.
                      </p>
                    )}

                  </div>

                </article>
              ))}

            </div>
          )}

        </div>

      </section>

    </main>
  );
}