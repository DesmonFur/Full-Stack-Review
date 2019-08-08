import React, { Component } from 'react'
import './Landing.css'
export class Landing extends Component {
    state = {
        usernameInput: ' ',
        emailInput: ' ',
        passwordInput: ''
    }
    render() {
        return (
            <div className='Landing'>
                Landing
            </div>
        )
    }
}

export default Landing
