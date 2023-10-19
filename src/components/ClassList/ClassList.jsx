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

  // function handleClassClick(classItem) {
  //   dispatch(selectClass(classItem));
  //   history.push(`/ClassDetails`);
  // }
  // ${classItem.id}
  return (
    <div className="container">
      <h1>Class List</h1>
      <ul>
      { Classlist.map((classItem) => (
        <ClassItem key={classItem.ClassID} id ={classItem.ClassID} Name = {classItem.Name}  />
        
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
