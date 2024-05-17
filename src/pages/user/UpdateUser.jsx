import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import './uploaduser.css';
import { getSingleEndusers, updateEnduser } from '../../redux/ducks/enduserReducer';

const UpdateUser = () => {
    const {enduserId}=useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const enduser = useSelector((state)=>state.enduser)
    console.log(enduser);

    const [data, setData] = useState({
        userName: '',
        email: '',
        role: '0' // Default role is set to 0
    });

    useEffect(() => {
        dispatch(getSingleEndusers(enduserId));
      }, [dispatch,enduserId]);



    useEffect(() => {
        if (enduser.enduser) {
            setData({
                userName: enduser.enduser.userName,
                email: enduser.enduser.email,
                role: enduser.enduser.role
            });
        }
    }, [enduser.enduser]);

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
              id:enduserId,
              userName: data.userName,
              email: data.email,
              role: parseInt(data.role)
            }
          };
          console.log(formdata);
        dispatch(updateEnduser(formdata));
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
            <button type='submit' className='btn'>Update</button>
        </div>
    </form>
</div>
  )
}

export default UpdateUser
