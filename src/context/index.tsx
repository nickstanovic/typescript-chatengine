import React, { ReactNode, useState, createContext } from "react"

export interface IContext {
  username: string,
  setUsername: (username: string) => void,
  secret: string,
  setSecret: (secret: string) => void,
}

export const Context = createContext<IContext>({} as IContext)

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({children}) => {
  const [username, setUsername] = useState<string>("")
  const [secret, setSecret] = useState<string>("")

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
