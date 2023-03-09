import styles from './Rating.module.sass'
import {ReactComponent as StartIcon} from './star.svg'
import {DetailedHTMLProps, HTMLAttributes, useEffect, useState, KeyboardEvent} from 'react'
import cn from 'classnames'

interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isEditable?: boolean
	rating: number
	setRating?: (rating: number) => void
}

export const Rating = ({rating = 4, isEditable = false, setRating, ...props}: RatingProps) => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

	useEffect(() => {
		constructRating(rating)
	}, [rating])

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r, idx) => {
			return (
				<span onMouseMove={() => changeDisplay(idx + 1)}
					  onMouseLeave={() => changeDisplay(idx + 1)}
					  onClick={() => onClick(idx + 1)}
					  className={cn(styles.star, {
						  [styles.filled]: idx < currentRating,
						  [styles.editable]: isEditable
					  })}
				>
					<StartIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => handleSpace(e, idx + 1)}
					/>
				</span>
			)
		})

		setRatingArray(updatedArray)
	}

	const changeDisplay = (rating: number) => {
		if (!isEditable) return

		constructRating(rating)
	}

	const onClick = (rating: number) => {
		if (!isEditable || !setRating) return

		setRating(rating)
	}

	const handleSpace = (e: KeyboardEvent<SVGElement>, rating: number) => {
		if (!isEditable || !setRating || e.code !== 'Space') return

		setRating(rating)
	}

	return (
		<div className={styles.rating} {...props}>
			{
				ratingArray.map((r, idx) => {
					return (
						<span key={idx}>{r}</span>
					)
				})
			}
		</div>
	)
}

