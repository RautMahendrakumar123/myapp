import React from 'react'
import './book.css'
import { useDispatch} from 'react-redux';
import { deleteBook, updateBook } from '../../redux/ducks/bookReducers';
import { useNavigate } from 'react-router-dom';

const Book = ({pass}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleDelete = ()=>{
    dispatch(deleteBook(pass.id));
  }

  const handleUpdate = ()=>{
    navigate(`/update/${pass.id}`);
  }
    
  return (

    <div className='book-container'>
      <table className='tbl'>
        <tbody>
          <tr className='tbl-row'>
            <td style={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.title}</td>
            <td style={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.author}</td>
            <td style={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.year}</td>
            <td style={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.genre}</td>
            <td><button onClick={handleUpdate} className='btn'>Update</button></td>
            <td><button onClick={handleDelete} className='btn'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Book
