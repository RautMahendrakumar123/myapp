import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Book from '../../component/book/Book'
import './main.css'
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/ducks/bookReducers'
import { getEndusers } from '../../redux/ducks/enduserReducer'
import EndUser from '../../component/endUser/EndUser'



const Main = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const endusers = useSelector((state)=>state.endusers)


  useEffect(() => {
    dispatch(getBooks());
    dispatch(getEndusers())
  }, [dispatch]);

  // console.log(endusers);


  return (
    <div className='main-container'>
      <div>
        {
          books.books.length > 0 ?
            (books.books.map((item,index) => {
              return <Book pass={item} key={index} />
            })) : (<li>no books available</li>)
        }
      </div>
      <div className='center-button'>
        <Link to='/upload'>
          <button className='button'>Add book</button>
        </Link>
      </div>
      <div>
        {
          endusers.endusers.length > 0 ?
            (endusers.endusers.map((item,index) => {
              return <EndUser pass={item} key={index} />
            })) : (<li>NO Users available</li>)
        }
      </div>
      <div className='center-button'>
        <Link to='/upload-user'>
          <button className='button'>Add Enduser</button>
        </Link>
      </div>

      {/* <BookForm /> */}
    </div>
  )
}


export default Main;
