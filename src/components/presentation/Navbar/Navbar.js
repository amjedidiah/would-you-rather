// Module imports
import PropTypes from 'prop-types';

// Data imports
import navLinks from 'data/navLinks';

// Style import
import './navbar.css';

/**
 * Navbar component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const brandColor = 'white';
 * return <Navbar brandColor={brandColor} />
 */
const Navbar = () => (
  <nav
    className="
    navbar fixed-top navbar-expand-sm navbar-light"
    id="navbar"
  >
    <div className="container px-xl-4">
      <a
        className={`navbar-brand fw-bolder text-white
        fs-2 ms-xl-3 me-xl-5 my-xl-3`}
        href="/#"
      >
        wyr.
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          className="
        navbar-nav ms-sm-5
         mb-2 mb-lg-0 text-capitalize font-weight-bold"
        >
          {navLinks.map(({text}) => (
            <li key={text} className="nav-item">
              <a
                className="nav-link nav-link--custom"
                aria-current="page"
                href="/#"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

// Navbar export
export default Navbar;
