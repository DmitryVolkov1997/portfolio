import cn from 'classnames'
import { format } from 'date-fns'
import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './Footer.module.sass'

interface FooterProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer className={cn(cn(styles.footer, className))} {...props}>
			<div className={styles.row}>
				<p className='copy'>
					OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
				</p>
				<ul className={styles.list}>
					<li className={styles.listItem}>
						<a className={styles.listLink} href='#'>
							Пользовательское соглашение
						</a>
					</li>
					<li className={styles.listItem}>
						<a className={styles.listLink} href='#'>
							Политика конфиденциальности
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}
