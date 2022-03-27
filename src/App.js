
import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from "./pages/home"
import PageTwo from "./pages/pageTwo"
import Navbar from "./navbar"
import MobileNavbar from "./mobileNavbar"

export default function App() {
  const [show, setShow] = React.useState(false)

  function toggleShow () {
    setShow(prevShow => !prevShow)
  }

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = React.useState(
      getWindowDimensions()
    );
  
    React.useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

  const { height, width } = useWindowDimensions();

  let menuDiv
  if (width >= 1040) menuDiv = <Navbar />
  else if (show) menuDiv = <MobileNavbar/>
  else menuDiv = null

  return (
    <Router>
      <div>
        {width<1040 && <div onClick={toggleShow} className="shortMenu">2020 Annual Report {show ? <i className="arrow up"></i> : <i className="arrow down"></i>}</div>}
        {menuDiv}

        <Switch>
          <Route path="/home">
            <Home width={width}/>
          </Route>
          <Route path="/pageTwo">
            <PageTwo width={width}/>
          </Route>
          <Route path="/">
            <Home width={width}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
