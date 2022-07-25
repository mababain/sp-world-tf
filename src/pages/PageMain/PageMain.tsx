import React from 'react'
import { TentsList } from '../../components/tents/TentsList/TentsList'
import { LayoutPage } from '../../layouts'

import classes from './PageMain.module.css'
import data from './data.json'

export const PageMain: React.FC = () => {
  return (
    <LayoutPage>
      <div className={classes.pageMain}>
        <TentsList tents={data} />
      </div>
    </LayoutPage>
  )
}

PageMain.displayName = 'PageMain'
