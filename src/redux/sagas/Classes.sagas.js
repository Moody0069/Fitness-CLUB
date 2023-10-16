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

function* classesSaga() {
  yield takeLatest("FETCH_CLASSES", fetchClasses);
}

export default classesSaga;
