import React from 'react'

class SearchBox extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <input id='searchbox' placeholder='Search for subjects and tutors.' />
            </div>
        )
    }
} 

export default SearchBox

/*
<div id='slide'>
        <h1></h1>
    </div>
*/