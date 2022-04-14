import React from 'react';
import cn from 'classnames';
import { CardProps } from './Card.props';

import styles from './Card.module.css';

const Card = ({
	data: { card, like },
	handleUpdateLike,
	handleDeleteCard,
}: CardProps): JSX.Element => {
	const handleUpdateLikeClick = () => {
		handleUpdateLike(card.id);
	};

	const handleDeleteCardClick = () => {
		handleDeleteCard(card.id);
	};

	return (
		<div className={styles.Card}>
			<div className={styles.Card__top}>
				<img src={card.image_link} alt={card.name} className={styles.Card__img} />
			</div>
			<div className={styles.Card__main}>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Name:</span> {card.name}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Latin name:</span> {card.latin_name}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Animal type:</span> {card.animal_type}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Active time:</span> {card.active_time}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Length min:</span> {card.length_min}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Length max:</span> {card.length_max}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Weight min:</span> {card.weight_min}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Weight max:</span> {card.weight_max}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Lifespan:</span> {card.lifespan}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Habitat:</span> {card.habitat}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Diet:</span> {card.diet}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Geo range:</span> {card.geo_range}
				</div>
			</div>
			<div className={styles.Card__bottom}>
				<button
					className={cn(styles.Card__btn, {
						[styles.isActive]: like,
					})}
					onClick={handleUpdateLikeClick}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 59 61"
						x="0px"
						y="0px"
						className={cn(styles.Card__icon, styles.Card__icon_like)}>
						<path
							d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543
	c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503
	c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
						/>
					</svg>
				</button>
				<button className={styles.Card__btn} onClick={handleDeleteCardClick}>
					<svg
						viewBox="0 0 1024 1024"
						xmlns="http://www.w3.org/2000/svg"
						className={cn(styles.Card__icon, styles.Card__icon_delete)}>
						<path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Card;
