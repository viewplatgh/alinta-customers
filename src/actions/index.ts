import { Customer } from '../types';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const REFRESH_SEARCH = 'REFRESH_SEARCH';

export function addCustomer(customer: Customer) {
  return {
    type: ADD_CUSTOMER,
    customer
  };
}

export function refreshSearch() {
  return { type: REFRESH_SEARCH };
}
