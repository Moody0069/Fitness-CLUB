import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SchedulePage() {
  const history = useHistory();
   
    return (
      <div className="container">
        <h2>Schedule</h2>
  
        <button onClick={() => history.push('/ClassDetails')}> ClassDetails </button>

      </div>
    );
  }
  
  export default SchedulePage;
  