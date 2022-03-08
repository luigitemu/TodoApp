import React from "react";
import { useDispatch } from "react-redux";
import { IoOpenOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { startLogOut } from "../../action/auth";
import "./Sidebar.css";
export const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogOut());
  };
  return (
    <aside id='sidebar'>
      <div id='notes-list' className='sidebar__notes-list'>
        <div className='sidebar__note-item'>
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
        </div>

        <button className='sidebar__logout-button' onClick={handleLogout}>
          <span className='sidebar__logout-label'>logout</span>
          <FiLogOut />
        </button>
      </div>
    </aside>
  );
};
