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
    <div>
      <h1>Login Page</h1>
      <p>Auth: {isAuth ? "true" : "false"}</p>
      <Link href="/">Home</Link>
      <br />
      <Link href="/authed">Authed</Link>
      <br />
      <br />
      <hr />
      {isAuth ? (
        <button onClick={() => (clearAuth("/login"), setIsAuth(false))}>
          Logout
        </button>
      ) : (
        <button onClick={() => (setAuth("/login"), setIsAuth(true))}>
          Login
        </button>
      )}
    </div>
  );
}
