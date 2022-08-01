import React from 'react'
import { useUser } from '../../store/hooks'
import { AuthButton } from '../AuthButton/AuthButton'
import { User } from '../User/User'

import classes from './Header.module.css'

export const Header: React.FC = () => {
  const [user] = useUser()

  return (
    <header className={classes.header}>
      <h2 className={classes.headerTitle}>
        Торговая федерация{' '}
        <a
          className={classes.spLink}
          href="https://spworlds.ru/#servers"
          target="_blank"
          rel="noopener noreferrer"
        >
          СП5
        </a>
      </h2>
      {user ? <User nickname={user.nickname} /> : <AuthButton />}
    </header>
  )
}

Header.displayName = 'Header'
