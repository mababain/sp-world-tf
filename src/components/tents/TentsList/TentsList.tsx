import React from 'react'
import { Tents } from '../module'
import { TentCard } from '../TentCard/TentCard'

import classes from './TentsList.module.css'

interface Props {
  tents: Tents
}

export const TentsList: React.FC<Props> = ({ tents }) => {
  return (
    <div className={classes.list}>
      {tents.map((tent) => (
        <TentCard tent={tent} key={tent.id} />
      ))}
    </div>
  )
}

TentsList.displayName = 'TentsList'
