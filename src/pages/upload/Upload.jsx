import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/ducks/bookReducers';
import './upload.css';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [data, setData] = useState({
        bookName: '',
        authorName: '',
        year: ''
    });

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
            bookName: data.bookName,
            authorName: data.authorName,
            year: parseInt(data.year) 
          }
        };
        console.log(formdata);
        dispatch(addBook(formdata));
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
                    <button type='submit' className='btn'>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default Upload;

