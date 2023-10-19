import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './ClassDetails.css';
function ClassDetails() {
  const selectedClass = useSelector((store) => store.selectedClass);
  const history = useHistory();
  const dispatch = useDispatch();
  const Params = useParams();
  const handleBack = () => {
    history.push('/SchedulePage');
  };
  // const showDetailsView = (classItem) => {
  //  dispatch(selectClass(classItem));
  //   history.push('/ClassDetails');
  // };
  const showDetailsView = (classItem) => {
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: Params.id,
    
    });
  
   // history.push('/ClassDetails');
  };
  // dispatch({
  //   type: "SET_SELECTED_CLASS",
  //   payload: response.data,
  // });


  const handleRegister = () => {
    history.push('/ConfirmationPage');
  };
console.log ('use params', Params.id);
  return (
    <div className="container">
      <h1>Class Details</h1>
      <button onClick={handleBack}>Back</button>
      <br />
      <button onClick={handleRegister}>Register</button>
      {selectedClass ? (
        // changed selecteClass to selectedClass
          <div key={selectedClass.classItem} onClick={() => showDetailsView(selectedClass)}>
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
