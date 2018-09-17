import React from 'react'
import { subscribeToTimer } from './../../api.js';

class Whiteboard extends React.Component {
    constructor(props){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className='header-buff lesson-board'>
                Whiteboard
                <canvas className="whiteboard" ></canvas>
                <div className="colors">
                    <div className="color black"></div>
                    <div className="color red"></div>
                    <div className="color green"></div>
                    <div className="color blue"></div>
                    <div className="color yellow"></div>
                </div>
            </div>
        )
    }
}

export default Whiteboard