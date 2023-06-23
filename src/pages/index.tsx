import React, { useContext, FormEvent } from "react";
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const router = useRouter();

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    if (username.length === 0 || secret.length === 0) return;

    axios
        .put(
            "https://api.chatengine.io/users/",
            { username, secret },
            { headers: { "Private-Key": process.env.PRIVATE_KEY } }
        )
        .then(() => router.push("/chats"));
  }

  return (
      <div className="background">
        <div className="auth-container">
          <form
              className="auth-form"
              onSubmit={onSubmit}
              aria-label="Authentication Form"
          >
            <div className="auth-title" aria-label="Nick's Cool Chat">
              Nick's Cool Chat
            </div>

            <div className="input-container">
              <input
                  id="username-input"
                  placeholder="Name"
                  aria-label="Name"
                  className="text-input"
                  onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="input-container">
              <input
                  type="password"
                  id="password-input"
                  placeholder="Password"
                  aria-label="Password"
                  className="text-input"
                  onChange={(e) => setSecret(e.target.value)}
              />
              <div className="help-tip">
                <p>
                  Simply put your name and make a password of your choosing to
                  track your message and chat history. Use that same info to login
                  in the future.
                </p>
              </div>
            </div>

            <button
                type="submit"
                className="submit-button"
                aria-label="Submit Login or Sign Up"
            >
              Login / Sign Up
            </button>
          </form>
        </div>
      </div>
  );
}
