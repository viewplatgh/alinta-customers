import { all, put, takeEvery } from 'redux-saga/effects';
import { ADD_CUSTOMER, DELETE_CUSTOMER, refreshSearch } from '../actions';

export function* handleAddDeleteCustomer() {
  yield takeEvery(ADD_CUSTOMER, function*() {
    yield put(refreshSearch());
  });
  yield takeEvery(DELETE_CUSTOMER, function*() {
    yield put(refreshSearch());
  });
}

export default function* rootSaga() {
  yield all([handleAddDeleteCustomer()]);
}
