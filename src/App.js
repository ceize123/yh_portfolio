import React, {useEffect} from "react";
import "./css/all.css";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Wrapper from "./components/Wrapper.js";
import LandingPage from "./components/pages/LandingPage.js";
import Uiux from "./components/pages/Uiux.js";
import Graphic from "./components/pages/Graphic.js";
import Footer from "./components/Footer.js";

const NoMatch = ({ location }) => (
  <div id='noMatch'>
    <header>
      <h1>No match for '<code>{location.pathname}</code>'</h1>
      <p>Incorrect Path</p>
    </header>
  </div>
)

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null
}

function App() {
    return (
        <>
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop></ScrollToTop>
            <Wrapper>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    {/* <Route path='/uiux' component={Jewelry} /> */}
                    <Route exact path='/works/uiux/:title' component={Uiux} />
                    <Route exact path='/works/graphic/:title' component={Graphic} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </Wrapper>
        </Router>
        </>
    );
}

export default App;
