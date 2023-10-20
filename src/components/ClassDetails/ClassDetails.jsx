import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import userReducer from "../../redux/reducers/user.reducer";
import "./ClassDetails.css";
function ClassDetails() {
  const user = useSelector((store) => store.user);
  const selectedClass = useSelector((store) => store.selectedClass);
  const history = useHistory();
  const dispatch = useDispatch();
  const Params = useParams();
  const handleBack = () => {
    history.push("/SchedulePage");
  };
  console.log ('user', user);
  

  useEffect(() => {
    // Fetch class details based on Params.id
    dispatch({ type: 'FETCH_USER' });
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: Params.id,
    });
  }, [dispatch, Params.id]);
  const handleRegister = () => {
    console.log("info ", selectedClass[0], user.id )
    dispatch ({ type: "SIGNUP_FOR_CLASS", payload: {
      classid: selectedClass[0].classid, 
      userid: user.id,
      date: selectedClass[0].date,
      status: "Register",
    },
    
   })
    history.push("/ConfirmationPage");
  };

  return (
    <div className="container">
      <h1>Class Details</h1>
      <button onClick={handleBack}>Back</button>
      <br />
      <button onClick={handleRegister}>Register</button>
      {selectedClass.length ? (
      
        // changed selecteClass to selectedClass
        <div key={selectedClass[0].name}>
    
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
