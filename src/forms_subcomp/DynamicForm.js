import React from 'react'
import {FieldGenerator} from './Field.Generator'

const DynamicForm = ({fields,handleChange,handleSubmit,handleFileChnage}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {
          fields.map((field,index)=>(
            <div key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              {FieldGenerator(field, handleChange,handleFileChnage)}
            </div>
          ))
        }
        <button type='submit' className='border-none py-2 px-3 bg-gray-600 text-white'>Submit</button>
      </form>
    </div>
  )
}

export default DynamicForm

