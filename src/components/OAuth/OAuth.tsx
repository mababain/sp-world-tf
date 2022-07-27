import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { discordApi } from '../../api/discord'

export const OAuth: React.FC = () => {
  const [searchParams] = useSearchParams()
  const discordCode = searchParams.get('code')
  console.log(searchParams.toString())

  if (discordCode) {
    discordApi
      .getToken(discordCode)
      .then((token) => token.text())
      .then((data) => console.log(data))
  }
  return <></>
}

OAuth.displayName = 'OAuth'
