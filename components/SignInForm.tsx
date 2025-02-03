"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await signIn("credentials", {
      redirect: false, // Prevents automatic redirection
      email,
      password,
    });

    if (response?.error) {
      setError("Invalid email or password.");
    } else {
      router.push("/"); // Redirect to home page after successful login
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg max-w-sm mx-auto">
      <h2 className="text-center text-2xl font-bold">Sign In</h2>
      
      {error && <p className="text-red-500 text-center">{error}</p>}

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

export default SignInForm;


// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const SignInForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg max-w-sm mx-auto"
    
//     action = {
//         async (formData: FormData) => {
//           "use server";
//           await executeAction({
//             actionFn: async() => {
//               await signIn("credentials", formData);
//             }
//           })
//         }
//       }

//     >
//       <h2 className="text-center text-2xl font-bold">Sign In</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="border p-2 rounded"
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="border p-2 rounded"
//         required
//       />
//       <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//         Sign In
//       </button>
//       <p className="text-center">
//         Don't have an account?{" "}
//         <Link href="/sign_up" className="text-blue-500 underline">
//           Sign up here
//         </Link>
//       </p>
//     </form>
//   );
// };

// export default SignInForm;