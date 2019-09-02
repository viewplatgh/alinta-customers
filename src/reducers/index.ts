import _ from 'lodash';
import {
  Action,
  State,
  Customer,
  AddEditActionType,
  SearchActionType,
  DeleteActionType
} from '../types';
import {
  ADD_CUSTOMER,
  REFRESH_SEARCH,
  SEARCH_CUSTOMER,
  DELETE_CUSTOMER
} from '../actions';

const initialState: State = {
  keyword: '',
  customers: [] as Customer[],
  result: [] as Customer[]
};

export default function alintaReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, (action as AddEditActionType).payload]
      };
    case SEARCH_CUSTOMER: {
      const newResult = _.filter(state.customers, customer => {
        return (
          customer.firstName.search((action as SearchActionType).payload) >=
            0 ||
          customer.lastName.search((action as SearchActionType).payload) >= 0
        );
      });
      return {
        ...state,
        keyword: (action as SearchActionType).payload,
        result: [...newResult]
      };
    }
    case REFRESH_SEARCH: {
      const newResult = _.filter(state.customers, customer => {
        return (
          customer.firstName.search(state.keyword) >= 0 ||
          customer.lastName.search(state.keyword) >= 0
        );
      });
      return {
        ...state,
        result: [...newResult]
      };
    }
    case DELETE_CUSTOMER: {
      let newCustomers = [...state.customers];
      newCustomers.splice(
        newCustomers.findIndex(
          item => item.id === (action as DeleteActionType).payload
        ),
        1
      );
      return {
        ...state,
        customers: newCustomers
      };
    }
    default:
      return state;
  }
}
