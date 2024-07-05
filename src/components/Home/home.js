import React from 'react';
import './home.css'

const HomePage = ({ notes, addNote, deleteNote, handleViewNote}) => {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className='home'>
            <div className='header '>
                <h1 >Notes</h1>
                <button onClick={addNote} className='f5 link dim br3 ph3 pv2 mb4 dib black bg-white'>Add</button>
            </div>
                <div className='notes'>
                    <div className='f2 i '>
                    {sortedNotes.length === 0 && 'Add a Note to start...'}
                    </div>
                {sortedNotes.map((note) => (
                    <div key={note.id}  className='note'>
                        <div className='note-structure'>
                            <strong onClick={() => handleViewNote(note)} className='f4'>{note.title === '' ? 'Untitled' : note.title}</strong>
                            <p>{note.body && (note.body.substr(0, 15) + "...") }</p>
                        <div className='buttons'>
                            <button onClick={() => handleViewNote(note)}  className='pointer bg-blue f6 link dim br4 ph1 pv1 mb3 dib white'>✎</button>
                            <button onClick={() => deleteNote(note.id)} className='pointer bg-red f7 link dim br4 ph1 pv1 mb3 dib white'>Delete</button>
                        </div>
                        </div>
                        <small className=' i '>last modified {new Date(note.lastModified).toLocaleDateString('en-GB', {
                            hour: "2-digit",
                            minute: '2-digit'
                        } )} </small>
                </div>
                ))}
            </div>
        </div>
    );
}
export default HomePage;