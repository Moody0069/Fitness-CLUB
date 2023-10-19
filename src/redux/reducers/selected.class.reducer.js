
const selectedClass = (state = [], action) => {
  switch (action.type) {
    case  'SELECT_CLASS':
     return action.payload
     
    default:
      return state;
  }
};

export default selectedClass;



