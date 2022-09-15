import React from 'react';
import './App.css';
import { useState } from 'react';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'James',
      phone: '3122223332',
      email: 'testuser@gmail.com',
    },
  ]);

  const addContact = value => {
    setContacts([...contacts, value]);
  };

  return (
    <div>
      <div className="container">
        <ListPeople contacts={contacts} />
        <AddPerson addContact={addContact} />
      </div>
    </div>
  );
};

export default App;
