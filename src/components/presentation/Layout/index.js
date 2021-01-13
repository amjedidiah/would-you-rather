// Module imports
import PropTypes from 'prop-types';

// Component imports
import Navbar from 'components/presentation/Navbar';
import UserCard from 'components/container/UserCard';

// Image imports
import unauthedLayout from './unauthed-layout.jpg';
import authedLayout from './authed-layout.jpg';

// Style import
import './layout.css';

/**
 * Layout component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser = 'sarahedo'
 * return (<Layout authedUser={authedUser}><Login /></Layout>)
 */
const Layout = ({authedUser, children}) => (
  <div
    className="h-100 container--layout"
    style={{
      backgroundImage: authedUser ?
        `url(${authedLayout})` :
        `url(${unauthedLayout})`,
    }}
  >
    <Navbar authedUser={authedUser} />
    <div className="h-100 container px-4">
      <div
        className={`row ${
          authedUser ? 'row--authed' : 'h-100 align-items-center'
        }`}
      >
        {authedUser && (
          <UserCard
            className={`card--authed col-xl-2
            d-none d-xl-block position-fixed shadow py-3 px-4`}
            userID={authedUser}
          />
        )}
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  /**
   * Layout's authedUser
   */
  authedUser: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  authedUser: '',
};

// Layout export
export default Layout;
