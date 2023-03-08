import styles from './P.module.sass'
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'

interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	children: ReactNode
	size?: 'sm' | 'base' | 'lg'
}

export const P = ({children, size = 'base', className, ...props}: PProps) => {
	return (
		<div className={cn(styles.p, className, {
			[styles.sm]: size === 'sm',
			[styles.base]: size === 'base',
			[styles.lg]: size === 'lg'
		})} {...props}>
			{children}
		</div>
	)
}
