import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";

function ConfirmationPage() {
  const history = useHistory();

      return (
        <div className="container">
          <h2>Confirmation: Success!</h2>
          <button onClick={() => history.push('/HomePage')}> Home </button>
        </div>
      );
    }
    
    export default ConfirmationPage;
    