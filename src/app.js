import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Focus } from "./pages/focus"
import { User } from "./pages/user"
import CountDown from "./pages/focus/components/countDown"
import { SystemMsg } from './pages/user/components/systemMsg';
import { Finish } from './pages/focus/components/finish';
import Community from './pages/Community/Community'
import { UserChange } from './pages/user/components/userChange';
import Loginlogon from "./pages/Loginlogon/Loginlogon"
import { myTotalShare } from './pages/user/components/myTotalShare';
export const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Loginlogon} />
                    <Route path="/focus" component={Focus} />
                    <Route path="/user" component={User} />
                    <Route path='/club' component={Community} />
                    <Route path="/countdown" render={() => (<CountDown duration={1500} />)} />
                    <Route path='/message' component={SystemMsg} />
                    <Route path='/finish' component={Finish} />
                    <Route path='/userchange' component={UserChange} />
                    <Route path='/mytotalshare' component={myTotalShare} />
                </Switch>
            </Router>
        </div>
    )
}
