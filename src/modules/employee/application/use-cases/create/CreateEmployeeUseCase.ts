import EmployeeRepository from '../../../domain/repository/EmployeeRepository';
import Employee from '../../../domain/entity/Employee';
import Email from '../../../domain/value-object/Email';

type EmployeeRequest = {
  name: string;
  email: string;
};

export default class CreateEmployeeUseCase {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  execute(request: EmployeeRequest) {
    const { name, email } = request;

    const employee = new Employee(name, new Email(email));

    this.employeeRepository.save(employee);
  }
}
