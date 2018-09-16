import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home/Home.jsx'
const Main = (props) => {
    return (
        <div id='main'>
            <div className='wrapper'>
                <Route exact path='/' render={()=>
                    <Home />
                }/>
            </div>
        </div>
    )
}

export default Main