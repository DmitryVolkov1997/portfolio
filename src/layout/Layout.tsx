import { Footer, Header, Sidebar } from 'layout'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'
import styles from './Layout.module.sass'

interface LayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<div className={styles.main}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	)
}

export function withLayout<T extends Record<string, unknown>>(
	Component: FC<T>
) {
	return function withLayoutComponent(props: T) {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
