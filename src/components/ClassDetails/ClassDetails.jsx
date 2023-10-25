import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import userReducer from "../../redux/reducers/user.reducer";
import "./ClassDetails.css";
function ClassDetails() {
  const user = useSelector((store) => store.user);
  const classDetails = useSelector((store) => store.classDetails);
  const history = useHistory();
  const dispatch = useDispatch();
  const Params = useParams();
  const handleBack = () => {
    history.push("/SchedulePage");
  };
  console.log ('user', user);
  

  useEffect(() => {
    // Fetch class details based on Params.id
   
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: Params.id,
    });
  }, []);
  const handleRegister = () => {
    // console.log("info ", selectedClass[0], user.id )
    dispatch ({ type: "SIGNUP_FOR_CLASS", payload: {
      classid: classDetails[0].classid, 
      userid: user.id,
      date: classDetails[0].date
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
      {classDetails.length ? (
      
        // changed selecteClass to selectedClass
        <div key={classDetails[0].name}>
    
          <h1>{classDetails[0].name}</h1>
          <p>Date: {classDetails[0].date}</p>
          <p>Time: {classDetails[0].time}</p>
          <p>Location: {classDetails[0].location}</p>
          <p>Instructor: {classDetails[0].instructor}</p>
          <p>Max Capacity: {classDetails[0].maxcapacity}</p>
        </div>
      ) : (
        <p>No class selected.</p>
      )}
    </div>
  );
}

export default ClassDetails;
