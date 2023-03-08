import styles from './Tag.module.sass'
import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import {Link} from 'react-router-dom'

interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	color: 'ghost' | 'green' | 'primary' | 'gray' | 'red'
	size: 'sm' | 'md'
	children: ReactNode
	href?: string
}

export const Tag = ({color = 'ghost', href, size = 'sm', children, className, ...props}: TagProps) => {
	return (
		<div className={cn(styles.tag, className, {
			[styles.sm]: size === 'sm',
			[styles.md]: size === 'md',
			[styles.ghost]: color === 'ghost',
			[styles.green]: color === 'green',
			[styles.primary]: color === 'primary',
			[styles.gray]: color === 'gray',
			[styles.red]: color === 'red',
		})} {...props}>
			{href ? <Link to={'/'}>{children}</Link> : children}
		</div>
	)
}
