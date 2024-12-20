"use client";

import { clearAuth, isAuthed, setAuth } from "@/app/utils/auth";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
const getIsAuthed = (setIsAuth: Dispatch<SetStateAction<boolean>>
) =>
  isAuthed().then((authed) => {
    setIsAuth(authed);
  });
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
      <br />
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
