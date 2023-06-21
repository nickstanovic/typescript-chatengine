import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";

import { useRouter } from "next/router";
import dynamic from "next/dynamic"

type ContextType = {
  username: string;
  secret: string;
};

const ChatEngine = dynamic(() =>
    import("react-chat-engine").then((module) => module.ChatEngine)
)

const MessageFormSocial = dynamic(() =>
    import("react-chat-engine").then((module) => module.MessageFormSocial)
)

export default function Chats() {
  const { username, secret } = useContext(Context) as ContextType;
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setShowChat(true);
    }
  })

  useEffect(() => {
    if (username.length === 0 || secret.length === 0) router.push("/");
  })

  if (!showChat) return <div />;

  return (
      <div className="background">
        <div className="shadow">
          <ChatEngine
              height="calc(100vh - 200px)"
              projectID="715bf3c1-6421-477e-8300-112ebe6213ba"
              userName={username}
              userSecret={secret}
              renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
  );
}
