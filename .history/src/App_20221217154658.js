import './App.css';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';
import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    console.log(notes, 'line 10')
  }, [notes])
  function addNote(newNotes) {
    setNotes(prevNotes => {
      return [...prevNotes, newNotes];
    });
    console.log(notes, 'line 16')

  }
  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        console.log(index)
        return index !== id;
      })
    })
    console.log(id);

  }
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote} />
      ))}
    </div>
  );
}

export default App;
