import { all } from 'redux-saga/effects';
import { GetBooksSaga, AddBooksSaga, DeleteBooksSaga, UpdateBooksSaga, GetBookSaga } from './bookSaga';
import { AddEndusersSaga, DeleteEndusersSaga,GetEnduserSaga, GetEndusersSaga, UpdateEndusersSaga } from './enduserSaga';

export default function* rootSaga() {
  yield all([
    GetBooksSaga(),
    GetBookSaga(),
    AddBooksSaga(),
    DeleteBooksSaga(),
    UpdateBooksSaga(),
    GetEndusersSaga(),
    GetEnduserSaga(),
    AddEndusersSaga(),
    DeleteEndusersSaga(),
    UpdateEndusersSaga()
  ]);
}