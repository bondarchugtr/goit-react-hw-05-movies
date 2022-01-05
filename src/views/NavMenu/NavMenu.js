import { NavLink, useResolvedPath, useMatch, Outlet } from "react-router-dom";
import s from "./NavMenu.module.css";
function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <NavLink
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
      {match && " (active)"}
    </div>
  );
}

export function Layout() {
  return (
    <div>
      <nav className={s.nav__menu__container}>
        <ul className={s.nav__menu__list}>
          <li className={s.nav__menu__item}>
            <CustomLink to="/">Home</CustomLink>
          </li>
          <li className={s.nav__menu__item}>
            <CustomLink to="/movies">Movies</CustomLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export function NoMatch() {
  return (
    <div>
      <h1>Nothing to see here!</h1>
      <p>
        <NavLink to="/">Go to the home page</NavLink>
      </p>
    </div>
  );
}
