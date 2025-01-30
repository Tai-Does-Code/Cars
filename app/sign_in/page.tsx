"use client";

import { useState } from "react";
import Link from "next/link";

const signIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg max-w-sm mx-auto">
      <h2 className="text-center text-2xl font-bold">Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Sign In
      </button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/sign_up" className="text-blue-500 underline">
          Sign up here
        </Link>
      </p>
    </form>
  );
};

export default signIn;