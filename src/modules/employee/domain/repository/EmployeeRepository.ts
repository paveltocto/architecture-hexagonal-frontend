import Employee from '../entity/Employee';

export default interface EmployeeRepository {
  getAll(): Employee[];
  save(employee: Employee): Employee;
}
