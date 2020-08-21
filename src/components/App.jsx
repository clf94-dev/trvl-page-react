import React from 'react'
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css'

function App() {
    return (
        <div className="App">

            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact/>
                </Switch>

            </Router>
        </div>
    )
}

export default App;
