import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Welcome from '../welcome/welcome';
import Game from '../game/game';

import {Err} from '../error/error';

export const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Welcome}/>
                <Route path='/game' component={Game}/>
                <Route path='/error' component ={Err}/>
            </Switch>
        </HashRouter>
    )
}