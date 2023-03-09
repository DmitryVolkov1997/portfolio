import styles from './Footer.module.sass'
import {DetailedHTMLProps, HTMLAttributes} from 'react'

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
}

export const Footer = ({...props}: FooterProps) => {
	return (
		<div className={styles.footer} {...props}>
			Footer Component
		</div>
	)
}
