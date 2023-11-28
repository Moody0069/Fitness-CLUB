// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import React from "react";

// function ConfirmationPage() {
//   const history = useHistory();

//       return (
//         <div className="container">
//           <h2>Confirmation: Success!</h2>
//           <button onClick={() => history.push('/HomePage')}> Home </button>
//         </div>
//       );
//     }
    
//     export default ConfirmationPage;
import React from "react";
import { useHistory } from "react-router-dom";

function ConfirmationPage() {
  const history = useHistory();

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="bg-green-200 p-6 rounded-md shadow-md text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-700">Confirmation: Success!</h2>
        <p className="text-gray-800 mb-4">
          Thank you for registering. Your reservation was successful.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => history.push('/HomePage')}
        >
          Home
        </button>
      </div>
    </div>
  );
}

export default ConfirmationPage;
