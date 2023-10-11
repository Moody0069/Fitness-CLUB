import axios from 'axios';

// Action type
export const SET_CLASSES = 'SET_CLASSES';

// Action creator to fetch classes
// export const fetchClasses = () => (dispatch) => {
//   axios
//     .get('/api/classes') 
//     .then((response) => {
//       dispatch({
//         type: SET_CLASSES,
//         payload: response.data, 
//       });
//     })
//     .catch((error) => {
//       console.error('Error fetching classes:', error);
//     });
// };