import React from 'react'
import SearchBox from './SearchBox.jsx'

const Home = (props) => {
    return (
        <div>
            <video id='slide-video' loop autoPlay muted>
                <source src='./assets/vids/campus1.mp4' type='video/mp4' />
                Your browser does not support the video tag.
            </video>
            <div id='slide-content'>
                <h1>Achieve more</h1>
                <p>Find your tutor now!</p>
                <SearchBox />
            </div>
            <div className='white'>
                <div className='wrapper'>
                    <h1>Why use us?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lacinia eros. Aenean porta ultricies velit id molestie. Vestibulum ac neque semper erat fermentum pretium vitae sit amet diam.</p>
                </div>
            </div>
            <div className='grey'>
                <div className='wrapper'>
                    <h1>What students say about our tutors</h1>
                    <p>Integer semper urna sed ligula congue, vel rutrum justo vestibulum. Mauris imperdiet odio eu ligula elementum efficitur sit amet sed neque. Maecenas lacinia ac arcu eu varius. Suspendisse id arcu rutrum, consectetur nisl ut, consequat quam. </p>
                </div>
            </div>
            <div className='white'>
                <div className='wrapper'>
                    <h1>As seen in</h1>
                    <p>Fusce elementum, nisi in molestie mattis, tellus tortor malesuada augue, a venenatis libero tortor vel augue. Aenean quis gravida diam, eu tincidunt nisl. Etiam dictum libero non nisi sollicitudin, vitae suscipit massa pretium.</p>
                </div>
            </div>
            <div className='grey'>
                <div className='wrapper'>
                    <h1>Find online tutors in any subject</h1>
                    <p>Maecenas sem arcu, aliquam quis risus consectetur, porttitor commodo ligula. Nunc rutrum a ante id condimentum. Maecenas eget est aliquam, suscipit mauris ut, faucibus nibh. Proin sagittis tempus dui non feugiat.</p>
                </div>
            </div>
        </div>
    )
}

export default Home