import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/home'
import Contect from '../components/contect'
import Header from '../components/header'
import NotFoundPage from '../components/notFoundPage'
import Item from '../components/portfolioItem';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio/:id" component={Item} />
                <Route path="/contect" component={Contect} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

