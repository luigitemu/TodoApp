import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import {IoIosAdd } from 'react-icons/io'
import {MdModeEdit } from 'react-icons/md'

import "./Content.css"
import { RootState } from '../../reducers/rootReducer';
import { startUpdatingNote, setActiveTodo } from '../../action/notes';
import { EditableInput } from '../EditableInput';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { CustomModal } from '../modal/CustomModal';

export const Content = () => {
  const {activeNote, activeTodo} = useSelector( (state:RootState) => state.notes);
  const [title, setTitle] = useState(activeNote?.title);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  
  const dispatch = useDispatch();

  const handleOnChange = (e: any ) : void => {
    const {id } = e.target;
    
    const newNote = activeNote!;
    newNote.todos = newNote.todos.map(todo => todo._id === id ? {...todo, isDone: !todo.isDone}: todo );
    dispatch(startUpdatingNote(newNote._id!, newNote));
  
    }
  const handleAddTodo = ():void => { 
    const newTodo = {isDone: false, name:'new todo' };
    const newNote = activeNote!;
    newNote.todos =  [...newNote.todos , newTodo ];
    dispatch(startUpdatingNote(newNote._id!, newNote));
   }

  const handleEditTitle = (e:any) => {
     const title = e.target.value; 
     if(title === '') return ;
     const newNote = activeNote!;
     newNote.title = title;
     dispatch(startUpdatingNote(newNote._id!, newNote))
    }
  const handleDeleteTodo = (id: string) => { 
      const noteUpdate = activeNote!
      console.log(noteUpdate.todos)
      noteUpdate.todos = noteUpdate.todos.filter(todo => todo._id !== id   );
      dispatch(startUpdatingNote(noteUpdate._id!, noteUpdate)) 
      

    }

  const handleEditTodo = (todo:any )=>{
    setIsOpen(true);
    dispatch(setActiveTodo(todo))
  }

    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  
   if(!activeNote){
     return(
     <>
      <img src='../../assets/noimage.jpg' />
     </>)
   }
  return (
    <main id='content'>
          <div>
            <span style={{ display: 'flex', flexDirection:'row' }}>
              <EditableInput
                text={activeNote.title} 
                type={'div'} 
                placeholder={title!}
                className='content__note-title'         
                childRef={inputRef}
                >
              <input 
              ref={inputRef} 
              className='content__note-title-input' 
              type='text' 
              value={title} 
              onBlur={handleEditTitle}
              ></input>     

              </EditableInput>
              <MdModeEdit style={{ marginTop: 5 }}/>
            </span>
          </div>
          <hr className='content__divider' />
          <br />
        <div className='content__note-list-container'>
            <div>
              <div className='content__note-list-header'>
                <div className="content__note-list-title">Pending</div>
                {/* <div className="content__note-list-title">Pending</div>
                 */}
                 <button onClick={handleAddTodo}> <IoIosAdd/> </button>
              </div>
              
                <div className='content__note-list-colum'>
                {activeNote.todos.length === 0 && 
                <>
                  <h4>Add a new Note</h4>
                </>}
                  {activeNote?.todos.filter(todo => !todo.isDone).map((todo, idx)=>(
                  <div className="content__note-list-item" key={`${todo.name}-${idx}`}>

                    <input type="checkbox" checked={todo.isDone} onChange={handleOnChange}  name={todo._id} id={todo._id} className='content__todo-check' />
                    <label htmlFor={todo._id}>{todo.name}</label>
                    <div className='content__note-list-buttons'>
                      <button 
                      className='button__delete' 
                      onClick={()=>handleDeleteTodo(todo._id)}
                      > <AiOutlineDelete/> </button>
                      <button 
                      className='button__edit' 
                      onClick={()=>handleEditTodo(todo)}
                      > <AiOutlineEdit/> </button>

                    </div>
                    
                  </div>
                  ))}

                </div>
            </div>
            <div>
                <div className="content__note-list-title">Completed</div>
                <div className='content__note-list-colum'>
                {activeNote?.todos.filter(todo => todo.isDone).map(todo=>(
                  <div className="content__note-list-item" key={todo._id}>
                    <input type="checkbox" checked={todo.isDone}  name={todo._id} id={todo._id} onChange={handleOnChange} className='content__todo-check' />
                    
                    <label htmlFor={todo._id}>{todo.name}</label>
                  </div>
                  ))}
                </div>
            </div>
        </div>
        <CustomModal isOpen={modalIsOpen} closeModal={setIsOpen} title={activeTodo?.title} />
    </main>
  )
}
