import Image from '../Image/Image'
import './PostInteraction.css'
import React from 'react'

function PostInteraction() {
  return (
    <div className='postInteractions'>
      <div className='interactionIcons'>
        <Image path="/general/react.svg" alt="react"/>
        23
        <Image path="/general/share.svg" alt="share"/>
        <Image path="/general/more.svg"  alt="more"/>
      </div>
      <button>Save</button>
    </div>
  )
}

export default PostInteraction