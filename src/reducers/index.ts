import _ from 'lodash';
import { Action, State, Customer } from '../types';
import { ADD_CUSTOMER, REFRESH_SEARCH } from '../actions';

const initialState: State = {
  keyword: '',
  customers: [] as Customer[],
  results: [] as Customer[]
};

export default function alintaReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.customer]
      } as State;
    case REFRESH_SEARCH:
      const newResults = _.filter(state.customers, customer => {
        return (
          customer.firstName.search(state.keyword) >= 0 ||
          customer.lastName.search(state.keyword) >= 0
        );
      });
      return {
        ...state,
        results: [...newResults]
      };
    default:
      return state;
  }
}
