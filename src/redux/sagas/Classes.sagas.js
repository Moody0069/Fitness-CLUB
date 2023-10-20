import { takeLatest, put } from "redux-saga/effects";
// import { FETCH_CLASSES, setClasses } from '../actions/classes.actions';
import axios from "axios";

function* fetchClasses() {
  console.log("in fetech sage");
  try {
    const response = yield axios.get("/api/classes");
    yield put({ type: "SET_CLASSES", payload: response.data });
  } catch (error) {
    console.log("get all error");
  }
}

function* fetchClassAttendance(action) {
    console.log(action)
    try {
      const response = yield axios.get(`/api/classes/attendance/${action.payload}`);
      yield put({ type: "SET_REGISTERED_CLASSES", payload: response.data });
    } catch (error) {
      console.log("reg get all error");
    }
  }

function* fetchClassDetails(action) {
  try {
    const response = yield axios.get(`/api/detail/${action.payload}`);
    // console.log('response',response.data)
    yield put({ type: "SET_CLASS_DETAILS", payload: response.data });
  } catch (error) {
    console.log("get all error");
  }
}

function* postClass(action) {
  try {
    console.log("action.payload", action.payload);
    const response = yield axios.post("/api/classes/attendance", action.payload);
    yield put({ type: "FETCH_CLASS_ATTENDANCE", payload: action.payload.userid});
  } catch (error) {
    console.log("error posting Class", error);
  }
}

function* deleteClass(action) {
    try {
      const classId = action.payload; 
      yield axios.delete(`/api/class/${classId}`); 
      yield put({ type: 'FETCH_CLASSES' }); 
    } catch (error) {
      console.log("Error deleting class", error);
    }
   }

function* classesSaga() {
  yield takeLatest("FETCH_CLASSES", fetchClasses);
    yield takeLatest("FETCH_CLASS_DETAILS", fetchClassDetails);
  yield takeLatest("SIGNUP_FOR_CLASS", postClass);
  yield takeLatest("DELETE_CLASS", deleteClass);
    yield takeLatest('FETCH_CLASS_ATTENDANCE', fetchClassAttendance);
  // yield takeLatest('GET_CLASS', getClass)
}

export default classesSaga;

// Fetch class attendance
//  set class attendance (selectedclasses)
// make sure to rename selectedClass to selectedClasses
// change selectedClasses in your jsx page as well