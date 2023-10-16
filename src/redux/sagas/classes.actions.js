import axios from 'axios';

export const SET_CLASSES = 'SET_CLASSES';
export const SELECT_CLASS = 'SELECT_CLASS';

export const setClasses = (classes) => ({
  type: SET_CLASSES,
  payload: classes,
});

export const selectClass = (classItem) => ({
  type: SELECT_CLASS,
  payload: classItem,
});

// export const fetchClasses = () => (dispatch) => {
//   axios
//     .get('/api/classes')
//     .then((response) => {
//       dispatch(setClasses(response.data));
//     })
//     .catch((error) => {
//       //console.error('Error fetching classes:', error);
//     });
//};
// export const fetchClasses = () => (dispatch) => {
function* fetchClasses (action) {
  try {
    const response = yield axios.get('/api/classes');
    yield put({ type: 'SET_CLASSES', payload: response.data});
  } catch (error) {
    console.log('Error fetchMoves Saga:', error);
  }
}