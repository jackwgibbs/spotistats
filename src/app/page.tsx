'use client'
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <>
      <h1>Spotistats</h1>
      <p>Welcome to Spotistats</p>
      <button onClick={() => signIn('spotify', { callbackUrl: '/summary' })}
              className='shadow-primary w-50 h-10 rounded-xl bg-white border-0 text-black text-3xl active:scale-[0.99] m-6'>Sign
          In
      </button>
    </>
  )
}
