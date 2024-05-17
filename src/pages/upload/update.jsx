import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, updateBook } from '../../redux/ducks/bookReducers';
import './upload.css';  
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {

    const {bookId}=useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const book = useSelector((state) => state.book);
  
    const [data, setData] = useState({
        bookName: '',
        authorName: '',
        year: ''
    });

console.log(book);

    useEffect(() => {
        dispatch(getBook(bookId));
      }, [dispatch,bookId]);


      useEffect(() => {
        if (book.book) {
            setData({
                bookName: book.book.bookName,
                authorName: book.book.authorName,
                year: book.book.year
            });
        }
    }, [book.book]);

    

    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = {
          data: {
            id:bookId,
            bookName: data.bookName,
            authorName: data.authorName,
            year: parseInt(data.year) 
          }
        };
        console.log(formdata);
        dispatch(updateBook(formdata));
        setData({
            bookName: '',
            authorName: '',
            year: ''
        });
        navigate('/')
    };

    return (
        <div className='upload-container'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='input'>
                    <input type='text' placeholder='Book name' name='bookName' value={data.bookName} onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type='text' placeholder='Author name' name='authorName' value={data.authorName} onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type='text' placeholder='Year' name='year' value={data.year} onChange={handleChange} />
                </div>
                <div className='input center-button'>
                    <button type='submit' className='btn'>Update</button>
                </div>
            </form>
        </div>
        // <div>hii</div>
    );
};

export default Update;

