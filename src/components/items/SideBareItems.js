import { Avatar } from '@mui/material'
import React from 'react'
import './SideBareItem.css'

const SideBareItems = (props) => {
  return (
    <div className='sidebare__item'>
        <img src={props.img}/>
        <p>{props.title}</p>
    </div>
  )
}

export default SideBareItems