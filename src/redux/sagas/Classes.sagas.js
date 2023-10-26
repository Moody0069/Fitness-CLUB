import { takeLatest, put } from "redux-saga/effects";
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
    yield axios.post("/api/classes/attendance", action.payload);
    yield put({ type: "FETCH_CLASS_ATTENDANCE", payload: action.payload.userid});
  } catch (error) {
    console.log("error posting Class", error);
  }
}



function* deleteClass(action) {
    try {
      const classId = action.payload;
      yield axios.delete(`/api/classes/${classId}`);
    } catch (error) {
      console.log("Error deleting class", error);
    }
  }
  
  //put
  function* updateUser(action) {
    try {
      const { userid, username, password } = action.payload;
  
      const response = yield axios.put('/api/user/update', { userid, username, password });

      yield put({ type: 'USER_INFO_UPDATED' });
    } catch (error) {
      console.log('Error updating user information:', error);
    }
  }



  

function* classesSaga() {
  yield takeLatest("FETCH_CLASSES", fetchClasses);
    yield takeLatest("FETCH_CLASS_DETAILS", fetchClassDetails);
  yield takeLatest("SIGNUP_FOR_CLASS", postClass);
  yield takeLatest("DELETE_CLASS", deleteClass);
    yield takeLatest('FETCH_CLASS_ATTENDANCE', fetchClassAttendance);
    yield takeLatest('UPDATE_USER_INFO', updateUser);
}

export default classesSaga;

// Fetch class attendance
//  set class attendance (selectedclasses)
// make sure to rename selectedClass to selectedClasses
// change selectedClasses in your jsx page as well