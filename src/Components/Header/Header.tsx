import { NavLink, NavLinkProps } from "react-router-dom"

const Header: React.FC = () => {
    return (
        <>
      <div/>
      <NavLink>LearnLingo</NavLink>
      <nav>
        <ul>
          <li>
          <NavLink<NavLinkProps> to="/">Home</NavLink>
          </li>
          <li>
          <NavLink<NavLinkProps> to="/teacher">Teachers</NavLink>
          </li>
        </ul>
      </nav>
      </>
    )
  }

  export default Header


