import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Home'
import History from './pages/History'

const App = () => {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/history">
                        <History />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
