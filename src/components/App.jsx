import React from 'react'
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css'
import Home from '../components/pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import SignUp from './pages/SignUp';



function App() {
    return (
        <div className="App">

            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/products' exact component={Products}/>
                    <Route path='/services' exact component={Services}/>
                    <Route path='/sign-up' exact component={SignUp}/>
                </Switch>

            </Router>
        </div>
    )
}

export default App;
