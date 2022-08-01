import React from 'react'
import { PlayerHead } from '../PlayerHead/PlayerHead'

import classes from './User.module.css'

interface Props {
  nickname: string
}

export const User: React.FC<Props> = ({ nickname }) => {
  return (
    <div className={classes.user}>
      <PlayerHead nickname={nickname} />
    </div>
  )
}

User.displayName = 'User'
