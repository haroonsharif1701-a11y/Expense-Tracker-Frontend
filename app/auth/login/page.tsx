"use client";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import {
  loginUser,
  registerUser
} from "@/src/services/authService";

export default function AuthPage() {

  const [isLogin, setIsLogin] = useState(true);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    loginName: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

 const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {

  e.preventDefault();


    try {

      setLoading(true);

      // LOGIN
      if (isLogin) {

        const data = await loginUser({
          loginName: formData.loginName,
          password: formData.password
        });

        localStorage.setItem("token", data.token);

        alert("Login successful");

        console.log(data);

      }

      // REGISTER
      else {

        if (
          formData.password !==
          formData.confirmPassword
        ) {
          alert("Passwords do not match");
          return;
        }

        const data = await registerUser({
          fullName: formData.fullName,
          loginName: formData.loginName,
          password: formData.password,
          regId: "",
          os: "web"
        });

        alert(data.message || "Registration successful");

        setIsLogin(true);
      }

    } catch (error: unknown) {

  console.error(error);

  if (axios.isAxiosError(error)) {

    alert(
      error.response?.data?.message ||
      "Something went wrong"
    );

  } else {

    alert("Unexpected error");
  }

} finally {

      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">
          <span className="text-orange-500">
            Expense
          </span>{" "}
          Tracker
        </h1>

        <p className="text-center text-gray-400 text-sm mb-6">
          {isLogin
            ? "Login to continue"
            : "Create your account"}
        </p>

        <form
          className="space-y-4"
          onSubmit={handleSubmit}
        >

          {!isLogin && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            />
          )}

          <input
            type="text"
            name="loginName"
            value={formData.loginName}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black border border-zinc-700"
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-3 rounded-lg bg-black border border-zinc-700"
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 transition p-3 rounded-lg font-semibold"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Register"}
          </button>

        </form>

        <p className="text-sm text-center mt-6 text-gray-400">

          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          {" "}

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500"
          >
            {isLogin ? "Register" : "Login"}
          </button>

        </p>

      </div>
    </main>
  );
}