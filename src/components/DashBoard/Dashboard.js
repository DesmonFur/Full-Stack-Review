import React, { Component } from 'react'
import './Dashboard.css'
import Transaction from '../Transaction/Transaction'
import {Link} from 'react-router-dom'
export class Dashboard extends Component {
    render() {
        return (
            <div className='Dashboard'>
                Dashboard
                
                <Transaction />
                <Link to='/transfer'>
                    <button>Transfer</button>
                </Link>
            </div>
        )
    }
}

export default Dashboard
