import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNotes) {
    setNotes(prevNotes => {
      return [...prevNotes, newNotes];
    });
    console.log(notes)
  }
  const deleteNote = (id) => {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== noteItem.id;
      })
    })
  }
  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote(id)} />
      ))}
    </div>
  );
}

export default App;
