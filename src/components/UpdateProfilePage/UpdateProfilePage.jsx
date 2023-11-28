  import React, { useState } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { useHistory } from 'react-router-dom';
  
  function UpdateProfilePage() {
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const history = useHistory();
    const [updatedUsername, setUpdatedUsername] = useState('');
    const [updatedPassword, setUpdatedPassword] = useState('');
  
    const handleUpdate = () => {
      // Dispatch a "PUT" request to update the user's information
      if (window.confirm('Are you sure you want to update your login info')) {
        dispatch({
          type: 'UPDATE_USER_INFO',
          payload: {
            userid: user.id,
            username: updatedUsername,
            password: updatedPassword,
          },
        });
        history.push('/ConfirmationPage');
      }
    };
  
    return (
      <div className="container mx-auto mt-10 p-6 bg-white rounded-md shadow-md max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Update Your Profile</h1>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">New Username:</label>
          <input
            type="text"
            value={updatedUsername}
            onChange={(e) => setUpdatedUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 mb-2">New Password:</label>
          <input
            type="password"
            value={updatedPassword}
            onChange={(e) => setUpdatedPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleUpdate}
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Update
        </button>
      </div>
    );
  }
  
  export default UpdateProfilePage;
  