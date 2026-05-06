import { useEffect, useState } from 'react';
import {
	CircularProgress,
	Container,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from '@mui/material';
import { Company } from './types';

export default function App() {
	const [companies, setCompanies] = useState<Company[]>();

	useEffect(() => {
		window.api.getCompanies().then(setCompanies);
	}, [setCompanies]);

	if (!companies) {
		return (
			<Container sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
				<CircularProgress />
			</Container>
		);
	}

	return (
		<Container sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Companies
			</Typography>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Name</TableCell>
							<TableCell>Employees</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{companies.map((company) => (
							<TableRow key={company.id}>
								<TableCell>{company.id}</TableCell>
								<TableCell>{company.name}</TableCell>
								<TableCell>
									{company.employees?.map((e) => e.name).join(', ') || '—'}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Container>
	);
}
