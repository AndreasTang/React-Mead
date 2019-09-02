import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Add from '../components/add'
import Edit from '../components/edit'
import Damge from '../components/damge'
import Help from '../components/help'
import NotFoundPage from '../components/notFoundPage'
import Header from '../components/header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Damge} />
                <Route path="/Add" component={Add} />
                <Route path="/edit/:id" component={Edit}/>
                <Route path="/help" component={Help} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

