// // This page will have the reservation and the option to delete those class you signed up

// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

// function ReservationPage() {
//   const history = useHistory();
//   const registeredClasses = useSelector((store) => store.registeredClasses);
// const handleClick = ()=> {
//   // console.log("info ", selectedClass[0], user.id )
//   dispatch ({ type: "FETCH_CLASS_ATTENDANCE", payload: {
   
//   },
// })


// }
//   const classes = registeredClasses.map((currentClass) => {
//     return (
//       <div key={`selectedClass${currentClass.classid}`}>
//         <h2>{currentClass.name}</h2>
//         <p>{currentClass.instructor}</p>
//         <p>{currentClass.maxcapacity}</p>
//         <p>{currentClass.location}</p>
//         <p>{currentClass.time}</p>
//         <p>{currentClass.date}</p>
//         <button onClick={() => handleClick(currentclass.classid)}>Remove Class </button>

//       </div>
//     );
//   });

//   return (
//     <div className="container">
//       <h2>My Reservation</h2>
//       {/* <button onClick={() => handleRegister(classItem.classid)}>Register</button> */}

//       {classes}
//       <button onClick={() => history.push("/HomePage")}> ClassDetails </button>
//       <button onClick={() => history.push("/DeleteClass")}>DeleteClass </button>
//     </div>
//   );
// }

// export default ReservationPage;
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
  }, [dispatch, user.id]);

  const classes = registeredClasses.map((currentClass) => (
    <div key={currentClass.attendanceid}>
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
      <button onClick={() => history.push("/DeleteClass")}>DeleteClass</button>
    </div>
  );
}

export default ReservationPage;
