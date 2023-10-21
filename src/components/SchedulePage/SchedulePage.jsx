import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './SchedulePage.css';

function SchedulePage() {
  const classes = useSelector((state) => state.classes);
  const history = useHistory();
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch({ type: 'FETCH_CLASSES' });
  }, []);

  const handleSignUp = (classItem) => {
    // dispatch ({ type: "SIGNUP_FOR_CLASS", payload: classItem});
    history.push(`/ClassDetails/${classItem}`);
  };

  return (
    <div className="container">
      <h2>Schedule</h2>
      <ul>
      { classes.map((classItem) => (
            <li key={classItem.classid}  >
              <h3>{classItem.name}</h3>
              <p>Date: {classItem.date}</p>
              <p>Time: {classItem.time}</p>
              <p>Location: {classItem.location}</p>
              <p>Instructor: {classItem.instructor}</p>
              <p>Max Capacity: {classItem.maxcapacity}</p>
              <button onClick={() => handleSignUp(classItem.classid)}>Sign Up</button>
            </li> 
          ))
      }
      </ul>
      <button onClick={() => history.push('/ClassDetails')}>Class Details</button>
      <button onClick={() => history.push('/HomePage')}>Home page</button>
    </div>
  );
}

export default SchedulePage;
