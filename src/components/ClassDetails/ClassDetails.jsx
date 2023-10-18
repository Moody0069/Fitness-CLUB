import { response } from "express";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './ClassDetails.css';
function ClassDetails() {
  const selectedClass = useSelector((store) => store.selectedClass);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBack = () => {
    history.push('/SchedulePage');
  };
  // const showDetailsView = (classItem) => {
  //  dispatch(selectClass(classItem));
  //   history.push('/ClassDetails');
  // };
  const showDetailsView = (classItem) => {
    dispatch({
      type: "FETCH_CLASS_DETAILS",
      payload: response.data,
    });
    history.push('/ClassDetails');
  };
  // dispatch({
  //   type: "SET_SELECTED_CLASS",
  //   payload: response.data,
  // });


  const handleRegister = () => {
    history.push('/ConfirmationPage');
  };

  return (
    <div className="container">
      <h1>Class Details</h1>
      <button onClick={handleBack}>Back</button>
      <br />
      <button onClick={handleRegister}>Register</button>
      {selectedClass ? (
        
          <div key={selectClass.classItem} onClick={() => showDetailsView(selectedClass)}>
          <h1>{selectedClass.name}</h1>
          <p>Date: {selectedClass.date}</p>
          <p>Time: {selectedClass.time}</p>
          <p>Location: {selectedClass.location}</p>
          <p>Instructor: {selectedClass.instructor}</p>
          <p>Max Capacity: {selectedClass.maxCapacity}</p>
        </div>
        
      ) : (
        <p>No class selected.</p>
      )}
    </div>
  );
}

export default ClassDetails;
// Function to navigate to the movie details view when a movie is clicked
// const showDetailsView = (movie) => {
//   // Navigate to the '/details' route
//   history.push(`/details`);

//   // Dispatch an action to fetch genres for the selected movie
//   dispatch({
//     type: "FETCH_GENRES",
//     payload: movie.id,
//   });

//   // Dispatch an action to set the selected movie in the Redux store
//   dispatch({
//     type: "SET_SELECTED_MOVIE",
//     payload: movie,
//   });
// };

// return (
//   <main>
//     <h1>MovieList</h1>
//     <section className="movies">
//       {/* Map over the 'movies' array and render each movie */}
//       {movies.map((movie) => {
//         return (
//           <div
//             key={movie.id}
//             onClick={() => {
//               // Call 'showDetailsView' when a movie is clicked
//               showDetailsView(movie);
//             }}
//           >
//             <h3>{movie.title}</h3>
//             <img src={movie.poster} alt={movie.title} />
//           </div>
//         );
//       })}
//     </section>
//   </main>
// );
// }

// export default MovieList;
