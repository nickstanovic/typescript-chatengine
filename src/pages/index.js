import React, { useContext } from "react";
import { Context } from "@/context";
import axios from "axios"
import { useRouter } from "next/router"

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context)
  const router = useRouter()

  function onSubmit(event) {
    event.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

      axios
        .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "a5cde5eb-da3b-489c-8a53-d6b8254fe1ac" } }
      )
        .then(r => router.push("/chats"))
    }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={event => onSubmit(event)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Name"
              className="text-input"
              onChange={event => setUsername(event.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              placeholder="Password"
              type="password"
              className="text-input"
              onChange={event => setSecret(event.target.value)}
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            onSubmit={event => onSubmit(event)}
          >
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
