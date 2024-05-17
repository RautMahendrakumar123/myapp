import { combineReducers } from 'redux';
import {bookReducer} from './bookReducers';
import {singleBookReducer} from './bookReducers'
import { enduserReducer, singleEnduserReducer } from './enduserReducer';


const rootReducer = combineReducers({
  books: bookReducer,
  book: singleBookReducer,

  endusers: enduserReducer,
  enduser:singleEnduserReducer,


});

export default rootReducer;