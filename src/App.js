import React, { useState } from 'react'
import './App.css'

export default function App() {

  const [video,setvideo]=useState()

  function handle_input(e){
    setvideo(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <>
    <input type="file"  onChange={handle_input}/>
    <iframe className='video_frame' src={video} frameborder="10"></iframe>
    </>
  )
}
