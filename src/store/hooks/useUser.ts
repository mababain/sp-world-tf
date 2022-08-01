import { useState } from 'react'

export interface TUser {
  nickname: string
  streak: number
}

export function useUser() {
  const [user, setUser] = useState<TUser | null>(null)
  window.userFetch.then((userRes) => setUser(userRes))
  return [user, setUser] as const
}
