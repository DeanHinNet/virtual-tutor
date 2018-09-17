import React from 'react'

const Slide = () => (
    <div>
        <video id='slide-video' loop autoPlay>
            <source src='./assets/vids/campus1.mp4' type='video/mp4' />
            Your browser does not support the video tag.
        </video>
        <div id='slide-content'>
            <h1>Heading</h1>
            <p>Lorem ipsum...</p>
        </div>
    </div>
  
)

export default Slide

/*
<div id='slide'>
        <h1></h1>
    </div>
*/