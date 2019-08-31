import { all, call, put, takeEvery } from 'redux-saga/effects';
import { ADD_CUSTOMER, refreshSearch } from '../actions';

export function* handleAddCustomer() {
  yield takeEvery(ADD_CUSTOMER, function*() {
    yield put(refreshSearch());
  });
}

export default function* rootSaga() {
  yield all([handleAddCustomer()]);
}
