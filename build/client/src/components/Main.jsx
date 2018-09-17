import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home/Home.jsx'
import Whiteboard from './lessons/Whiteboard.jsx'
const Main = (props) => {
    return (
        <div id='main'>
            <Route exact path='/' render={()=>
                <Home />
            }/>
             <Route exact path='/how' render={()=>
                <Whiteboard />
            }/>
        </div>
    )
}

export default Main