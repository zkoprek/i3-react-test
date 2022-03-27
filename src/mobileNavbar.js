import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function Navbar () {
    return (
        <nav className="mobileNavbar mobileNavbarFadeIn noSelect">
        <ul className="flexMobile">
          <li>
            <Link to="/">Financial highlights</Link>
          </li>
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