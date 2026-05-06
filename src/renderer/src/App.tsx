import { useEffect, useState } from 'react';
import { Company } from './types';

export default function App() {
	const [companies, setCompanies] = useState<Company[]>();

	useEffect(() => {
		window.api
			.getCompanies()
			.then(setCompanies)
	}, [setCompanies]);

	if (!companies) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<h1>Companies & Employees</h1>
			<pre>{JSON.stringify(companies, null, 2)}</pre>
		</div>
	);
}
