import { takeLatest, put } from 'redux-saga/effects';
// import { FETCH_CLASSES, setClasses } from '../actions/classes.actions';
import axios from 'axios';

function* fetchClasses() {
console.log('in fetech sage')
  try {
    const response = yield axios.get ( '/api/classes');
    yield put({ type: 'SET_CLASSES', payload: response.data});
  } catch (error) {
    console.log("get all error")
  }
}
function* SelectedClass() {
    console.log('in fetech sage')
      try {
        const response = yield axios.get ( '/api/classes/details/' + action.payload);
        yield put({ type: 'SELECT_CLASS', payload: response.data});
      } catch (error) {
        console.log("get all error")
      }
    }

function* classesSaga() {
  yield takeLatest("FETCH_CLASSES", fetchClasses);
  yield takeLatest("FETCH_CLASS_DETAILS", SelectedClass);
}

export default classesSaga;
