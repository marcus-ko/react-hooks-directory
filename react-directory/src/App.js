import React from 'react';
import './App.css';
import { useState } from 'react';
import AddPerson from './components/AddPerson/AddPerson';
import ListPeople from './components/ListPeople/ListPeople';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: 'James',
      phone: '3122223332',
      email: 'testuser@gmail.com',
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const addContact = value => {
    setContacts([...contacts, value]);
  };

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <h1>Person Directory</h1>
      <button className="open-modal" onClick={toggleModal}>
        Open modal
      </button>
      <div className="container">
        <ListPeople contacts={contacts} />

        <Modal
          closeTimeoutMS={200}
          isOpen={isOpen}
          onRequestClose={toggleModal}
          contentLabel="My dialog"
        >
          <AddPerson addContact={addContact} toggleModal={toggleModal} />
          <button className="close-modal" onClick={toggleModal}>
            X
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default App;
