import React, { useRef, useState } from 'react';
import CTE from "react-click-to-edit";
import { useSelector, useDispatch } from 'react-redux';
import {IoIosAdd } from 'react-icons/io'
import {MdModeEdit } from 'react-icons/md'

import "./Content.css"
import { RootState } from '../../reducers/rootReducer';
import { startUpdatingNote } from '../../action/notes';
import { EditableInput } from '../EditableInput';

export const Content = () => {
  const {activeNote} = useSelector( (state:RootState) => state.notes);
  const [title, setTitle] = useState(activeNote?.title)
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
    const inputRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  
   if(!activeNote){
     return( <h1> Select a Note</h1>)
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
                  {activeNote?.todos.filter(todo => !todo.isDone).map((todo, idx)=>(
                  <div className="content__note-list-item" key={`${todo.name}-${idx}`}>

                    <input type="checkbox" checked={todo.isDone} onChange={handleOnChange}  name={todo._id} id={todo._id} className='content__todo-check' />
                    <label htmlFor={todo._id}>{todo.name}</label>
                    
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
    </main>
  )
}
