// App.js
import React, { useState } from 'react';
import Consultant from './Consultant';

const initialConsultants = [
  {
    name: 'John Doe',
    expertise: 'Web Development',
    contact: 'john@example.com',
  },
  {
    name: 'Jane Smith',
    expertise: 'Data Science',
    contact: 'jane@example.com',
  },
  // Add more consultants as needed
];

const App = () => {
  const [consultants, setConsultants] = useState(initialConsultants);
  const [newConsultant, setNewConsultant] = useState({
    name: '',
    expertise: '',
    contact: '',
  });

  const handleInputChange = (e) => {
    setNewConsultant({
      ...newConsultant,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddConsultant = () => {
    setConsultants([...consultants, newConsultant]);
    setNewConsultant({
      name: '',
      expertise: '',
      contact: '',
    });
  };

  return (
    <div>
      <h1>Consulting App</h1>
      <div>
        <label>
          Filter by Expertise:{' '}
          <select
            onChange={(e) => {
              const selectedExpertise = e.target.value;
              if (selectedExpertise === 'All') {
                setConsultants(initialConsultants);
              } else {
                const filteredConsultants = initialConsultants.filter(
                  (consultant) =>
                    consultant.expertise === selectedExpertise
                );
                setConsultants(filteredConsultants);
              }
            }}
          >
            <option value="All">All</option>
            <option value="Web Development">Web Development</option>
            <option value="Data Science">Data Science</option>
            {/* Add more expertise options as needed */}
          </select>
        </label>
      </div>
      {consultants.map((consultant, index) => (
        <Consultant key={index} {...consultant} />
      ))}
      <div>
        <h2>Add New Consultant</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newConsultant.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Expertise:
          <input
            type="text"
            name="expertise"
            value={newConsultant.expertise}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={newConsultant.contact}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleAddConsultant}>Add Consultant</button>
      </div>
    </div>
  );
};

export default App;
