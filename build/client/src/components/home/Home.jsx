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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nibh elit, finibus eget ipsum nec, egestas rutrum magna. Suspendisse sed justo nisl. Sed luctus ut metus in ultrices. Vivamus id finibus erat. Donec vitae dolor eget orci lacinia imperdiet. Donec semper condimentum elementum. Nullam nec est et sem euismod placerat. Vivamus quis laoreet arcu. Pellentesque tristique magna ut tristique suscipit.
                </div>
            </div>
            <div className='grey'>
                <div className='wrapper'>
                Aenean nec pretium magna. Pellentesque posuere magna vel tortor gravida, et posuere erat imperdiet. Suspendisse laoreet venenatis tellus, sit amet interdum sapien fringilla quis. Proin eget volutpat ante, eu pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tristique commodo urna quis dignissim. Nunc ut facilisis ipsum. Quisque placerat laoreet nibh in convallis.
                </div>
            </div>
            <div className='white'>
                <div className='wrapper'>
                Mauris aliquet est hendrerit, cursus ante non, iaculis elit. In viverra velit ut augue egestas vehicula. Nam laoreet rhoncus libero, at facilisis sem porta sit amet. Donec at velit felis. Vivamus blandit ante eget nulla ullamcorper, lacinia lobortis turpis venenatis. Nunc vitae urna ut velit facilisis semper eget sit amet dolor. Duis venenatis velit nisl, et ultricies ante venenatis vitae. Quisque ut enim pretium, laoreet nulla tempor, molestie velit. Praesent convallis accumsan vulputate. Cras metus ipsum, pretium sit amet interdum non, ultrices sed felis. Pellentesque laoreet ex ut interdum fringilla. In eu mattis orci.
                </div>
            </div>
            <div className='grey'>
                <div className='wrapper'>
                Vivamus fermentum purus eu odio luctus elementum. Cras elementum diam et risus rhoncus, sit amet egestas urna sagittis. Vivamus et laoreet nisi. Cras dignissim mi eu massa placerat vestibulum. Sed nec dictum risus. Sed gravida ante sit amet massa euismod, vitae rhoncus enim malesuada. Quisque non libero ut diam sodales posuere eget in arcu. Quisque vestibulum rutrum efficitur. Duis tincidunt felis quis arcu sollicitudin eleifend. Aliquam vestibulum nulla leo.
                </div>
            </div>
            <div className='white'>
                <div className='wrapper'>
                Ut scelerisque dui at justo tempus rutrum. Vivamus commodo, nunc eu mollis maximus, velit sapien bibendum elit, non lacinia magna turpis id urna. Fusce fringilla purus augue. Quisque ut arcu efficitur, efficitur sem in, luctus purus. Nulla ultricies nibh sit amet eros vehicula aliquam. Quisque feugiat finibus neque eget viverra. Sed convallis diam eleifend egestas luctus. Donec ut ipsum sed risus semper accumsan. Aenean feugiat dui in lorem eleifend scelerisque. 
                </div>
            </div>
        </div>
    )
}

export default Home