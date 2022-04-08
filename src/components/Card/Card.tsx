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
				<div className={styles.Card__name}>Name: {name}</div>
				<div className={styles.Card__nameLatin}>Latin name: {latin_name}</div>
				<div className={styles.Card__animalType}>Animal type: {animal_type}</div>
				<div className={styles.Card__activeTime}>Active time: {active_time}</div>
				<div className={styles.Card__lengthMin}>Length min: {length_min}</div>
				<div className={styles.Card__lengthMax}>Length max: {length_max}</div>
				<div className={styles.Card__weightMin}>Weight min: {weight_min}</div>
				<div className={styles.Card__weightMax}>Weight max: {weight_max}</div>
				<div className={styles.Card__lifespan}>Lifespan: {lifespan}</div>
				<div className={styles.Card__habitat}>Habitat: {habitat}</div>
				<div className={styles.Card__diet}>Diet: {diet}</div>
				<div className={styles.Card__geoRange}>Geo range: {geo_range}</div>
			</div>
		</div>
	);
};

export default Card;
