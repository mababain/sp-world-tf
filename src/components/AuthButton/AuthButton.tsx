import React from 'react'
import { EXTERNAL_LINKS } from '../../utils'

import classes from './AuthButton.module.css'

export const AuthButton: React.FC = () => {
  return (
    <a href={EXTERNAL_LINKS.discordOAuth} className={classes.button}>
      Войти
    </a>
  )
}

AuthButton.displayName = 'AuthButton'
