import React, { useMemo, useState } from 'react'
import api from "./api";
import {Note} from "./type";
import NoteCard from './components/NoteCard';
import NoteModal from './components/NoteModal';

function App() {
  const [notes, SetNotes] = useState<Note[]>(api.notes.list);
  const [draft, SetDraft] = useState<null | Partial<Note> >(null);
  const [view, SetView] = useState<"active" | "archived">("active");
  
  const matches = useMemo(() => {
    return notes.filter(note => {
      if (view == "active"){
        return !note.archived
      }else if (view == "archived"){
        return note.archived
      }
    });
  }, [notes, view])


  function handleEdit(note: Note){
    SetDraft(note);
  };

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

  function handleDraftChange(field: string, value: string){
    SetDraft(draft => ({
      ...draft,
      [field]: value,
    }));
  };

  function handleSave(){
    if (draft?.id){
      SetNotes((notes) => 
      notes.map(note => {
        if (note.id !== draft.id) return note;
        
        return {
          ...draft,
          lastEdited: new Date().toString() 
        }as Note;
      }),
    );
    }else{
      SetNotes((notes) => 
      notes.concat({
          id: String(+new Date()), 
          ...(draft as Omit<Note, "id" >),
        }),
      );
    }

    SetDraft(null);
  }

  return (
    <main style={{padding: 24}}>
      <div style={{marginBottom: 24}}>
        <h1>My Notes</h1>
        <div style={{display: 'flex', gap: 24}}>
          <button className='nes-btn' onClick={() => SetDraft({})}>Create Note</button>
          <button className='nes-btn' onClick={() => SetView(view => view == "active" ? "archived" : "active")}>{view == "active" ? "View Archived" : "View Actives"}</button>
        </div>
      </div>
      <div style={{display: 'grid', gap:24, gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr)'}}>
        {matches.map((note) => (
          <NoteCard 
            key={note.id} 
            note={note} 
            onDelete={handleDelete} 
            onArchive={handleArchive} 
            onEdit={handleEdit}/>
        ))}
      </div>
      
      {draft && 
      <NoteModal 
        onChange={handleDraftChange}  note= {draft} 
        onClose={()=> SetDraft(null)}
        onSave={handleSave}
        />}
    </main>
  )
}

export default App
