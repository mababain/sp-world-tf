import React from 'react'
import cn from 'classnames'
import { TUser } from '../../../store/hooks'
import { Tent } from '../module'
import { TentCardRentAdd, TentCardRentNew } from './components'

import classes from './TentCard.module.css'
import { timeFormat } from '../../../utils'
import { PlayerHead } from '../../PlayerHead/PlayerHead'

interface Props {
  tent: Tent
  user: TUser | null
}

const isStatusFree = (status: Tent['status']): status is string =>
  status === 'free'

export const TentCard: React.FC<Props> = ({ tent, user }) => {
  const { id, status } = tent
  const tentNumber = id + 1

  let isUserTent = false
  if (!isStatusFree(status) && status.nickname === user?.nickname) {
    isUserTent = true
  }

  return (
    <div className={classes.card}>
      <div className={classes.cardEl}>
        <span className={classes.cardTitle}>Палатка №{tentNumber}</span>
        {isUserTent && <span className={classes.cardTitleOwnder}>(Ваша)</span>}
      </div>
      {isStatusFree(status) ? (
        <div className={cn(classes.cardEl, classes.cardElButton)}>
          <TentCardRentNew tent={tent} />
        </div>
      ) : isUserTent ? (
        <div className={cn(classes.cardEl, classes.cardElButton)}>
          <TentCardRentAdd tent={tent} />
        </div>
      ) : (
        <>
          <div className={cn(classes.cardEl, classes.cardTime)}>
            <span>До {timeFormat.format(+status.expirationDate)}</span>
          </div>
          <div className={cn(classes.cardEl, classes.cardOwner)}>
            <span className={classes.cardOwnerName}>{status.nickname}</span>
            <PlayerHead nickname={status.nickname} />
          </div>
        </>
      )}
    </div>
  )
}

TentCard.displayName = 'TentCard'
