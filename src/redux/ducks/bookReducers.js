import axios from 'axios';

export const GET_BOOKS = 'GET_BOOKS';
const SET_BOOKS = 'SET_BOOKS';
export const GET_BOOK = 'GET_BOOK';
export const SET_BOOK = 'SET_BOOK';
export const ADD_BOOK = 'ADD_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';


export const getBooks = () => ({ type: GET_BOOKS });
export const setBooks = (books) => ({ type: SET_BOOKS, books });
export const addBook = (book) => ({ type: ADD_BOOK, book });
export const deleteBook = (bookId) => ({ type: DELETE_BOOK, bookId });


export const getBook = (bookId) => ({ type: GET_BOOK, bookId });
export const setBook = (book) => ({ type: SET_BOOK, book });
export const updateBook = (book) => ({ type: UPDATE_BOOK, book });

const initialState = {
  books: [],
};

const initialSingleState = {
  book: null
}


export function bookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.books };
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case DELETE_BOOK:
      return { ...state, books: state.books.filter(book => book.id !== action.bookId) };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map(book => {
          if (book.id === action.book.id) {
            return action.book;
          } else {
            return book;
          }
        })
      };
    default:
      return state;
  }
}

export function singleBookReducer(state = initialSingleState, action) {
  switch (action.type) {
    case SET_BOOK:
      return { ...state, book: action.book };
    default:
      return state;
  }
}