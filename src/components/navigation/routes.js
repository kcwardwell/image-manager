import React from "react"
import { Route , Switch } from "react-router-dom"
import Home from "../page/home/home"
import About from "../page/about/about"
import Register from "../page/users/register"

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/user/register" component={ Register } />
        </Switch>
    </div>
)

export default Routes