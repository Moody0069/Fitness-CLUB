import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function HomePage() {
  const history = useHistory();
  return (
    <div className="container">
      <h2>Home Page</h2>
      <button onClick={() => history.push('/SchedulePage')}> Schedule Page </button>

    </div>
  );
}

export default HomePage;
