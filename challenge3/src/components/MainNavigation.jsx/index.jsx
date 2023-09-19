import { Link } from "react-router-dom";

function MainNavigation() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/user/home">Home</Link>
            </li>
            <li>
              <Link to="/user/profile">Profile</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainNavigation;

