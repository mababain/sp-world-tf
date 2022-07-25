import React from 'react'

import classes from './PlayerHead.module.css'

interface Props {
  nickname: string
}

export const PlayerHead: React.FC<Props> = ({ nickname }) => {
  const avatarSrc = `https://cravatar.eu/helmavatar/${nickname}/190.png`
  return (
    <div className={classes.head}>
      <img className={classes.headImg} src={avatarSrc} alt={nickname} />
    </div>
  )
}

PlayerHead.displayName = 'PlayerHead'
