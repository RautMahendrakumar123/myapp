import React, { useState } from 'react'
import userFormFields from '../JSON_DATA/user.json'
import DynamicForm from '../forms_subcomp/DynamicForm'
import { addEnduser } from '../redux/ducks/enduserReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const UserForm = () => {

    const [formData,setFormData]=useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const formdata = new FormData()

        const user = {
            userName: formData.userName,
            email: formData.email,
            role: formData.role,
            password: formData.password,
            address: formData.address,
            phone: formData.phone
        }

        formdata.append('data',JSON.stringify(user))
        const action = dispatch(addEnduser(formdata))

        if(action){
            setFormData({})
            navigate('/')
        }
    }

  return (
    <div>
      <h1>create a user</h1>
      <DynamicForm
      fields={userFormFields.userFormFields}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default UserForm
