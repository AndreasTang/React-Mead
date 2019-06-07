import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Contect from '../components/Contect'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'
import Item from '../components/PortfolioItem';
import Portfolio from '../components/Portfolio';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/portfolio" exact component={Portfolio}></Route>
                <Route path="/portfolio/:id" component={Item} />
                <Route path="/contect" component={Contect} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter

