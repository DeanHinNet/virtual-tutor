import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, browserHistory} from 'react-router-dom';

import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user:{}
        }
    }
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }

}

ReactDOM.render((
    <BrowserRouter history={browserHistory}>
        <App />
    </BrowserRouter>
), document.getElementById('app'));