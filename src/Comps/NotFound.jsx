import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">

        <h1 className="text-8xl md:text-9xl font-extrabold bg-linear-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
          Page Not Found
        </h2>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="rounded-xl bg-zinc-100 px-6 py-1 text-black font-semibold transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-xl border border-zinc-700 px-6 py-1 text-zinc-300 font-semibold transition-all duration-300 hover:bg-zinc-800 hover:border-zinc-500"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;