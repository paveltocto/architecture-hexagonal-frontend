import EmployeeRepository from '../../domain/repository/EmployeeRepository';
import Employee from '../../domain/entity/Employee';

export default class EmployeeRepositoryMemory implements EmployeeRepository {
  private readonly employees = new Map<string, Employee>();

  save(employee: Employee): Employee {
    this.employees.set(employee.id, employee);
    return employee;
  }

  getAll() {
    return Array.from(this.employees.values());
  }
}
