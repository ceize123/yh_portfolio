import React from "react";
import "./css/all.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Wrapper from "./components/Wrapper.js";
import LandingPage from "./components/pages/LandingPage.js";
import Uiux from "./components/pages/Uiux.js";
import IconGuide from "./components/pages/IconGuide.js";
import Magazine from "./components/pages/Magazine.js";
import Footer from "./components/Footer.js";
import ScrollToTop from "./components/general.js";

const NoMatch = ({ location }) => (
  <div id='noMatch'>
    <header>
      <h1>No match for '<code>{location.pathname}</code>'</h1>
      <p>Incorrect Path</p>
    </header>
  </div>
)

function App() {
    return (
        <>
        <Router basename={process.env.PUBLIC_URL}>
            {/* There's horizontal scroll page, can't use wrapper here */}
            <Wrapper> 
            <ScrollToTop>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route exact path='/works/uiux/:title' component={Uiux} />
                    <Route exact path='/works/graphic/Icon_Guide' component={IconGuide} />
                    <Redirect to="/" component={LandingPage}/>
                </Switch>
            </ScrollToTop>
            </Wrapper>
                
            <Switch>
                <Route exact path='/works/graphic/Magazine_Design' component={Magazine} />
            </Switch>
        </Router>
        </>
    );
}

export default App;
