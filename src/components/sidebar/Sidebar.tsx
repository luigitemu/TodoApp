import React from 'react'
import "./Sidebar.css"
export const Sidebar = () => {
  return (
    <div id='sidebar'>
    <div id='notes-list'>
        <div className='note-item'>
            <div className='icon'></div>
            <div className='note-name'>Cosas por hacer</div>
        </div>
        <div className='note-item'>
            <div className='icon'></div>
            <div className='note-name'>Lista de compras</div>
        </div>
        <div className='note-item'>
            <div className='icon'></div>
            <div className='note-name'>Materias por aprobar</div>
        </div>
        <div className='note-item'>
            <div className='icon'></div>
            <div className='note-name'>Proyecto TODO-List</div>
        </div>
        <div className='note-item'>
            <div className='icon'></div>
            <div className='note-name'>Pitch video</div>
        </div>
    </div>
</div>
  )
}
