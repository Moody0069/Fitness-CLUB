import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function SchedulePage() {
  const classes = useSelector((state) => state.classes);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_CLASSES" });
  }, []);

  const handleSignUp = (classItem) => {
    history.push(`/ClassDetails/${classItem}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Class Schedule</h2>
      <div className="class-grid grid grid-cols-3 gap-4 justify-center">
        {classes.map((classItem) => (
          <div
            key={classItem.classid}
            className="class-container bg-white p-6 rounded-md shadow-md text-center"
          >
            <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
            <p>Date: {classItem.date}</p>
            <p>Time: {classItem.time}</p>
            <p>Location: {classItem.location}</p>
            <p>Instructor: {classItem.instructor}</p>
            <p>Max Capacity: {classItem.maxcapacity}</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
              onClick={() => handleSignUp(classItem.classid)}
            >
              Sign Up
            </button>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-700"
          onClick={() => history.push("/ClassDetails")}
        >
          Class Details
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700"
          onClick={() => history.push("/HomePage")}
        >
          Home page
        </button>
      </div>
    </div>
  );
}

export default SchedulePage;
