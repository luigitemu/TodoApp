import React from 'react'
import "./Content.css"

export const Content = () => {
  return (
    <div id='content'>
        <div className='note-name'>Pitch Video</div>
        <div className='note-container-list'>
            <div className='note-pending'>
                <div className="title">Pending</div>
                <div className="list">
                  <div>Animated</div>
                  <div>User story</div>
                  <div>Animate video</div>
                </div>
            </div>
            <div className='note-completed'>
                <div className="title">Completed</div>
                <div className="list">
                  <div>Finalize story board</div>
                  <div>Taking heads</div>
                  <div>Final cut</div>
                  <div>Ask Ana for feedback</div>
                  <div>Create thumbnail</div>
                  <div>publish to youtube</div>
                  <div>Finalize story board</div>
                  <div>Finalize story board</div>
                </div>
            </div>
        </div>
    </div>
  )
}
