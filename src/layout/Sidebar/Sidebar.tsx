import styles from './Sidebar.module.sass'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{}

export const Sidebar = ({...props}: SidebarProps) => {
	return (
		<div className={styles.sidebar} {...props}>
			Sidebar Component
		</div>
	)
}
