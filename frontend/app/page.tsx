"use client";

import { useEffect, useState } from "react";
import { getPosts, createPost, deletePost } from "../lib/api";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await getPosts();
      setPosts(res.data);
    } catch {
      alert("Error fetching posts");
    }
    setLoading(false);
  };

  useEffect(() => {
    const loadPosts = async () => {
      await fetchPosts();
    };
    loadPosts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !body) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createPost({ title, body });
      setTitle("");
      setBody("");
      fetchPosts();
    } catch {
      alert("Error creating post");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      fetchPosts();
    } catch {
      alert("Error deleting post");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-xl p-6">

        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Post Manager
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded-lg shadow-md space-y-3"
        >
          <input
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">
            Add Post
          </button>
        </form>

        {/* Posts */}
        <div className="mt-6 space-y-4">
          {loading ? (
            <p className="text-center text-gray-500">Loading...</p>
          ) : posts.length === 0 ? (
            <p className="text-center text-gray-500">No posts yet</p>
          ) : (
            posts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-4 rounded-lg shadow-md"
              >
                <h3 className="font-semibold text-lg text-gray-800">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.body}</p>

                <button
                  onClick={() => handleDelete(post.id)}
                  className="mt-3 text-sm text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}