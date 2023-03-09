import styles from './Header.module.sass'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Header = ({...props}: HeaderProps) => {
	return (
		<div className={styles.header} {...props}>
			Header Component
		</div>
	)
}
