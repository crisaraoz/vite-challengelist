import {Note} from "../type";

type NoteModalProps = {
    note: Partial<Note>;
    onClose: VoidFunction;
    onChange: (field: string, value: string) => void;
    onSave: VoidFunction;
  };
  
function NoteModal ({note, onClose, onChange, onSave}: NoteModalProps){
    return (
    <section 
        style={{
            width: '100vw', 
            height:'100vh', 
            position:'fixed', 
            top:0, 
            left:0, 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}>
        <div 
        style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.2)", 
            width:"100%", 
            height:"100%"}}/>
        <form method="dialog"
            style={{
                backgroundColor: "white",
                zIndex: 1,
                padding: 12,
                border: "5px solid black",
            }}>
          <h1 className="title">Create / Edit Note</h1>
          <div className="nes-field">
            <label htmlFor="title">Title</label>
            <input 
                onChange={(event) => onChange("title", event.target.value)} 
                value={note.title} 
                id="title" 
                className="nes-input"/>
          </div>
          <div className="nes-field">
            <label htmlFor="content">Content</label>
            <textarea 
                onChange={(event) => onChange("content", event.target.value)} 
                value={note.content} 
                id="content" 
                className="nes-input"/>
          </div>
          <div className="dialog-menu" 
          style={{
            marginTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
           }}>
            <button className="nes-btn" onClick={onClose}>Close</button>
            {<button className="nes-btn is-primary" onClick={onSave}>Save</button>}
          </div>
        </form>
    </section>
    );
  };

  export default NoteModal;