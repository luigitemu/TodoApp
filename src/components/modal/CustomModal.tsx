import React, { useState } from 'react'
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducers/rootReducer';
import { startUpdatingNote } from '../../action/notes';

import "./CustomModal.css"
import { AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

interface Props{
     isOpen: boolean; 
     closeModal:  (value: boolean)=>void; 
     title: string | null 
}

export const CustomModal = ({isOpen , closeModal , title} :Props ) => {
    const {activeNote,activeTodo} = useSelector((state:RootState)=>state.notes);
    const dispatch = useDispatch()
        // Modal
    Modal.setAppElement('#root');
    const customStyles = {
        content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'350px',
        height:'180px',
        border: 0,
        boxShadow: '0 0 11px rgba(48, 48, 48, 0.2)' 
        }
    };

    const handleSubmit = (e:React.SyntheticEvent) => { 
        e.preventDefault();
        const target = e.target as typeof e.target & {name: { value: string };};
        const name = target.name.value;
        if (name === '') return;
        const newTodo = activeTodo; 
        newTodo.name = name;
        console.log(newTodo)
        const updateNote = activeNote!;
        updateNote.todos = updateNote.todos.map( todo => todo._id === newTodo._id? newTodo : todo);
        dispatch(startUpdatingNote(updateNote._id!, updateNote))
        closeModal(false);
     }
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={ ()=>closeModal(false)}
    style={customStyles}
  >
      <div className='modal__update-close' onClick={()=>closeModal(false)}><AiOutlineClose/></div>
    <div className='modal__update-title' style={{marginBottom: 5}} >Update TODO</div>
    <hr />
    <form onSubmit={handleSubmit} className="modal__update-form">
      <input className='modal__update-form-input' name='name' defaultValue={title || ''} />
      <button className='modal__update-form-button'> 
        <span>
          Update  
        </span>  
        <AiOutlineEdit/>
        </button>
    </form>
    </Modal>
  )
}
