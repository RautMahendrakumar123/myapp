import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/ducks/bookReducers';
import { useNavigate } from 'react-router-dom';

const NewForm = () => {
    const [data, setData] = useState({
        title: '',
        author: '',
        year: '',
        genre: 'mystery',
        language:'english',
        pages: '',
        price: '',
        description: '',
        availability: false,
    });

    const [images, setImages] = useState(null)
    
    const [category, setCategory] = useState(['mystery', 'fantasy', 'thriller', 'classic']);
    const [lang, setLang] = useState(['english', 'hindi', 'marathi'])
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleChange = (e) => {

            setData((prevformdata) => ({
                ...prevformdata,
                [e.target.name]: e.target.value,
            }));
    };

    // const handleFileInputChange = (e)=>{
    //     const file = e.target.files[0]
    //     if(file){
    //         const reader = new FileReader()
    //         reader.onloadend=()=>{
    //             const binaryData = reader.result
    //             setImages(binaryData)
    //             console.log('binary',binaryData);
    //         }
    //         reader.readAsDataURL(file)
    //     }
    // }

    const handleFileInputChange = (e)=>{
        setImages(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData()

        const bookData = {
            title: data.title,
            author: data.author,
            year: data.year,
            genre: data.genre,
            pages: data.pages,
            price: data.price,
            description: data.description,
            availability: data.available,
            language:data.language
            // image:images
        };

        formData.append('data', JSON.stringify(bookData));
        if(images){
            formData.append('files.media',images)
        }
        const action =  dispatch(addBook(formData));

        if(action){
            setData({
               title: '',
               author: '',
               year: '',
               genre: 'mystery',
               pages: '',
               price: '',
               description: '',
               availability: false,
            })
            setImages(null)
            navigate('/')
        }
         
    };

    // const handleAddCategory = () => {
    //     const newCategory = prompt('Enter a new category');
    //     if (newCategory) {
    //         setCategory((prevCategories) => [...prevCategories, newCategory]);
    //     }
    // };


    return (
        <div>
            <form onSubmit={handleSubmit} className='border-2 flex flex-col items-center justify-center' encType='multipart/form-data'>
                <div className='flex flex-col'>
                    <label htmlFor='bookname'>Book Title : </label>
                    <input
                        type='text'
                        id='bookname'
                        name='title'
                        value={data.title}
                        placeholder='book name'
                        onChange={handleChange}

                        className='border-2 border-gray-500 mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='authorname'>Author Name : </label>
                    <input
                        type='text'
                        id='authorname'
                        name='author'
                        value={data.author}
                        placeholder='author name'
                        onChange={handleChange}
                  
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='year'>Year of Publish : </label>
                    <input
                        type='number'
                        id='year'
                        name='year'
                        value={data.year}
                        placeholder='year'
                        onChange={handleChange}
                    
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex'>
                    <label htmlFor="genre">Choose a Genre : :</label>
                    <select name="genre" id="genre" value={data.genre} onChange={handleChange} className='border-2 border-gray-500  mb-2 rounded-md p-1'>
                        {category.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    {/* <button type="button" className='text-white bg-blue-700 px-3 py-2.5 rounded-lg text-sm' onClick={handleAddCategory}>Add a Category</button> */}
                </div>
                <div>
                    <label htmlFor="lang">Choose a Language:</label>
                    <select name="language" id="lang" value={data.language} onChange={handleChange}>
                        {lang.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='page'>Total pages : </label>
                    <input
                        type='number'
                        id='page'
                        name='pages'
                        value={data.pages}
                        placeholder='pages'
                        onChange={handleChange}
                    
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='price'>Price : </label>
                    <input
                        type='number'
                        id='price'
                        name='price'
                        value={data.price}
                        placeholder='price'
                        onChange={handleChange}
                  
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='desc'>Description : </label>
                    <textarea
                        id='desc'
                        name='description'
                        value={data.description}
                        placeholder='Description'
                        onChange={handleChange}
                 
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>
                <div className='flex'>
                    <label htmlFor='available'>Availability : :</label>
                    <select
                        id='available'
                        name='available'
                        value={data.available}
                        onChange={handleChange}
                   
                        className='border-2 border-gray-500 mb-2 rounded-md p-1'
                    >
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                    </select>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor='image'>select image: </label>
                    <input
                        type='file'
                        accept='image/*'
                        id='image'
                        name='image'
                        onChange={handleFileInputChange}
                    
                        className='border-2 border-gray-500  mb-2 rounded-md p-1'
                    />
                </div>

                <div>
                    <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewForm
