"use client";

import { clearAuth, isAuthed, setAuth } from "@/app/utils/auth";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getIsAuthed = async (setIsAuth: Dispatch<SetStateAction<boolean>>) =>{
  const isAuth = await isAuthed()
  setIsAuth(isAuth)

}
export default function LoginPage() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    getIsAuthed(setIsAuth);
  }, [setIsAuth]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Login Page</h1>
      <p className="text-lg text-gray-600 mb-4">Auth: {isAuth ? "true" : "false"}</p>
      <div className="flex gap-4 mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
          Home
        </Link>
        <Link href="/authed" className="text-blue-600 hover:text-blue-800 font-medium">
          Authed
        </Link>
      </div>
      <hr className="w-full max-w-md border-gray-300 mb-6" />
      {isAuth ? (
        <button 
          onClick={() => (clearAuth("/login"), setIsAuth(false))}
          className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors"
        >
          Logout
        </button>
      ) : (
        <button 
          onClick={() => (setAuth("/login"), setIsAuth(true))}
          className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      )}
    </div>
  );
}
