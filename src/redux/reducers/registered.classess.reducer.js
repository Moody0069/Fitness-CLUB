const registeredClasses = (state = [], action) => {
    switch (action.type) {
      case  'SET_REGISTERED_CLASSES':
        return action.payload
      default:
        return state;
    }
  };
  
  export default registeredClasses;