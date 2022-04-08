import React from 'react';
import { CardItem } from '../../interfaces/card.interface';
import styles from './Card.module.css';

const Card = ({
	name,
	latin_name,
	animal_type,
	active_time,
	length_min,
	length_max,
	weight_min,
	weight_max,
	lifespan,
	habitat,
	diet,
	geo_range,
	image_link,
}: CardItem): JSX.Element => {
	return (
		<div className={styles.Card}>
			<div className={styles.Card__top}>
				<img src={image_link} alt={name} className={styles.Card__img} />
			</div>
			<div className={styles.Card__main}>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Name:</span> {name}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Latin name:</span> {latin_name}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Animal type:</span> {animal_type}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Active time:</span> {active_time}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Length min:</span> {length_min}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Length max:</span> {length_max}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Weight min:</span> {weight_min}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Weight max:</span> {weight_max}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Lifespan:</span> {lifespan}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Habitat:</span> {habitat}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Diet:</span> {diet}
				</div>
				<div className={styles.Card__info}>
					<span className={styles.Card__infoName}>Geo range:</span> {geo_range}
				</div>
			</div>
		</div>
	);
};

export default Card;
