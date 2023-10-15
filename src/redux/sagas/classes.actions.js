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

export const fetchClasses = () => (dispatch) => {
  axios
    .get('/api/classes')
    .then((response) => {
      dispatch(setClasses(response.data));
    })
    .catch((error) => {
      //console.error('Error fetching classes:', error);
    });
};
