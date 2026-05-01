import React from 'react'
import './message.css'

function Message() {
  return (
    <div className='message'>

        <h2 className='message-title'>Message me</h2>
           <h4 className='message-subtitle'>Whether you have a question, a project idea, or just want to say hello, my inbox is always open.</h4>
           <a href="mailto:123101075@nitkkr.ac.in" className='message-link'>mail id: 123101075@nitkkr.ac.in</a>
          
       <button className='message-btn'>send</button>
    </div>
  )
}

export default Message
