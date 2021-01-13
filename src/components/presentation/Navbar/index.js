// Module imports
import PropTypes from 'prop-types';
import {IconContext} from 'react-icons';

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
      <a
        className="navbar-brand fw-bolder
        text-white fs-2 me-xl-5 my-xl-3"
        href="/"
      >
        wyr.
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto ms-xl-5 my-3">
          {navLinks.map(({icon, text, to}) => (
            <li
              key={text}
              className="nav-item text-capitalize font-weight-bold"
            >
              <a
                className="nav-link nav-link--custom mx-sm-3"
                aria-current="page"
                href={to}
              >
                {text !== 'new question' ? (
                  <div>
                    <span className="d-xl-none fs-1">{icon}</span>
                    <span className="d-none d-xl-block">{text}</span>
                  </div>
                ) : (
                  <>
                    <span className="d-none d-xl-block">{text}</span>
                    <IconContext.Provider
                      value={{
                        color: 'var(--tylermcginnis)',
                        className:
                          'add shadow rounded-circle bg-white' +
                          'p-2 btn btn-white d-xl-none',
                      }}
                    >
                      {icon}
                    </IconContext.Provider>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
        {authedUser && (
          <ul className="navbar-nav ms-auto">
            <li className="nav-item text-capitalize font-weight-bold">
              <UserCard className="card--navbar d-flex" userID={authedUser} />
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
