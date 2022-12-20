import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  console.log("t1", notes)

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
      console.log(prevNotes)
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
