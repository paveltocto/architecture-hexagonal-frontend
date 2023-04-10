import { v4 as uuid } from 'uuid';
import Email from '../value-object/Email';

export default class Employee {
  id: string;

  constructor(readonly name: string, readonly email: Email) {
    this.id = uuid();
  }
}
