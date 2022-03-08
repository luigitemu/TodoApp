import React from 'react'
import "./Content.css"

export const Content = () => {
  return (
    <main id='content'>
        <div className='content__note-title'>Pitch Video</div>
        <div className='content__note-list-container'>
            <div>
                <div className="content__note-list-title">Pending</div>
                <div className='content__note-list-colum'>
                  <div className="content__note-list-item">
                    <input type="checkbox" name="b-1" id="b-1" className='content__todo-check' />
                    <label htmlFor="b-1">Animated</label>
                  </div>
                  <div className="content__note-list-item">
                    <input type="checkbox" name="b-2" id="b-2" className='content__todo-check' />
                    <label htmlFor="b-2">User story</label>
                  </div>
                  <div className="content__note-list-item">
                    <input type="checkbox" name="b-3" id="b-3" className='content__todo-check' />
                    <label htmlFor="b-3">Animate video</label>
                  </div>
                </div>
            </div>
            <div>
                <div className="content__note-list-title">Completed</div>
                <div className='content__note-list-colum'>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-1" id="a-1" />
                    <label htmlFor='a-1'>Finalize story board</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-2" id="a-2" />
                    <label htmlFor='a-2'>Taking heads</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-3" id="a-3" />
                    <label htmlFor='a-3'>Final cut</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-4" id="a-4" />
                    <label htmlFor='a-4'>Ask Ana for feedback</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-5" id="a-5" />
                    <label htmlFor='a-5'>Create thumbnail</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-6" id="a-6" />
                    <label htmlFor='a-6'>publish to youtube</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-7" id="a-7" />
                    <label htmlFor='a-7'>Finalize story board</label>
                  </div>
                  <div className='content__note-list-item'>
                    <input type="checkbox" name="a-8" id="a-8" />
                    <label htmlFor='a-8'>Finalize story board</label>
                  </div>
                </div>
            </div>
        </div>
    </main>
  )
}
