import { Avatar } from '@mui/material'
import React from 'react'
import './StoryItems.css'

const StoryItems = (props) => {
  return (
    <div className='storyitems'>
        <div className="storyitems__all">
            <img src={props.img} />
            <p>{props.title}</p>
      </div>
    </div>
  )
}

export default StoryItems