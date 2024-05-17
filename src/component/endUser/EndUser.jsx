import React from 'react';
import './enduser.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteEnduser } from '../../redux/ducks/enduserReducer';

const EndUser = ({ pass }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleDelete = () => {
    dispatch(deleteEnduser(pass.id));
  };

  const handleUpdate = () => {
    navigate(`/update-user/${pass.id}`);
  };



  return (
    <div className='user-container'>
      <table className='tbl'>
        <tbody>
          <tr className='tbl-row'>
            <td style={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.userName}</td>
            <td style={{ width: '25%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.email}</td>
            <td style={{ width: '15%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{pass?.attributes?.phone}</td>
            <td><button onClick={handleUpdate} className='btn'>Update</button></td>
            <td><button onClick={handleDelete} className='btn'>Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EndUser;

