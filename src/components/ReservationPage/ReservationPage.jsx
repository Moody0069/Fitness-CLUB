// This page will have the reservation and the option to delete those class you signed up

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ReservationPage() {
    const history = useHistory();
     
      return (
        <div className="container">
          <h2>My Reservation</h2>
    
          <button onClick={() => history.push('/HomePage')}> ClassDetails </button>
          <button onClick={() => history.push('/DeleteClass')}>DeleteClass </button>

        </div>
      );
    }
    
    export default ReservationPage;
    