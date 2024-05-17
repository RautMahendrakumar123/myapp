import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { GET_BOOKS, setBooks, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK, GET_BOOK, setBook } from '../ducks/bookReducers';

function* handleGetBooks() {
  try {
    const response = yield call(axios.get, 'http://localhost:1337/api/books');
    // console.log(response);
    const books = response.data.data;
    yield put(setBooks(books));

  } catch (error) {
    console.log(error);
  }
}

function* handleGetBook(action) {
  try {
    const { bookId } = action;
    // console.log(bookId);
    const response = yield call(axios.get, `http://localhost:1337/api/books/${bookId}`,action.book);
    const book = response.data.data;
    // console.log(book.attributes);
    yield put(setBook(book.attributes));

  } catch (error) {
    console.log(error);
  }
}

function* handleAddBook(action) {
  try {
    // const data = action.book
    // for (var [key, value] of data.entries()) { 
    //     console.log(key, value);
    // }
    const response = yield call(axios.post, 'http://localhost:1337/api/books', action.book);
    yield put(setBooks(response.data));
  } catch (error) {
    console.log(error);
  }
 }



function* handleDeleteBook(action){
  try {
    const { bookId } = action;
    const response  = yield call(axios.delete,`http://localhost:1337/api/books/${bookId}`,action.book)
    yield put(setBooks(response.data.data));
  } catch (error) {
    console.log(error);
  }
}

function* handleUpdateBook(action) {
  try {
    const { book } = action;
    console.log(book);
    const response = yield call(axios.put, `http://localhost:1337/api/books/${book.data.id}`, book);
    yield put(setBooks(response.data.data));
  } catch (error) {
    console.log(error);
  }
}


export function* GetBooksSaga() {
  yield takeLatest(GET_BOOKS, handleGetBooks);
}

export function* GetBookSaga() {
  yield takeLatest(GET_BOOK, handleGetBook);
}

export function* AddBooksSaga() {
  yield takeLatest(ADD_BOOK,handleAddBook)
}

export function* DeleteBooksSaga() {
  yield takeLatest(DELETE_BOOK,handleDeleteBook)
}

export function* UpdateBooksSaga() {
  yield takeLatest(UPDATE_BOOK, handleUpdateBook);
}