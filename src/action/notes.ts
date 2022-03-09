import { fetchWithToken } from "../helpers/fetch"
import { Note } from "../reducers/noteReducer";
import { RootState } from '../reducers/rootReducer';


export const startLoadingNotes = ()=> {
    return  async (dispatch: any, getState:()=>RootState  )=>{
        const id = getState().auth.user?.uid
        try {
            const resp = await fetchWithToken(`note/${id}`,{});
            const body = await resp.json();
            if(resp.ok){
                dispatch(loadNotes(body.notes))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const startAddingNewNote = (note: Note) => { 
    return async(dispatch:any) => {
        try {
            const resp = await fetchWithToken('note',{...note},'POST');
            const body = await resp.json();
            if(resp.ok){
                dispatch(addNewNote(body.note))
            }else{
                console.error(body);
            }
        } catch (error) {
            
        }
     }
 }

 export const startUpdatingNote = (id: string, note: Note) => {
    return async (dispatch: any) => {
        try {
            const resp = await fetchWithToken(`note/${id}`, {...note}, 'PUT');
            const body = await resp.json();
            if(resp.ok) {
                dispatch(updateNote(body.note))
            }
        } catch (error) {
            console.log(error);
        }

    }
 }


 
 export const startDeletingNote = (id:string ) => {
     return async (dispatch:any) => {
         try {
             const resp = await fetchWithToken(`note/${id}`,{},'DELETE')
             const body = await resp.json();
             if(resp.ok) { 
                 dispatch(deleteNote(body.note._id))
            }else{
                console.log(body);
            }
         } catch (error) {
             console.log(error)
         }
        }
 }

 
 export const setActiveNote = (note: Note )=>({ type: 'setActiveNote', payload: note})
 
 const loadNotes = (notes: [] ) => ({type: 'loadNotes', payload: notes })
 
 const addNewNote = (note: Note) => ({type:'addNewNote', payload: note  });

 const updateNote = (note:Note) => ({type:'updateNote', payload: note})

 const deleteNote = (id: string) => ({type: 'deleteNote', payload: id})