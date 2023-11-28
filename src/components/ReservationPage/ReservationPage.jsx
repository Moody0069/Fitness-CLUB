import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import './ReservationPage.css';

function ReservationPage() {
  const history = useHistory();
  const registeredClasses = useSelector((store) => store.registeredClasses);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleRemoveClass = (classId) => {
    dispatch({ type: "DELETE_CLASS", payload: classId });
    dispatch({ type: 'FETCH_CLASS_ATTENDANCE', payload: user.id });
  };

  useEffect(() => {
    dispatch({
      type: "FETCH_CLASS_ATTENDANCE",
      payload: user.id,
    });
  }, []);

  const classes = registeredClasses.map((currentClass, index) => (
    <div
      key={`class-${index}`}
      className="class-container bg-white p-6 rounded-md shadow-md"
    >
      <h2 className="text-2xl font-bold mb-2">{currentClass.name}</h2>
      <p className="text-gray-600">Instructor: {currentClass.instructor}</p>
      <p className="text-gray-600">Max Capacity: {currentClass.maxcapacity}</p>
      <p className="text-gray-600">Location: {currentClass.location}</p>
      <p className="text-gray-600">Time: {currentClass.time}</p>
      <p className="text-gray-600">Date: {currentClass.date}</p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mt-4 hover:bg-red-700"
        onClick={() => handleRemoveClass(currentClass.attendanceid)}
      >
        Remove Class
      </button>
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">My Reservations</h2>
      <div className="class-grid grid grid-cols-3 gap-4 justify-center">
        {classes.length > 0 ? (
          classes
        ) : (
          <p className="text-gray-600 col-span-3 text-center">No reservations found.</p>
        )}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        onClick={() => history.push("/HomePage")}
      >
        Home
      </button>
    </div>
  );
}

export default ReservationPage;
