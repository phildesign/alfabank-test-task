import React, { useEffect } from 'react';
import { Card } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cardSelector, fetchData } from '../../redux/slices/cardSlice';
import styles from './List.module.css';

const List = (): JSX.Element => {
	const { data } = useAppSelector(cardSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const cardList = data.map((item) => {
		return (
			<Card
				name={item.name}
				latin_name={item.latin_name}
				animal_type={item.animal_type}
				active_time={item.active_time}
				length_min={item.length_min}
				length_max={item.length_max}
				weight_min={item.weight_min}
				weight_max={item.weight_max}
				lifespan={item.lifespan}
				habitat={item.habitat}
				diet={item.diet}
				geo_range={item.geo_range}
				image_link={item.image_link}
				id={item.id}
				key={item.id}
			/>
		);
	});

	return <div className={styles.List}>{cardList}</div>;
};

export default List;
