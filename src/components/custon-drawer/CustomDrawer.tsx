import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineFileAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import Drawer from "react-modern-drawer";
import { useSelector, useDispatch } from "react-redux";
import { startLogOut } from "../../action/auth";
import { setActiveNote, startAddingNewNote, startDeletingNote } from "../../action/notes";
import { Note } from "../../reducers/noteReducer";
import { RootState } from "../../reducers/rootReducer";

export const CustomDrawer = ({
  isDrawerOpen,
  toggleDrawer,
}: {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}) => {
  const { notes } = useSelector((state: RootState) => state.notes);
  const { user} = useSelector( (state:RootState) => state.auth)
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogOut());
  };
  const handleAdd = () => { 
    const newNote: Note= {
      user: user!.uid,
      title: 'New Note',
      todos: []
    }
    dispatch(startAddingNewNote(newNote));
   }
  const handleClick = (note: Note) => {
    dispatch(setActiveNote(note));
  };

  const handleDelete = (id: string) => {
    dispatch(startDeletingNote(id));
  };
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer}
      direction='right'
      className='bla bla bla'
    >
      {notes.map((note) => (
        <div
          className='sidebar__note-item'
          key={note._id}
          onClick={() => handleClick(note)}
        >
          <div className='sidebar__note-item-name'>{note.title}</div>

          <div className='sidebar__note-item-icon'>
            <button onClick={() => handleDelete(note._id!)}>
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      ))}
      <button
        className='sidebar__logout-button'
        style={{ bottom: 55 }}
        onClick={handleAdd}
      >
        <span className='sidebar__logout-label'>New Note</span>
        <AiOutlineFileAdd />
      </button>
      <button className='sidebar__logout-button' onClick={handleLogout}>
        <span className='sidebar__logout-label'>Logout</span>
        <FiLogOut />
      </button>
    </Drawer>
  );
};
