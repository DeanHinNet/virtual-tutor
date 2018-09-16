import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home/Home.jsx'
const Main = (props) => {
    return (
        <main>
            <Route exact path='/' render={()=>
                <Home />
            }/>
        </main>
    )
}

export default Main