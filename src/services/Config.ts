import React from 'react'

type Config = {
  user: { username: string }
  setUser: () => void
}

export const ConfigContext = React.createContext<Config | null>(null)
