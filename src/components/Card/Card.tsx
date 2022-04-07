import React from 'react';
import styles from './Card.module.css';

const Card = (): JSX.Element => {
	return (
		<div className={styles.Card}>
			<div className={styles.Card__top}>
				<img src="" alt="" className={styles.Card__img} />
			</div>
			<div className={styles.Card__main}>
				<div className={styles.Card__name}></div>
				<div className={styles.Card__nameLatin}></div>
				<div className={styles.Card__animalType}></div>
				<div className={styles.Card__activeTime}></div>
				<div className={styles.Card__lengthMin}></div>
				<div className={styles.Card__lengthMax}></div>
				<div className={styles.Card__weightMin}></div>
				<div className={styles.Card__weightMax}></div>
				<div className={styles.Card__lifespan}></div>
				<div className={styles.Card__habitat}></div>
				<div className={styles.Card__diet}></div>
				<div className={styles.Card__geoRange}></div>
			</div>
		</div>
	);
};

export default Card;
