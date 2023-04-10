import EmployeeRepository from '../../../domain/repository/EmployeeRepository';
// import Employee from "../../../domain/entity/Employee";
// import Email from "../../../domain/value-object/Email";

export default class GetAllEmployeesUseCase {
  constructor(readonly employeeRepository: EmployeeRepository) {}

  execute() {
    return this.employeeRepository.getAll();
  }
}
