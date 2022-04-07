import React from 'react';
import styles from './App.module.css';
import { List } from './components';

const App = (): JSX.Element => {
	return (
		<div className={styles.App}>
			<List />
		</div>
	);
};

export default App;
