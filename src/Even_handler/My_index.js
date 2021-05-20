import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default class My_index extends Component {
    constructor() {
        super()
    
      
        this.state={
            login:false
        }
    }
     
    
    render() {
        if(this.state.login === true){
            return <h1>kamal</h1>
        }

        else{
            return <h1>Manik</h1>
        }   
               
            
        
    }
}
