import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlineFileAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';

import "./Sidebar.css";

import { Note } from "../../reducers/noteReducer";
import { RootState } from '../../reducers/rootReducer';
import { startLogOut } from "../../action/auth";
import { setActiveNote, startAddingNewNote, startDeletingNote } from '../../action/notes';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const {notes, activeNote} = useSelector( (state:RootState) => state.notes)
  const { user} = useSelector( (state:RootState) => state.auth)
  
  const handleLogout = () => {
    dispatch(startLogOut());
  };
  const handleClick = (note: Note ) => {
    dispatch(setActiveNote(note));
  }
  

  const handleAdd = () => { 
    const newNote: Note= {
      user: user!.uid,
      title: 'New Note',
      todos: []
    }
    dispatch(startAddingNewNote(newNote));
   }
  const handleDelete = (id:string  ) => { 
    dispatch(startDeletingNote(id));
   }

  return (
    <aside id='sidebar'>
      
      <div id='notes-list' className='sidebar__notes-list'>
        
        {notes.map( note => (
          <div className='sidebar__note-item' key={note._id} onClick={()=>handleClick(note)} >
            <div className='sidebar__note-item-name'>{note.title}</div>
            
            <div className='sidebar__note-item-icon'>
              <button 
              onClick={()=>handleDelete(note._id!)}
              >
                <AiOutlineDelete />
              </button>
           </div>
          </div>
        ))}
        
        {/* <div className='sidebar__note-item'>
          <div className='sidebar__note-item-name'>Cosas por hacer</div>
          <div className='sidebar__note-item-icon'>
            <IoOpenOutline />
          </div>
        </div>
        <div className='sidebar__note-item'>
          <div className='sidebar__note-item-name'>Lista de compras</div>
          <div className='sidebar__note-item-icon'>
            <IoOpenOutline />
          </div>
        </div>
        <div className='sidebar__note-item'>
          <div className='sidebar__note-item-name'>Materias por aprobar el siguiente semestre</div>
          <div className='sidebar__note-item-icon'>
            <IoOpenOutline />
          </div>
        </div>
        <div className='sidebar__note-item'>
          <div className='sidebar__note-item-name'>Proyecto TODO-List</div>
          <div className='sidebar__note-item-sidebar__note-item-icon'>
            <IoOpenOutline />
          </div>
        </div>
        <div className='sidebar__note-item'>
          <div className='sidebar__note-item-name'>Pitch video</div>
          <div className='sidebar__note-item-icon'>
            <IoOpenOutline />
          </div>
        </div> */}

      <button className='sidebar__logout-button' style={{bottom:55}} onClick={handleAdd}>
          <span className='sidebar__logout-label'>New Note</span>
          <AiOutlineFileAdd />
      </button> 
        <button className='sidebar__logout-button' onClick={handleLogout}>
          <span className='sidebar__logout-label'>Logout</span>
          <FiLogOut />
        </button>
      </div>
    </aside>
  );
};
