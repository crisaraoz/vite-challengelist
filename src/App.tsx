import React, { useState } from 'react'
import api from "./api";
import {Note} from "./type";
import NoteCard from './components/NoteCard';

function App() {
  const [notes, SetNotes] = useState<Note[]>(api.notes.list);

  function handleDelete(id: Note['id']){
    SetNotes(notes => notes.filter((note) => note.id !== id))
  };

  function handleArchive(id: Note['id']){
    SetNotes((notes) => 
      notes.map(note => {
        if (note.id !== id) return note;
        
        return {
          ...note,
          archived: !note.archived,
        };
    }),
    );
  };

  return (
    <main style={{padding: 24}}>
      <div style={{marginBottom: 24}}>
        <h1>My Notes</h1>
        <button className='nes-btn'>Create Note</button>
      </div>
      <div style={{display: 'grid', gap:24, gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr)'}}>
        {notes.map((note) => (
          <NoteCard onDelete={handleDelete} onArchive={handleArchive} key={note.id} note={note} />
        ))}
      </div>

    </main>
  )
}

export default App
