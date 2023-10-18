import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { fetchClasses, selectClass } from "../../redux/sagas/classes.actions";
// import { fetchClasses } from "../../redux/sagas/classes.actions";
function ClassList() {
  const dispatch = useDispatch();
  const classes = useSelector((store) => store.classes);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CLASSES' });
  }, []);

  function handleClassClick(classItem) {
    dispatch(selectClass(classItem));
    history.push(`/ClassDetails`);
  }
  // ${classItem.id}
  return (
    <div className="container">
      <h1>Class List</h1>
      <ul>
      { classes.map((classItem) => (
            <li
              key={classItem.ClassID}
              onClick={() => handleClassClick(classItem)}
            >
              <h2>{classItem.Name}</h2>
              
              {/* <p>Date: {classItem.Date}</p>
              <p>Time: {classItem.Time}</p>
              <p>Location: {classItem.Location}</p> */}
            </li>
          ))
        // ) : (
        //   <p> Available Classes.</p>
        // )}
      }
      </ul>
    </div>
  );
}

export default ClassList;
