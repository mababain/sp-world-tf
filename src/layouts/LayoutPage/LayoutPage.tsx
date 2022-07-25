import React, { PropsWithChildren } from 'react'
import { Header } from '../../components'

import classes from './LayoutPage.module.css'

export const LayoutPage: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className={classes.page}>
      <Header />
      {children}
    </main>
  )
}

LayoutPage.displayName = 'LayoutPage'
