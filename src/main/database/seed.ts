import { getAppDataSource } from './data-source';
import { Company } from './entities/Company';
import { Employee } from './entities/Employee';

export async function seedDatabase(): Promise<void> {
  const companyRepo = getAppDataSource().getRepository(Company);
  if ((await companyRepo.count()) > 0) return;

  const data: { name: string; employees: string[] }[] = [
    { name: 'Acme Corp', employees: ['Alice Johnson', 'Bob Smith', 'Charlie Brown'] },
    { name: 'Globex Inc', employees: ['Diana Prince', 'Eve Torres'] },
    { name: 'Initech', employees: ['Frank Castle', 'Grace Hopper', 'Hank Pym'] },
  ];

  for (const { name, employees } of data) {
    const company = new Company();
    company.name = name;
    company.employees = employees.map((empName) => {
      const emp = new Employee();
      emp.name = empName;
      return emp;
    });
    await companyRepo.save(company);
  }
}
