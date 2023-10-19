import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function WelcomePage() {
  const history = useHistory();
    return (
      <div className="container">
        <h2>Welcome</h2>
        <button onClick={() => history.push('/LoginPage')}> Login Page </button> <br/>
        <button onClick={() => history.push('/registration')}> Register Page </button>

      </div>
    );
  }
  
  export default WelcomePage;
  