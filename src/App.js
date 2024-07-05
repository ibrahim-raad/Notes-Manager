import React from 'react';
import { connect } from 'react-redux';
import uuid from'react-uuid';
import HomePage from './components/Home/home';
import Modal from './components/Modal/modal';
import Note from './components/Note/note';
import { addNote, deleteNote, updateNote, setActiveNote, toggleModal } from './redux/actions';




const App = ({ isNoteOpen, notes, activeNote, addNote, deleteNote, setActiveNote, toggleModal, updateNote }) => {


  const handleAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      body: '',
      lastModified: Date.now()
    };
    addNote(newNote);
  };
  
 

  
  const handleViewNote = (note) => {
    setActiveNote(note);
  };
  




  return (
    <>
    { !isNoteOpen && 
    <HomePage 
     notes={notes} 
     addNote={handleAddNote}
      deleteNote={deleteNote}
      handleViewNote={handleViewNote}
      />}
    
   {isNoteOpen && 
   <Modal>
    <Note 
     toggleModal={toggleModal}
     activeNote={activeNote}
     onUpdateNote={updateNote}
      />
   </Modal>
   }
    </>
    
  )
}

const mapStateToProps = (state) => ({
  isNoteOpen: state.isNoteOpen,
  notes: state.notes,
  activeNote: state.activeNote
});

const mapDispatchToProps = {
  addNote,
  deleteNote,
  updateNote,
  setActiveNote,
  toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
