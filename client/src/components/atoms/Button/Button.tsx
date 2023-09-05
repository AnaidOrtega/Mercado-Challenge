import React, { FC, ButtonHTMLAttributes } from 'react'
import styles from './button.module.scss'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = ({ color, ...rest }) => {
  return <button className={[styles.button, styles[color ?? 'primary']].join(' ')} {...rest} />
}

Button.defaultProps = {
  color: 'primary',
}
