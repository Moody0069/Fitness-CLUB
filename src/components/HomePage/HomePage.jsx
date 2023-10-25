
import React from "react";
import { useHistory } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  const history = useHistory();
  const classes = [
    {
      id: 1,
      name: 'Yoga',
      description: 'A relaxing yoga class to unwind and de-stress.',
      schedule: 'Mon, Wed, Fri at 7:00 AM',
    },
    {
      id: 2,
      name: 'Cycle',
      description: 'An intense cycling workout to boost your cardio fitness.',
      schedule: 'Tue, Thu, Sat at 5:30 PM',
    },
    {
      id: 3,
      name: 'Zumba',
      description: 'A fun and energetic dance fitness class.',
      schedule: 'Mon and Fri at 6:30 PM',
    },
  ];

  return (
    <div className="container">
      <h1>Welcome to Fitness CLUB</h1>
      <h2>Upcoming Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <div className="class-card">
              <h3>{classItem.name}</h3>
              <p>{classItem.description}</p>
              <p>Schedule: {classItem.schedule}</p>
              <button onClick={() => history.push(`/class-detail/${classItem.id}`)}>Learn More</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cta-buttons">
        <button onClick={() => history.push('/SchedulePage')}>Schedule Page</button>
        <button onClick={() => history.push('/ReservationPage')}>Reservation Page</button>
      </div>
    </div>
  );
}

export default HomePage;
