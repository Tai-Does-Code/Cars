"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setMessage("User created successfully!");
      setEmail("");
      setPassword("");
    } catch (error) {
      setMessage(error.message || "Sign-up failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg max-w-sm mx-auto">
      <h2 className="text-center text-2xl font-bold">Sign Up</h2>

      {message && <p className="text-center text-red-500">{message}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Sign Up
      </button>

      <p className="text-center">
        Already have an account?{" "}
        <Link href="/sign_in" className="text-blue-500 underline">
          Sign in here
        </Link>
      </p>
    </form>
  );
};

export default SignUpForm;