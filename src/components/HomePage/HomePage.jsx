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
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fitness CLUB</h1>
      <h2 className="text-2xl font-bold mb-2">Upcoming Classes</h2>
      <ul className="class-list">
        {classes.map((classItem) => (
          <li key={classItem.id} className="class-item">
            <div
              className={`class-card ${activeAccordion === classItem.id ? 'active' : ''}`}
            >
              <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
              {activeAccordion === classItem.id ? (
                <div>
                  <p className="text-gray-600">{classItem.description}</p>
                  <p className="text-gray-600">Schedule: {classItem.schedule}</p>
                </div>
              ) : null}
              <button
                className={`accordion-button ${activeAccordion === classItem.id ? 'close' : ''} bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline`}
                onClick={() => toggleAccordion(classItem.id)}
              >
                {activeAccordion === classItem.id ? "Close" : "Learn More"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cta-buttons flex mt-4">
        <button
          className="bg-blue-500 text-white px-3 py-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          onClick={() => history.push('/SchedulePage')}
        >
          Schedule Page
        </button>
        <button
          className="bg-purple-500 text-white px-3 py-2 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline"
          onClick={() => history.push('/ReservationPage')}
        >
          Reservation Page
        </button>
      </div>
    </div>
  );
}

export default HomePage;