export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
}

export interface Action {
  type: string;
}

export interface State {
  keyword: string;
  customers: Customer[];
  result: Customer[];
}

export interface SearchActionType extends Action {
  payload: string;
}

export interface AddEditActionType extends Action {
  payload: Customer;
}

export interface DeleteActionType extends Action {
  payload: string;
}
