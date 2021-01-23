// Module imports
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';

// Data imports
import navLinks from './navLinks';

// Component imports
import UserCard from 'components/container/UserCard';

// Style import
import './navbar.css';

/**
 * Navbar component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser = 'sarahedo'
 * return <Navbar authedUser={authedUser} />
 */
const Navbar = ({authedUser}) => (
  <nav className="navbar navbar-expand navbar-light fixed-top" id="navbar">
    <div className="container px-xl-4">
      <Link
        className="navbar-brand fw-bolder
        text-white fs-2 me-xl-5 my-xl-3"
        to="/"
      >
        wyr.
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto ms-xl-5 my-3">
          {navLinks.map(({icon, text, to}) => (
            <li
              key={text}
              className="nav-item text-capitalize fw-bold"
            >
              <NavLink
                className="nav-link nav-link--custom mx-sm-3"
                aria-current="page"
                to={to}
                exact={to === '/'}
              >
                {text !== 'new question' ? (
                  <div>
                    <span className="d-xl-none fs-1">{icon}</span>
                    <span className="d-none d-xl-block">{text}</span>
                  </div>
                ) : (
                  <>
                    <span className="d-xl-none fs-1">{icon}</span>
                    <span className="d-none d-xl-block">{text}</span>

                    {/* <button
                      type="button"
                      className="btn bg-tylermcginnis d-xl-none
                      shadow rounded-circle add"
                      aria-label="Add"
                      typpe="button"
                    >
                      {icon}
                    </button> */}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        {authedUser && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-capitalize fw-bold">
              <UserCard className="card--navbar d-flex" />
            </li>
          </ul>
        )}
      </div>
    </div>
  </nav>
);

Navbar.propTypes = {
  /**
   * Navbar authedUser
   */
  authedUser: PropTypes.string,
};

Navbar.defaultProps = {
  authedUser: '',
};

// Navbar export
export default Navbar;
