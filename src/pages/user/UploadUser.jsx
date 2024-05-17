import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addEnduser } from '../../redux/ducks/enduserReducer';
import './uploaduser.css';

const UploadUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [data, setData] = useState({
        userName: '',
        email: '',
        role: '0' // Default role is set to 0
    });

    const handleChange = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    console.log(data);

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formdata = {
        //     data: {
        //         userName: data.userName,
        //         email: data.email,
        //         role: parseInt(data.role)
        //     }
        // };

        const userData = {
            userName: data.userName,
            email: data.email,
            role: data.role
        }
        
        const formData = new FormData();
        
        formData.append("data", JSON.stringify(userData));

        // const formData = new FormData();
        // // formData.append('userName', data.userName);
        // formData.append({"data": JSON.stringify({'userName': data.userName,'email': data.email,'role': parseInt(data.role)
        // })})
        // formData.append({"data": {'email': data.email}})
        // formData.append({"data": {'role': parseInt(data.role)}})
        // formData.append('email', data.email);
        // formData.append('role', parseInt(data.role));
        console.log(formData);
        dispatch(addEnduser(formData));
        setData({
            userName: '',
            email: '',
            role: '0'
        });
        navigate('/');
    };

    return (
        <div className='upload-container'>
            <form onSubmit={handleSubmit} className='form-container'>
                <div className='input'>
                    <input type='text' placeholder='user name' name='userName' value={data.userName} onChange={handleChange} />
                </div>
                <div className='input'>
                    <input type='email' placeholder='email' name='email' value={data.email} onChange={handleChange} />
                </div>
                <div className='input'>
                    <label htmlFor='role'>Role:</label>
                    <select id='role' name='role' value={data.role} onChange={handleChange}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                    </select>
                </div>
                <div className='input center-button'>
                    <button type='submit' className='btn'>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default UploadUser;
