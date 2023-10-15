
import { SET_CLASSES, SELECT_CLASS } from "../sagas/classes.actions";


const initialState = {
  classes: [],
  selectedClass: null,
};

const classes = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    case SELECT_CLASS:
      return {
        ...state,
        selectedClass: action.payload,
      };
    default:
      return state;
  }
};

export default classes;



