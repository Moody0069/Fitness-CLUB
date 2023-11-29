import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

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
      history.push("/ConfirmationPage");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Update Your Profile</h1>
      <label className="block mb-2">New Username:</label>
      <input
        type="text"
        value={updatedUsername}
        onChange={(e) => setUpdatedUsername(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
      />
      <label className="block mb-2">New Password:</label>
      <input
        type="password"
        value={updatedPassword}
        onChange={(e) => setUpdatedPassword(e.target.value)}
        className="w-full px-3 py-2 mb-4 border rounded focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Update
      </button>
    </div>
  );
}

export default UpdateProfilePage;
