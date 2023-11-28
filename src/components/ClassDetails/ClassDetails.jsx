// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import userReducer from "../../redux/reducers/user.reducer";

// import "./ClassDetails.css";
// function ClassDetails() {
//   const user = useSelector((store) => store.user);
//   const classDetails = useSelector((store) => store.classDetails);
//   const history = useHistory();
//   const dispatch = useDispatch();
//   const Params = useParams();
//   const handleBack = () => {
//     history.push("/SchedulePage");
//   };
//   console.log ('user', user);
  

//   useEffect(() => {
//     // Fetch class details based on Params.id
//     // dispatch({ type: 'FETCH_USER' });
//     dispatch({
//       type: "FETCH_CLASS_DETAILS",
//       payload: Params.id,
//     });
//   }, []);
//   const handleRegister = () => {
//     // console.log("info ", selectedClass[0], user.id )
//     dispatch ({ type: "SIGNUP_FOR_CLASS", payload: {
//       classid: classDetails[0].classid, 
//       userid: user.id,
//       date: classDetails[0].date
//     },
    
//    })
//     history.push("/ConfirmationPage");
//   };

//   return (
//     <div className="container">
//       <h1>Class Details</h1>
//       <button onClick={handleBack}>Back</button>
//       <br />
//       <button onClick={handleRegister}>Register</button>
//       {classDetails.length ? (
      
//         // changed selecteClass to selectedClass
//         <div key={classDetails[0].name}>
    
//           <h1>{classDetails[0].name}</h1>
//           <p>Date: {classDetails[0].date}</p>
//           <p>Time: {classDetails[0].time}</p>
//           <p>Location: {classDetails[0].location}</p>
//           <p>Instructor: {classDetails[0].instructor}</p>
//           <p>Max Capacity: {classDetails[0].maxcapacity}</p>
//         </div>
//       ) : (
//         <p>No class selected.</p>
//       )}
//     </div>
//   );
// }

// export default ClassDetails;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import "./ClassDetails.css";

function ClassDetails() {
  const user = useSelector((store) => store.user);
  const classDetails = useSelector((store) => store.classDetails);
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams();

  const handleBack = () => {
    history.push("/SchedulePage");
  };

  const handleRegister = () => {
    dispatch({
      type: "SIGNUP_FOR_CLASS",
      payload: {
        classid: classDetails[0].classid,
        userid: user.id,
        date: classDetails[0].date,
      },
    });
    history.push("/ConfirmationPage");
  };

  useEffect(() => {
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: params.id,
    });
  }, [dispatch, params.id]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Class Details</h1>
      <button
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded mr-2 hover:bg-gray-400"
        onClick={handleBack}
      >
        Back
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        onClick={handleRegister}
      >
        Register
      </button>
      {classDetails.length ? (
        <div className="class-details mt-4 p-6 bg-gray-100 rounded-md shadow-md">
          <h1 className="text-xl font-bold mb-2">{classDetails[0].name}</h1>
          <p>Date: {classDetails[0].date}</p>
          <p>Time: {classDetails[0].time}</p>
          <p>Location: {classDetails[0].location}</p>
          <p>Instructor: {classDetails[0].instructor}</p>
          <p>Max Capacity: {classDetails[0].maxcapacity}</p>
        </div>
      ) : (
        <p className="text-gray-600 mt-4">No class selected.</p>
      )}
    </div>
  );
}

export default ClassDetails;
