import styles from './Button.module.sass'
import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'
import cn from 'classnames'
import {ReactComponent as ArrowIcon} from './arrow.svg'

interface ButtonProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
	children: ReactNode
	arrow?: 'right' | 'down' | 'none'
}

export const Button = ({appearance, children, arrow = 'none', className, ...props}: ButtonProps) => {
	return (
		<button className={cn(styles.button, className, {
			[styles.primary]: appearance === 'primary',
			[styles.ghost]: appearance === 'ghost'
		})} {...props}>
			{children}
			{arrow !== 'none' && <ArrowIcon className={cn(styles.arrow, {
				[styles.right]: arrow === 'right',
				[styles.down]: arrow === 'down'
			})}/>}
		</button>
	)
}

// 004[x]
