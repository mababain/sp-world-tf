import React from 'react'
import { TentsList } from '../../components/tents/TentsList/TentsList'
import { LayoutPage } from '../../components'
import { serverAPI } from '../../store/services/ServerApi'

import classes from './PageMain.module.css'

export const PageMain: React.FC = () => {
  const { data: tents } = serverAPI.useGetAllTentsQuery()

  return (
    <LayoutPage>
      <div className={classes.pageMain}>
        {tents && <TentsList tents={tents} />}
      </div>
    </LayoutPage>
  )
}

PageMain.displayName = 'PageMain'
