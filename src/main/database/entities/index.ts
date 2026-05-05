import { Column, Entity, OneToMany, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => Employee, (employee) => employee.company)
  employees!: Employee[];
}

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne(() => Company, (company) => company.employees)
  company!: Company;
}
