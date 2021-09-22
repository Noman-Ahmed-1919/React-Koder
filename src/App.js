import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import Whatsapp from './Whatsapp';
import { Switch, Route, Redirect } from 'react-router';




const App = ( ) => {

    return (
<>
<Navbar/>

<switch>
 
<Route exact path="/" component={Home}/>
<Route exact path="/About" component={About}/>
<Route exact path="/services" component={Services}/>
<Route exact path="/contact" component={Contact}/>
<Redirect to ="/" />
</switch>

<Whatsapp/>
<Footer/>

</>

    );
}

export default App;