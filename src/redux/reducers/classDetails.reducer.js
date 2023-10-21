
const classDetails = (state = [], action) => {
    switch (action.type) {
      case  'SET_CLASS_DETAILS':
      //  return action.payload
      return action.payload;
      default:
        return state;
    }
  };
  
  export default classDetails;