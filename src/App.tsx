import React from 'react';
import { List } from './components';

import styles from './App.module.css';

const App = (): JSX.Element => {
	return (
		<div className={styles.App}>
			<List />
		</div>
	);
};

export default App;
