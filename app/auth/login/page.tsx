"use client";

import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      
      {/* Card */}
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-orange-500">Expense</span> Tracker
        </h1>

        <p className="text-center text-gray-400 text-sm mb-6">
          {isLogin ? "Login to continue" : "Create your account"}
        </p>

        {/* Form */}
        <form className="space-y-4">
          
          {!isLogin && (
            <div>
              <label className="text-sm text-gray-400">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
              />
            </div>
          )}

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full mt-1 p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="text-sm text-gray-400">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full mt-1 p-3 rounded-lg bg-black border border-zinc-700 focus:outline-none focus:border-orange-500"
              />
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-semibold"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-sm text-center mt-6 text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </main>
  );
}