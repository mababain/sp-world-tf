import React from 'react'
import { timeFormat } from '../../../utils'
import { Button } from '../../Button/Button'
import { PlayerHead } from '../../PlayerHead/PlayerHead'
import { Tent } from '../module'

import classes from './TentCard.module.css'

interface Props {
  tent: Tent
}

const isStatusFree = (status: Tent['status']): status is string =>
  status === 'free'

export const TentCard: React.FC<Props> = ({ tent }) => {
  const { id, status } = tent

  return (
    <div className={classes.card}>
      <span className={classes.cardTitle}>Палатка №{id + 1}</span>
      {isStatusFree(status) ? (
        <Button>Арендовать</Button>
      ) : (
        <>
          <span className={classes.cardTime}>
            До {timeFormat.format(+status.expirationDate)}
          </span>
          <div className={classes.cardOwner}>
            <span className={classes.cardOwnerName}>{status.nickname}</span>
            <PlayerHead nickname={status.nickname} />
          </div>
        </>
      )}
    </div>
  )
}

TentCard.displayName = 'TentCard'
