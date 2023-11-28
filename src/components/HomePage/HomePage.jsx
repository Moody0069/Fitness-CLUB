import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  const history = useHistory();
  
  // Define an array of classes
  const classes = [
    {
      id: 1,
      name: 'Spin Class',
      description: 'A high-intensity spin class for cardio and endurance.',
      schedule: 'Tue and Thu at 6:00 PM',
    },
    {
      id: 2,
      name: 'Pilates',
      description: 'A core-strengthening Pilates class for flexibility and balance.',
      schedule: 'Mon, Wed, Fri at 9:00 AM',
    },
    {
      id: 3,
      name: 'Aerobics',
      description: 'An energetic aerobics class to boost your fitness levels.',
      schedule: 'Wed and Sat at 3:30 PM',
    },
    {
      id: 4,
      name: 'HIIT (High-Intensity Interval Training)',
      description: 'An intense HIIT class for quick and effective fat-burning workouts.',
      schedule: 'Mon and Thu at 6:30 PM',
    },
  ];

  const [activeAccordion, setActiveAccordion] = useState(null); 
  const toggleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null); // If it's already active, close it
    } else {
      setActiveAccordion(id); // If it's not active, set it as active
    }
  };
     
  return (
    <div className="container">
      
      <h1>Welcome to Fitness CLUB</h1>
      <h2>Upcoming Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <div className="class-card">
              <h3>{classItem.name}</h3>
              {activeAccordion === classItem.id ? (
                <div>
                  <p>{classItem.description}</p>
                  <p>Schedule: {classItem.schedule}</p>
                </div>
              ) : null}
              <button onClick={() => toggleAccordion(classItem.id)}>
                {activeAccordion === classItem.id ? "Close" : "Learn More"}
              </button>
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
