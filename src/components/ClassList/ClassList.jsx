import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchClasses, selectClass } from '../../redux/sagas/classes.actions';

function ClassList() {
  const dispatch = useDispatch();
  const classes = useSelector((store) => store.classes);
  const history = useHistory();

  useEffect(() => {
    dispatch({ type: 'FETCH_CLASSES' });
  }, [dispatch]);

  function handleClassClick(classItem) {
    dispatch(selectClass(classItem));
    history.push(`/class-detail/${classItem.id}`);
  }

  return (
    <div className="container">
      <h1>Class List</h1>
      <ul>
        {classes && classes.length > 0 ? ( // Check if classes is defined and not empty
          classes.map((classItem) => (
            <li key={classItem.id} onClick={() => handleClassClick(classItem)}>
              <h2>{classItem.name}</h2>
              <p>Date: {classItem.date}</p>
              <p>Time: {classItem.time}</p>
              <p>Location: {classItem.location}</p>
            </li>
          ))
        ) : (
          <p> Available Classes.</p>
        )}
      </ul>
    </div>
  );
}

export default ClassList;
