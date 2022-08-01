import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

import classes from './Button.module.css'

interface Props {
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: boolean
}

export const Button: React.FC<PropsWithChildren<Props>> = ({
  children,
  className,
  onClick,
  type,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(classes.button, className)}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
