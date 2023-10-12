// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// //import { bookClass } from '../../redux/actions/classes'; // You'll need to create this action.

// function ClassBookingPage() {
//   const { classId } = useParams(); // Get the class ID from the URL parameter.
//   const selectedClass = useSelector((store) => store.selectedClass); // Retrieve class details.
//   const dispatch = useDispatch();
//   const history = useHistory();

//   // Function to handle the booking action.
//   const handleConfirmBooking = () => {
//     dispatch(bookClass(classId))
//       .then(() => {
//         alert('Class booked successfully!');
//         history.push('/my-bookings');
//       })
//       .catch((error) => {
//         console.error('Booking failed:', error);
//         alert('Booking failed. Please try again later.');
//       });
//   };

//   return (
//     <div className="container">
//       <h1>Confirm Booking</h1>
//       {selectedClass && (
//         <div>
//           <h2>{selectedClass.name}</h2>
//           <p>Date: {selectedClass.date}</p>
//           <p>Time: {selectedClass.time}</p>
//           <p>Location: {selectedClass.location}</p>
//           <button onClick={handleConfirmBooking}>Confirm Booking</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default ClassBookingPage;