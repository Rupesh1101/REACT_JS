import React from 'react';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Menu';
import {Route, Switch} from 'react-router-dom';

const App = () => {
    return (
        <>
            <Menu/>
            <Switch>
                <Route exact path='/' component={About} />
                <Route path='/contact' component={Contact} />
                <Route component={Error} />
            </Switch>

            {/* <About />
            <Contact /> */}
        </>
    );
}

export default App;