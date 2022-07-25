import React, { PropsWithChildren } from 'react'

import classes from './Button.module.css'

export const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <button className={classes.button}>{children}</button>
}

Button.displayName = 'Button'
