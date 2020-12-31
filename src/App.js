import React from 'react';
import './App.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Posts from './components/Posts';
import Home from './components/Home';
import Nav from './components/Nav';
import SinglePost from './components/SinglePost';

const App = ()=>{
    return(
        <div className='my_container'>
            <h1>REACT REDUX</h1>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/posts' component={Posts} />
                    <Route path='/:id' component={SinglePost} />
                </Switch>      
            </BrowserRouter>
        </div>
    )
}

export default App