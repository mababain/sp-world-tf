import React from 'react'
import { AuthButton } from '../AuthButton/AuthButton'

import classes from './Header.module.css'

export const Header: React.FC = () => {
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
      <AuthButton />
    </header>
  )
}

Header.displayName = 'Header'
