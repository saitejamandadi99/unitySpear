import {Component} from 'react'
import './index.css'

import Header from '../Header'

class Home extends Component{
    render(){
        return(
            <div><Header />
            <h1>welcome to home page shouldComponentUpdate</h1></div>
            
        )
    }
}

export default Home