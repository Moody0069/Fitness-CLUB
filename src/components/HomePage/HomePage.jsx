import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import '.src/components/HomePage/HomePage.css';
import './HomePage.css';
import ClassList from "../ClassList/ClassList";

function HomePage() {
  const history = useHistory();
  const classes = [
    {
      id: 1,
      name: 'Yoga',
      description: 'A relaxing yoga class to unwind and de-stress.',
    },
    {
      id: 2,
      name: 'Cycle',
      description: 'An intense cycling workout to boost your cardio fitness.',
    },
    {
      id: 3,
      name: 'Zumba',
      description: 'A fun and energetic dance fitness class.',
    },
  ];


  return (
  <div className="container">
    {/* <h2>Home Page</h2> */}      
      <h1>Welcome to Fitness CLUB</h1>
      <h2>Upcoming Classes</h2>

    
    <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <button onClick={() => history.push(`/class-detail/${classItem.id}`)}>
              {classItem.name}
            </button>
          </li>
        ))}
      </ul>


    <button onClick={() => history.push('/SchedulePage')}> Schedule Page </button>
    <button onClick={() => history.push('/ReservationPage')}> Reservation Page </button>
{/* <ClassList/> */}

  </div>
);
}
    
      
    
export default HomePage;
