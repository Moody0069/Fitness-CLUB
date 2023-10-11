import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ClassList() {
  const dispatch = useDispatch();
  const classes = useSelector((store) => store.classes); 

  useEffect(() => {
    dispatch({ type: 'FETCH_CLASSES' }); // Define a corresponding action to fetch classes
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Class List</h1>
      {/* <ul>
        {classes.map((class) => (
          <li key={class.id}>
            <h2>{class.name}</h2>
            <p>Date: {class.date}</p>
            <p>Time: {class.time}</p>
            <p>Location: {class.location}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default ClassList;