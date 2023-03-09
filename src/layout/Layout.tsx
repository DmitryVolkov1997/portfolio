import { Footer, Header, Sidebar } from 'layout'
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react'

interface LayoutProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>{children}</div>
			</div>
			<Footer />
		</>
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
