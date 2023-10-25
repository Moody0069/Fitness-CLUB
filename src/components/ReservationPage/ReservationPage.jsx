import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function ReservationPage() {
  const history = useHistory();
  const registeredClasses = useSelector((store) => store.registeredClasses);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleRemoveClass = (classId) => {
    // Dispatch the action to delete the class
    dispatch({ type: "DELETE_CLASS", payload: classId });
  };

  useEffect(() => {
    dispatch({
      type: "FETCH_CLASS_ATTENDANCE",
      payload: user.id,
    });
  }, []);

  const classes = registeredClasses.map((currentClass, index) => (
    <div key={`class-${index}`}>
      <h2>{currentClass.name}</h2>
      <p>{currentClass.instructor}</p>
      <p>{currentClass.maxcapacity}</p>
      <p>{currentClass.location}</p>
      <p>{currentClass.time}</p>
      <p>{currentClass.date}</p>
      <button onClick={() => handleRemoveClass(currentClass.attendanceid)}>Remove Class</button>
    </div>
  ));

  return (
    <div className="container">
      <h2>My Reservation</h2>
      {classes}
      <button onClick={() => history.push("/HomePage")}>Home</button>
    </div>
  );
}

export default ReservationPage;
