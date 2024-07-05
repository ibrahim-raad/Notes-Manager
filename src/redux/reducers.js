import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE, SET_ACTIVE_NOTE, TOGGLE_MODAL } from "./actions";

const initalState = {
    notes: JSON.parse(localStorage.notes || []),
    activeNote: false,
    isNoteOpen: false
}

 const rootReducer = (state=initalState, action={}) => {
    switch(action.type) {
        case ADD_NOTE :
            const newNotes = [...state.notes, action.payload];
            localStorage.setItem('notes', JSON.stringify(newNotes));
            return {
                ...state,
                notes: newNotes,
                activeNote: action.payload,
                isNoteOpen: true
            };
        case DELETE_NOTE: 
            const filteredNotes = state.notes.filter(note => note.id !== action.payload);
            localStorage.setItem('notes', JSON.stringify(filteredNotes));
            return {
                ...state,
                notes: filteredNotes
            };
        case UPDATE_NOTE:
                const updatedNotesArray = state.notes.map(note =>
                    note.id === state.activeNote.id ? action.payload : note
                );
                localStorage.setItem('notes', JSON.stringify(updatedNotesArray));
                return {
                    ...state,
                    notes: updatedNotesArray,
                    activeNote: action.payload
                };
        case SET_ACTIVE_NOTE:
                return {
                    ...state,
                    activeNote: action.payload,
                    isNoteOpen: true
                };
        case TOGGLE_MODAL:
                return {
                    ...state,
                    isNoteOpen: !state.isNoteOpen
                };
        default:
                return state;
            
    }
}

export default rootReducer;