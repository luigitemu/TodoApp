
export interface Note  { 
    _id?: string;
    user:string;
    title:string;
    todos: Array<any>
}

interface NoteState {
    notes: Array<Note> | [];
    activeNote: Note | null;
    activeTodo: any | null;
}

const initialState: NoteState = {
    notes: [],
    activeNote: null,
    activeTodo: null
}

type noteType = {type: 'loadNotes', payload: [] }|
                {type: 'setActiveNote', payload: Note}|
                {type: 'setActiveTodo', payload: any}|
                {type: 'addNewNote', payload: Note}|
                {type: 'updateNote', payload: Note}|
                {type: 'deleteNote', payload: string}



export const noteReducer = ( state = initialState, action : noteType ) : NoteState =>{
    switch (action.type) {
        case 'loadNotes':
            return {
                ...state,
                notes: [...action.payload]
            }
        case 'setActiveNote':
            return {
                ...state,
                activeNote: {...action.payload}
            }
        case 'setActiveTodo':
            return {
                ...state,
                activeTodo: {...action.payload}
            }
        case 'addNewNote':
            return {
                ...state,
                notes:[...state.notes, action.payload ]
            }
        case 'updateNote':
            return {
                ...state,
                notes: state.notes.map( n => n._id === action.payload._id ? action.payload : n )
            }
        case 'deleteNote':
            return {
                ...state,
                notes:state.notes.filter(n => n._id !== action.payload) 
            }
        default: 
            return state;
    }
}