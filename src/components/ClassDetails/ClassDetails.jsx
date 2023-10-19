import React, { useEffect } from "react";
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
  // const showDetailsView = (classItem) => {
  //   dispatch({
  //     type: "FETCH_CLASS_DETAILS",
  //     payload: Params.id,
    
  //   });
  
  //  // history.push('/ClassDetails');
  // };
  // dispatch({
  //   type: "SET_SELECTED_CLASS",
  //   payload: response.data,
  // });
  

  useEffect(() => {
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: Params.id
  })}, []);

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
      {selectedClass.length ? (
        // changed selecteClass to selectedClass
          <div key={selectedClass[0].name} >
          <h1>{selectedClass[0].name}</h1>
          <p>Date: {selectedClass[0].date}</p>
          <p>Time: {selectedClass[0].time}</p>
          <p>Location: {selectedClass[0].location}</p>
          <p>Instructor: {selectedClass[0].instructor}</p>
          <p>Max Capacity: {selectedClass[0].maxcapacity}</p>
        </div>
        
      ) : (
        <p>No class selected.</p>
      )}
    </div>
  );
}

export default ClassDetails;
