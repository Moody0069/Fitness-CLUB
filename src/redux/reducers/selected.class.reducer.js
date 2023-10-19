
const selectedClass = (state = null, action) => {
  switch (action.type) {
    case  'SELECT_CLASS':
     return action.payload
     
    default:
      return state;
  }
};

export default selectedClass;



