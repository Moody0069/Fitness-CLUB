import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
//import classes from './classes.reducer';
import classes from './classes.reducer';
import selectedClasses from './selected.class.reducer';
import classDetails from './classDetails.reducer';
import registeredClasses from './registered.classess.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  classes,
  classDetails,
  selectedClasses, // will have an id and username if someone is logged in
  registeredClasses,
});

export default rootReducer;
