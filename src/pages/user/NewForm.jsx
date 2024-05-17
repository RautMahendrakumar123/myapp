import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEnduser } from '../../redux/ducks/enduserReducer'
import { useNavigate } from 'react-router-dom'

const NewForm = () => {
    const [inputData, setInputData] = useState({
        userName: '',
        email: '',
        role: false,
        password: '',
        address: '',
        phone: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();

        const userData = {
            userName: inputData.userName,
            email: inputData.email,
            role: inputData.role,
            password: inputData.password,
            address: inputData.address,
            phone: inputData.phone
        }
        formData.append('data', JSON.stringify(userData))
        const action = dispatch(addEnduser(formData))

        if (action) {
            setInputData({
                userName: '',
                email: '',
                role: false,
                password: '',
                address: '',
                phone: ''
            })

            navigate('/')
        }
    }

    const handleChange = (e) => {
        setInputData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    console.log(inputData);
    return (
        <div>
            <form onSubmit={handleSubmit} className='border-2'>
                <div>
                    <lable htmlFor='username'>User Name : </lable>
                    <input
                        type='text'
                        id="username"
                        name='userName'
                        value={inputData.userName}
                        placeholder='user name'
                        onChange={handleChange}
                        required
                        className='border-2 border-gray-500 mb-2'
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        value={inputData.email}
                        placeholder='email'
                        onChange={handleChange}
                        required
                        className='border-2 border-gray-500 mb-2'
                    />
                </div>
                <div>
                    <label htmlFor='pass'>password</label>
                    <input
                        type='text'
                        id='pass'
                        name='password'
                        value={inputData.password}
                        placeholder='password'
                        onChange={handleChange}
                        required
                        className='border-2 border-gray-500 mb-2'
                    />
                </div>
                <div>
                    <label htmlFor='role'>Role:</label>
                    <select name='role' id='role' value={inputData.role} onChange={handleChange}>
                        <option value={true}>librarian</option>
                        <option value={false}>user</option>
                    </select>
                </div>
                <div>
                    <lable htmlFor='address'>Address:</lable>
                    <textarea
                        id='address'
                        name='address'
                        value={inputData.address}
                        placeholder='address'
                        onChange={handleChange}
                        className='border-2 border-gray-500 mb-2'
                    >

                    </textarea>
                </div>
                <div>
                    <label htmlFor='num'>Phone:</label>
                    <input
                        type='number'
                        id='num'
                        name='phone'
                        value={inputData.phone}
                        className='border-2 border-gray-500 mb-2'
                        onChange={handleChange}
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
