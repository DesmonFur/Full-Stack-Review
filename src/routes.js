import React from 'react'
import  {Switch,Route} from 'react-router-dom'
import Dashboard from './components/DashBoard/Dashboard';
import Landing from './components/Landing/Landing'
import Transaction from './components/Transaction/Transaction'
import Transfer from './components/Transfer/Transfer'

export default (
<Switch>
    <Route path='/' exact component={Landing} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/transfer' component={Transfer} />
</Switch>

)