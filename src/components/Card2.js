import React, {Component} from 'react'
import Card3 from './Card3'
import Home_2 from './Home_2'

class Card2 extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : true
        }
    }
    
    render(){
        const {isLoggedIn} =this.state
        let element;
        // if(isLoggedIn){
        //     element = <Home_2/>
        // }
        // else{
        //     element = <Card3 />
        // }
        element = isLoggedIn ? <Home_2/>:<Card3 />
        return (
        <div>
            <h1>{element}</h1>
        </div>
        )
    }


}
export default Card2;