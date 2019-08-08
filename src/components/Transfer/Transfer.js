import React, { Component } from 'react'
import './Transfer.css'
export class Transfer extends Component {
    state = {
        account: '',
        ammount: '',
        transactionType: ''
    }
    render() {
        return (
            <div className='Transfer'>
                Transfer
            </div>
        )
    }
}

export default Transfer
