"use client";

import { Hero } from "@/components";
import CarCatalogue from "@/components/CarCatalogue";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/sign_in"); // Redirect if not signed in
    }
  }, [status, router]);

  if (status === "loading") {
    return <p className="text-center text-xl">Loading...</p>; // Show loading state
  }

  return (
    <main className="overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}


// "use client";

// import { Hero } from "@/components";
// import CarCatalogue from "@/components/CarCatalogue";
// import { auth } from "@/lib/auth";
// import { redirect } from "next/navigation";

// export default async function Home() {
//   const session = await auth();
//   if(!session) redirect('/sign_in')
//   return (
//     <main className="overflow-hidden">
//       <Hero />
//       <CarCatalogue />
//     </main>
//   );
// }