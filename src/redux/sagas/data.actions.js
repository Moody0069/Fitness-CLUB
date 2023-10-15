import axios from 'axios';

// Action types
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'; // Optional, for error handling

// Action creator for successful data retrieval
const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

// Action creator for handling errors (optional)
const fetchDataError = (error) => ({
  type: FETCH_DATA_ERROR,
  payload: error,
});

// Asynchronous action creator to fetch data
export const fetchData = () => (dispatch) => {
  // You should replace '/api/data' with the actual API endpoint
  axios.get('/api/sign-up')
    .then((response) => {
      // Dispatch a regular action when the data is received
      dispatch(fetchDataSuccess(response.data));
    })
    .catch((error) => {
      // Handle errors and dispatch an error action (optional)
      dispatch(fetchDataError(error));
    });
};

export default {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  fetchData,
};
// import axios from 'axios';

// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';

// export const fetchDataSuccess = (data) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload: data,
// });

// export const fetchData = () => (dispatch) => {
//   axios
//     .get('/api/sign-up')
//     .then((response) => {
//       dispatch(fetchDataSuccess(response.data));
//     })
//     .catch((error) => {
//       // Handle errors (optional)
//       console.error('Error fetching data:', error);
//     });
// };

// export default {
//       FETCH_DATA_SUCCESS,
//       fetchData,
//        };