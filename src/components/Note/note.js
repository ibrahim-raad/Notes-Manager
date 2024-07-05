import React from "react";
import './note.css'

const Note = ({ toggleModal, activeNote, onUpdateNote}) => {
    const onEditField = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now()
        })
    }
    return (
        <div className="note-page">
            <div className="note-preview">
                <input 
                type="text"
                 className="pa2 input-reset ba measure" 
                 id="title"
                  value={activeNote.title} 
                  onChange={(e) => onEditField("title", e.target.value)}
                  onFocus={(e) => e.target.select()}
                   placeholder="write your title here"
                   autoFocus
                    />
                <textarea
                 className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
                 rows={15}
                 cols={100}
                  id="body"
                   value={activeNote.body} 
                   onChange={(e) => onEditField("body", e.target.value)}
                    placeholder="write your note here..." />
                <button className="f7 link dim br-pill ba ph3 pv1 mb2 dib black bg-red"  onClick={toggleModal}>Save</button>
            </div>
        </div>
    );                      
}

export default Note;