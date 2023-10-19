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
function* SelectedClass(action) {
    console.log('in fetech sage')
      try {
        const response = yield axios.get (`/api/detail/${action.payload}`);
        console.log('response',response.data)
        yield put({ type: 'SELECT_CLASS', payload: response.data});
      } catch (error) {
        console.log("get all error")
      }
    }

    function* postClass(action) {
        try {
            yield axios.post('/api/Classes', action.payload);
            // console.log('postfavorite',postFavorite.config.data)
            yield put({ type: 'GET_CLASSES'});
        } catch (error) {
            console.log('error posting Class', error);
        }    
      }

    // function* deleteClass(action) {
    //     try {
    //       const deleteClass = yield axios.delete(`/details/:id + action.payload`);
    //       console.log(deleteClass)
    //       yield put({ type: 'FETCH_CLASSES'});
    //     } catch (error) {
    //       console.log("error DELETING Classes", error);
    //     }
    //   }
function* classesSaga() {
  yield takeLatest("FETCH_CLASSES", fetchClasses);
  yield takeLatest("FETCH_CLASS_DETAILS", SelectedClass);
  yield takeLatest("SINGUP_FOR_CLASS", postClass);
  
//   yield takeLatest('DELETE_CLASS', deleteClass);
// yield takeLatest('GET_CLASS', getClass)

}

export default classesSaga;
