import cn from 'classnames'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Header.module.sass'

interface HeaderProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({ className, ...props }: HeaderProps) => {
	return (
		<div className={cn(styles.header, className)} {...props}>
			Header Component
		</div>
	)
}
