import EmployeeRepositoryMemory from '../modules/employee/insfrastructure/repositories/EmployeeRepositoryMemory';
import CreateEmployeeUseCase from '../modules/employee/application/use-cases/create/CreateEmployeeUseCase';
import GetAllEmployeesUseCase from '../modules/employee/application/use-cases/get/getAllEmployees';

const employeeRepository = new EmployeeRepositoryMemory();
const createEmployeeUseCase = new CreateEmployeeUseCase(employeeRepository);
const getAllEmployeesUseCase = new GetAllEmployeesUseCase(employeeRepository);

export { createEmployeeUseCase, getAllEmployeesUseCase };

const container = {
  createEmployeeUseCase,
  getAllEmployeesUseCase,
};

type Container = typeof container;

export { container };
export type { Container };
