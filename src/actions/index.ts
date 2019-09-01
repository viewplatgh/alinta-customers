import {
  Customer,
  AddEditActionType,
  SearchActionType,
  DeleteActionType
} from '../types';

export const ADD_CUSTOMER = 'ADD_CUSTOMER';
export const SEARCH_CUSTOMER = 'SEARCH_CUSTOMER';
export const REFRESH_SEARCH = 'REFRESH_SEARCH';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

export function addCustomer(customer: Customer): AddEditActionType {
  return {
    type: ADD_CUSTOMER,
    payload: customer
  };
}

export function searchCustomer(keyword: string): SearchActionType {
  return {
    type: SEARCH_CUSTOMER,
    payload: keyword
  };
}

export function refreshSearch() {
  return { type: REFRESH_SEARCH };
}

export function deleteCustomer(id: string): DeleteActionType {
  return {
    type: DELETE_CUSTOMER,
    payload: id
  };
}
