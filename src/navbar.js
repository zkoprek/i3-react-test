import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="navbar">
        <ul className="flex">
          <li>
            Annual report
          </li>
          <li>
            <Link to="/">Financial highlights</Link>
          </li>
          <img className="PGimg" src="PG_logo.svg"></img>
          <li>
            <Link to="/pageTwo">Letter to Shareowners</Link>
          </li>
          <li>
            <Link to="/">Downloads</Link>
          </li>
        </ul>
      </nav>
    )
}