import React, { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'
import { ReactComponent as CloseSvg } from '../../assets/icons/close.svg'

import classes from './Modal.module.css'

interface Props {
  closeModal: () => void
  title: string
}

export const Modal: React.FC<PropsWithChildren<Props>> = ({
  children,
  closeModal,
  title,
}) => {
  return createPortal(
    <>
      <div onClick={closeModal} className={classes.background}></div>
      <div className={classes.modal}>
        <div className={classes.modelInner}>
          <header className={classes.header}>
            <h3 className={classes.title}>{title}</h3>
            <button onClick={closeModal} className={classes.closeButton}>
              <CloseSvg className={classes.closeImage} />
            </button>
          </header>
          {children && <div className={classes.content}>{children}</div>}
        </div>
      </div>
    </>,
    document.getElementById('root') as HTMLElement
  )
}

Modal.displayName = 'Modal'
