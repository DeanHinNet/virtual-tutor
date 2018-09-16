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
            user:{},
            navCss: 'hide'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e){
        if(window.scrollY > 195) {
            console.log('setting')
            this.setState({
                navCss: 'show'
            })
        } else {
            this.setState({
                navCss: 'hide'
            })
        }
    }
    render() {
        return (
            <div id='wrapper'>
                <Header navCss={this.state.navCss} />
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