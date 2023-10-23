// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


// function UpdateProfilePage() {
//   const history = useHistory();
//     return (
//       <div className="container">
//         <h2>Update Profile</h2>

//       </div>
//     );
//   }
  
//   export default UpdateProfilePage;
  // UpdateProfilePage.js

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
    if(window.confirm('Are you sure you want to update your login info')) {
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
    <div>
      <h1>Update Your Profile</h1>
      <label>New Username:</label>
      <input
        type="text"
        value={updatedUsername}
        onChange={(e) => setUpdatedUsername(e.target.value)}
      />
      <br />
      <label>New Password:</label>
      <input
        type="password"
        value={updatedPassword}
        onChange={(e) => setUpdatedPassword(e.target.value)}
      />
      <br />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UpdateProfilePage;
