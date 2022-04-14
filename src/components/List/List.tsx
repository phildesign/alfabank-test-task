import React, { useEffect, useState } from 'react';
import { Card } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cardSelector, deleteCard, fetchData, updateLike } from '../../redux/slices/cardSlice';

import styles from './List.module.css';

const List = (): JSX.Element => {
	const { data, loading } = useAppSelector(cardSelector);
	const dispatch = useAppDispatch();

	const [isLiked, setIsLiked] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const handleUpdateLike = (id: number) => {
		dispatch(updateLike(id));
	};

	const handleDeleteCard = (id: number) => {
		dispatch(deleteCard(id));
	};

	const handleSetLikeClick = () => {
		setIsLiked(!isLiked);
	};

	const cardList = data
		.filter((item) => (isLiked ? item.like : true))
		.map((item) => {
			return (
				<Card
					key={item.card.id}
					data={item}
					handleUpdateLike={handleUpdateLike}
					handleDeleteCard={handleDeleteCard}
				/>
			);
		});

	return (
		<div className={styles.List}>
			<div className={styles.List__top}>
				<button className={styles.List__btnLiked} onClick={handleSetLikeClick}>
					{!isLiked ? 'Show only liked cards' : 'Show all cards'}
				</button>
			</div>
			<div className={styles.List__box}>{loading ? <div>Loading...</div> : <>{cardList}</>}</div>
		</div>
	);
};

export default List;
