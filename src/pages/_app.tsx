import type { AppProps } from 'next/app'
import React from "react"

import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";

import { ContextProvider } from "../context"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
