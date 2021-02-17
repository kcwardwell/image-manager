import React from "react"
import { Route, Switch } from "react-router-dom"
import Home from "../page/home/home"
import About from "../page/about/about"


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            
        </Switch>
    </div>
)

export default Routes