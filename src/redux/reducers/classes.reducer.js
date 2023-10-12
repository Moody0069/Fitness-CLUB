const classes = (state = [], action) => {
    switch (action.type) {
      case 'SET_CLASSES':
        return action.payload; 
      default:
        return state;
    }
  };
  const selectedClass = (state = null, action) => {
    switch (action.type) {
      case 'SELECT_CLASS':
        return action.payload; 
      default:
        return state;
    }
  };
  
  export default {classes,selectedClass};