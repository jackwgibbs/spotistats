"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Summary() {
  const { data: session, status } = useSession();

  const router = useRouter();

  // Redirect to / if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  // Show nothing while loading
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // Show summary if authenticated
  if (status === "authenticated") {
    return (
      <>
        <h1>Summary</h1>
        <div className="p-6">
          <p className="text-white font-normal text-xl mt-5 mb-2">Signed In as</p>
          <span className="bold-txt">{session?.user?.name}</span>
          <p
            className="opacity-70 mt-8 mb-5 underline cursor-pointer"
            onClick={() => signOut()}>
            Sign Out
          </p>
        </div>
      </>
    );
  }
}
