import {Note} from "../type";

type NoteProps = {
    note: Note;
    onArchive: (id: Note['id']) => void;
    onDelete: (id: Note['id']) => void;
  };
  
  
  export default function NoteCard({note, onArchive, onDelete}: NoteProps){
    return(
      <div className="nes-container">
      <div>
          <h3>{note.title}</h3>
          <p>Last Edited: {note.date}</p>
          <div style={{display: "flex", gap:12}}>
            <button className='nes-btn' onClick={() => onArchive(note.id)} >
              Archive: {String(note.archived)}</button>
            <button className='nes-btn'>Edit</button>
            <button className='nes-btn'onClick={() => onDelete(note.id)}>Delete</button>
          </div>
      </div>
      </div>
    )
  };