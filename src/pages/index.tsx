import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <h1>Bem Vindo</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <a href="/api/auth/login">Login</a>
    </div>
  );
}
