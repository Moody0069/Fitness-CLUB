import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function SchedulePage() {
  const history = useHistory();
  const [classes, setClasses] = useState([]); 

  const sampleClasses = [
    {
      id: 1,
      name: 'Yoga',
      date: '2023-10-15',
      time: '09:00 AM',
      location: 'Yoga Studio A',
      instructor: 'John Doe',
      maxCapacity: 20,
    },
    {
      id: 2,
      name: 'Cycle',
      date: '2023-10-15',
      time: '11:00 AM',
      location: 'Cycle Studio B',
      instructor: 'Jane Smith',
      maxCapacity: 15,
    },
    {
      id: 3,
      name: 'Zumba',
      date: '2023-10-15',
      time: '03:00 PM',
      location: 'Dance Studio C',
      instructor: 'Alice Johnson',
      maxCapacity: 25,
    },
  ];

  useEffect(() => {
    
    setClasses(sampleClasses); 
  }, []);

  // Function to handle class sign-up
  const handleSignUp = (classId) => {
  };

  return (
    <div className="container">
      <h2>Schedule</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem.id}>
            <h3>{classItem.name}</h3>
            <p>Date: {classItem.date}</p>
            <p>Time: {classItem.time}</p>
            <p>Location: {classItem.location}</p>
            <p>Instructor: {classItem.instructor}</p>
            <p>Max Capacity: {classItem.maxCapacity}</p>
            <button onClick={() => handleSignUp(classItem.id)}>Sign Up</button>
          </li>
        ))}
      </ul>
      <button onClick={() => history.push('/ClassDetails')}>Class Details</button>
    </div>
  );
}

export default SchedulePage;

