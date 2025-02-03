import cn from 'classnames'
import type { SVGProps } from 'react'
import * as s from './styles.module.scss'

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'type' | 'viewBox'> {}

export const Svg = ({ className, children, ...props }: IconProps) => {
  return (
    <svg
      aria-hidden
      className={cn(s.icon, className)}
      focusable="false"
      viewBox="0 0 20 20"
      {...props}
    >
      {children}
    </svg>
  )
}
