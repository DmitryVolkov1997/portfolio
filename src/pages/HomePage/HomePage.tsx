import styles from './HomePage.module.sass'
import {Button, Htag, P, Rating, Tag} from 'components'
import {useState} from 'react'

export const HomePage = () => {
	const [rating, setRating] = useState(4)

	const handleRating = (rating: number) => {
		setRating(rating)
	}

	return (
		<div className={styles.test}>
			<Htag tag={'h1'}>Курсы по Photoshop</Htag>
			<Htag tag={'h2'}>Title-2</Htag>
			<Htag tag={'h3'}>Title-3</Htag>
			<Button arrow={'right'} appearance={'primary'}>
				Узнать подробнее
			</Button>
			<Button arrow={'down'} appearance={'ghost'}>
				Читать отзывы
			</Button>
			<P size={'sm'}>Текст-1</P>
			<P size={'base'}>Текст-2</P>
			<P size={'lg'}>Текст-3</P>
			<Tag color={'primary'} size={'sm'}>Tag-1</Tag>
			<Tag color={'ghost'} size={'md'}>Tag-1</Tag>
			<Tag color={'green'} size={'sm'}>Tag-1</Tag>
			<Tag color={'red'} size={'md'}>Tag-1</Tag>
			<Tag color={'gray'} size={'sm'}>Tag-1</Tag>
			<Rating isEditable rating={rating} setRating={handleRating}/>
		</div>
	)
}
