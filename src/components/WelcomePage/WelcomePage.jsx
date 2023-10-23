import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import './WelcomePage.css';

function WelcomePage() {
  const history = useHistory();
    return (
      <div className="container">
        <h2>Welcome</h2>
        <p>Discover a healthier you with our diverse range of fitness classes.</p>
      <p>Join us today and start your fitness journey!</p>

        <button onClick={() => history.push('/LoginPage')}> Login Page </button> <br/>
        <button onClick={() => history.push('/registration')}> Register Page </button>

      </div>
    );
  }
  
  export default WelcomePage;
  