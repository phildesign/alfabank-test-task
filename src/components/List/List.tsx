import React from 'react';
import { Card } from '../../components';
import styles from './List.module.css';

const List = (): JSX.Element => {
	return (
		<div className={styles.List}>
			<Card />
		</div>
	);
};

export default List;
