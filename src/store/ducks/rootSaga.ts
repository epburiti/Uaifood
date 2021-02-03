import { all } from 'redux-saga/effects';
import City from './City';
export default function* rootSaga() {
  return yield all([City]);
}
