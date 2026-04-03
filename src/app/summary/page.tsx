'use client'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Summary() {
    const { data: session } = useSession();

    return (
        <>
            <h1>Summary</h1>
            <div className='p-6'>
                <p className='text-white font-normal text-xl mt-5 mb-2'>Signed In as</p>
                <span className='bold-txt'>{session?.user?.name}</span>
                <p className='opacity-70 mt-8 mb-5 underline cursor-pointer' onClick={() => signOut()}>Sign Out</p>
            </div>
        </>
    )
}
