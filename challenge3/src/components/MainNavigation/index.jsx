import { NavLink } from "react-router-dom";
import { Ul, Nav } from "./style";
import logo from "../../assets/compass.uol.png"

const PERSON = [{ id: "p3", title: "Victoria" }];

function MainNavigation({ active }) {
  return (
      <Nav navigation={active}>
        <img src={logo} alt="Compass Logo" />
        <Ul>
          {PERSON.map((person) => (
            <li key={person.id}>
              <NavLink
                to={`/${person.id}/home`}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Página Inicial
              </NavLink>
            </li>
          ))}
          {PERSON.map((person) => (
            <li key={person.id}>
              <NavLink
                to={`/${person.id}/profile`}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Meu Perfil
              </NavLink>
            </li>
          ))}
          {PERSON.map((person) => (
            <li key={person.id}>
              <NavLink
                to={`/${person.id}/marketplace`}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Marketplace 
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/">Sair</NavLink>
          </li>
        </Ul>
      </Nav>
  );
}

export default MainNavigation;
