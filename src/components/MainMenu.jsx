import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Blog from './Blog';
import BlogItemDetail from './BlogItemDetail';
function MainMenu() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/blog" component={Blog} />
                <Route path="/blog/:id/:slug.html" component={BlogItemDetail} />
            </Switch>
        </div>
    )
}

export default MainMenu
