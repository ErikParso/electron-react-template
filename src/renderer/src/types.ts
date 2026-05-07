export interface Employee {
	id: number;
	name: string;
}

export interface Company {
	id: number;
	name: string;
	employees: Employee[];
}

declare global {
	interface Window {
		api: {
			getCompanies: () => Promise<Company[]>;
		};
	}
}
