import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function ClassDetail() {
  const selectedClass = useSelector((store) => store.selectedClass);
  const history = useHistory();


  return (
    <div className="container">
      <h1>Class Details</h1>
      <button onClick={() => history.push('/SchedulePage')}> Back </button> <br/>
        <button onClick={() => history.push('/ConfirmationPage')}> Register </button>
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

export default ClassDetail;