import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_CLASSES, setClasses } from '../actions/classes.actions';
import axios from 'axios';

function* fetchClassesSaga() {
  try {
    const response = yield call(axios.get, '/api/classes');
    yield put(setClasses(response.data));
  } catch (error) {
    console.log("get all error")
  }
}

function* classesSaga() {
  yield takeLatest(FETCH_CLASSES, fetchClassesSaga);
}

export default classesSaga;
