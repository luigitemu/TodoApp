import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { IoIosAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import "./Content.css";
import { RootState } from "../../reducers/rootReducer";
import noImage from "../../assets/noimage.jpg";
import { startUpdatingNote, setActiveTodo } from "../../action/notes";
import { EditableInput } from "../EditableInput";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { CustomModal } from "../modal/CustomModal";
import { CustomDrawer } from "../custon-drawer/CustomDrawer";

export const Content = () => {
    const { activeNote, activeTodo } = useSelector(
        (state: RootState) => state.notes
    );
    const [title, setTitle] = useState(activeNote?.title);
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    const [isDrawerOpen, setDrawerIsOpen] = useState(false)
    const toggleDrawer = () => {
        setDrawerIsOpen((prevState) => !prevState)
    }

    const dispatch = useDispatch();

    const handleOnChange = (e: any): void => {
        const { id } = e.target;

        const newNote = activeNote!;
        newNote.todos = newNote.todos.map((todo) =>
            todo._id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        dispatch(startUpdatingNote(newNote._id!, newNote));
    };
    const handleAddTodo = (): void => {
        const newTodo = { isDone: false, name: "new todo" };
        const newNote = activeNote!;
        newNote.todos = [...newNote.todos, newTodo];
        dispatch(startUpdatingNote(newNote._id!, newNote));
    };

    const handleEditTitle = (e: any) => {
        const title = e.target.value;
        if (title === "") return;
        const newNote = activeNote!;
        newNote.title = title;
        dispatch(startUpdatingNote(newNote._id!, newNote));
    };
    const handleDeleteTodo = (id: string) => {
        const noteUpdate = activeNote!;
        noteUpdate.todos = noteUpdate.todos.filter((todo) => todo._id !== id);
        dispatch(startUpdatingNote(noteUpdate._id!, noteUpdate));
    };

    const handleEditTodo = (todo: any) => {
        setIsOpen(true);
        dispatch(setActiveTodo(todo));
    };
    // const handleClickButton = (e: any ) => { 
    //     toggleDrawer()
    //  }

    const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    if (!activeNote) {
        return (
            <div className='no-data-container'>
                <span className='no-data-title'>
                    Select a note from the sidebar to start working!
                </span>
                <img src={noImage} className='no-data-img' />
                <div className="floating-container FAB" onClick={toggleDrawer}>
                <div className="floating-button"> <GiHamburgerMenu/> </div>
                <div className="element-container">
                </div>
            </div>
            <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
            </div>
        );
    }
    return (
        <main id='content'>
            <div className="floating-container FAB" onClick={toggleDrawer}>
                <div className="floating-button"><GiHamburgerMenu/></div>
                <div className="element-container">
                <CustomDrawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer}/>
                </div>
            </div>
            <div>
                <span style={{ display: "flex", flexDirection: "row" }}>
                    <EditableInput
                        text={activeNote.title}
                        type={"div"}
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
                    {/* <MdModeEdit style={{ marginTop: 5 }} /> */}
                </span>
            </div>
            <hr className='content__divider' />
            <br />
            <div className='content__note-list-container'>
                <div>
                    <div className='content__note-list-header'>
                        <div className='content__note-list-title'>Pending</div>
                        {/* <div className="content__note-list-title">Pending</div> */}
                        <button onClick={handleAddTodo}>
                            {" "}
                            <IoIosAdd />
                            {" "}
                        </button>
                    </div>

                    <div className='content__note-list-colum'>
                        {activeNote.todos.length === 0 && (
                            <>
                                <h4>Add a new Note</h4>
                            </>
                        )}
                        {activeNote?.todos
                            .filter((todo) => !todo.isDone)
                            .map((todo, idx) => (
                                <div
                                    className='content__note-list-item'
                                    key={`${todo.name}-${idx}`}
                                >
                                    <div className='note-list-text' >
                                        <input
                                            type='checkbox'
                                            checked={todo.isDone}
                                            onChange={handleOnChange}
                                            name={todo._id}
                                            id={todo._id}
                                            className='content__todo-check'
                                        />
                                        <label htmlFor={todo._id}>{todo.name}</label>
                                    </div>
                                    <div className='content__note-list-buttons'>
                                        <button
                                            className='button__delete'
                                            onClick={() => handleDeleteTodo(todo._id)}
                                        >
                                            {" "}
                                            <AiOutlineDelete className="btn-font-size" />
                                            {" "}
                                        </button>
                                        <button
                                            className='button__edit'
                                            onClick={() => handleEditTodo(todo)}
                                        >
                                            <AiOutlineEdit className="btn-font-size" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <div>
                    <div className='content__note-list-title'>Completed</div>
                    <div className='content__note-list-colum'>
                        { activeNote?.todos
                            .filter((todo) => todo.isDone)
                            .map((todo, idx) => (
                                <div
                                className='content__note-list-item'
                                key={`${todo.name}-${idx}`}
                            >
                                <div className='note-list-text' onClick={handleOnChange}>
                                    <input
                                        type='checkbox'
                                        defaultChecked={todo.isDone}
                                        // onChange={handleOnChange}
                                        name={todo._id}
                                        id={todo._id}
                                        className='content__todo-check'
                                    />
                                    <label htmlFor={todo._id}>{todo.name}</label>
                                </div>
                                <div className='content__note-list-buttons'>
                                    <button
                                        className='button__delete'
                                        onClick={() => handleDeleteTodo(todo._id)}
                                    >
                                        {" "}
                                        <AiOutlineDelete className="btn-font-size" />
                                        {" "}
                                    </button>
                                    <button
                                        className='button__edit'
                                        onClick={() => handleEditTodo(todo)}
                                    >
                                        <AiOutlineEdit className="btn-font-size" />
                                    </button>
                                </div>
                            </div>
                            ))}
                    </div>
                </div>
            </div>
            <CustomModal
                isOpen={modalIsOpen}
                closeModal={setIsOpen}
                title={activeTodo?.title}
            />
        </main>
    );
};
