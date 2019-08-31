export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export interface Action {
  type: string;
  customer: Customer;
}

export interface State {
  keyword: string;
  customers: Customer[];
  results: Customer[];
}
