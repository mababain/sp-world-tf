import React from 'react'

import classes from './AuthButton.module.css'

export const AuthButton: React.FC = () => {
  return <button className={classes.button}>Войти</button>
}

AuthButton.displayName = 'AuthButton'
