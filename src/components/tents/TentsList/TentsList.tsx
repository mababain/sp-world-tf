import React from 'react'
import { useUser } from '../../../store/hooks'
import { Tents } from '../module'
import { TentCard } from '../TentCard/TentCard'

import classes from './TentsList.module.css'

interface Props {
  tents: Tents
}

export const TentsList: React.FC<Props> = ({ tents }) => {
  const [user] = useUser()
  return (
    <div className={classes.list}>
      {tents.map((tent) => (
        <TentCard tent={tent} key={tent.id} user={user} />
      ))}
    </div>
  )
}

TentsList.displayName = 'TentsList'
