import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes(prevNotes => {
      return [...prevNotes, note];
    })
    console.log(notes)
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
    </div>
  );
}

export default App;
