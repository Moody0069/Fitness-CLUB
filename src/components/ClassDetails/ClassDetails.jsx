// import React from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

// function ClassDetail() {
//   const selectedClass = useSelector((store) => store.selectedClass);
//   const history = useHistory();

//   const handleBack = () => {
//     history.push('/SchedulePage');
//   };

//   const handleRegister = () => {
//     history.push('/ConfirmationPage');
//   };

//   return (
//     <div className="container">
//       <h1>Class Details</h1>
//       <button onClick={handleBack}>Back</button>
//       <br />
//       <button onClick={handleRegister}>Register</button>
//       {selectedClass ? (
//         <div>
//           <h1>{selectedClass.name}</h1>
//           <p>Date: {selectedClass.date}</p>
//           <p>Time: {selectedClass.time}</p>
//           <p>Location: {selectedClass.location}</p>
//           <p>Instructor: {selectedClass.instructor}</p>
//           <p>Max Capacity: {selectedClass.maxCapacity}</p>
//         </div>
//       ) : (
//         <p>No class selected.</p>
//       )}
//     </div>
//   );
// }

// export default ClassDetail;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './ClassDetails.css';
function ClassDetails() {
  const selectedClass = useSelector((store) => store.selectedClass);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBack = () => {
    history.push('/SchedulePage');
  };

  const handleRegister = () => {
    history.push('/ConfirmationPage');
  };

  return (
    <div className="container">
      <h1>Class Details</h1>
      <button onClick={handleBack}>Back</button>
      <br />
      <button onClick={handleRegister}>Register</button>
      {selectedClass ? (
        <div>
          <h1>{selectedClass.name}</h1>
          <p>Date: {selectedClass.date}</p>
          <p>Time: {selectedClass.time}</p>
          <p>Location: {selectedClass.location}</p>
          <p>Instructor: {selectedClass.instructor}</p>
          <p>Max Capacity: {selectedClass.maxCapacity}</p>
        </div>
      ) : (
        <p>No class selected.</p>
      )}
    </div>
  );
}

export default ClassDetails;
