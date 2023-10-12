import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
//import { selectClass } from '../../redux/sagas/classes.actions';
import { fetchClasses, selectClass } from '../../redux/sagas/classes.actions';

function ClassList() {
  const dispatch = useDispatch();
  const classes = useSelector((store) => store.classes); 
  const selectedClass = useSelector((store) => store.selectedClass);
console.log('selectClass', works)
const history = useHistory ();

// useEffect(() => {
//     dispatch(fetchClasses()); 
//   }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FETCH_CLASSES' }); 
  }, [dispatch]);

  function handleClassClick(classItem) {
    dispatch(selectClass(classItem));
    history.push(`/class-detail/${classItem.id}`);
  }
//${classId}
  return (
    <div className="container">
      <h1>Class List</h1>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}onClick={() => handleClassClick(classItem)} > 
            <h2>{classItem.name}</h2>
            <p>Date: {classItem.date}</p>
            <p>Time: {classItem.time}</p>
            <p>Location: {classItem.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
////(classItem.id)