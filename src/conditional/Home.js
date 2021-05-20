import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
                <h1>This is Home page</h1>
            </div>
        )
    }
}

export default Home








import React, { Component } from 'react'
import Login_page from './Login_page';
import Home from './Home'

export class home_index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    render() {
        if(this.state.isLoggedIn){
            return <Home/>
        }
        else{
            return <Login_page/>
        }

    
    }
}

export default home_index;