
const selectedClasses = (state = [], action) => {
  switch (action.type) {
    case  'SET_SELECTED_CLASSES':
    //  return action.payload
    return [...state,
        ...action.payload]
    default:
      return state;
  }
};

export default selectedClasses;



