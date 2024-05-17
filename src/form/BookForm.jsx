import React, { useState } from 'react'
import DynamicForm from '../forms_subcomp/DynamicForm'
import bookFormFields from '../JSON_DATA/book.json'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/ducks/bookReducers'
import { useNavigate } from 'react-router-dom'

const BookForm = () => {
    const [formData,setFormData]=useState({})
    const [image,setImage]=useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleFileChnage = (e)=>{
      setImage(e.target.files[0])
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()

        const book = {
            title:formData.title,
            author: formData.author,
            year: formData.year,
            genre: formData.genre,
            pages: formData.pages,
            price: formData.price,
            description: formData.description,
            availability: formData.available,
            language:formData.language
        }
        formdata.append('data',JSON.stringify(book))
        formdata.append('files.media',image)
        formdata.append('data.image', image);
        const action = dispatch(addBook(formdata))

        if(action){
            setFormData({})
            navigate('/')
        }
    }

    console.log(formData);

  return (
    <div>
      <h2>Create Book</h2>
      <DynamicForm 
      fields={bookFormFields.bookFormFields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleFileChnage={handleFileChnage}
      />
    </div>
  )
}

export default BookForm
