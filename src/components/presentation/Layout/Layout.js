// Module imports
import PropTypes from 'prop-types';

// Component imports
import Navbar from '../Navbar/Navbar';
import UserCard from 'components/container/UserCard';

// Style import
import './layout.css';

// Image uploads
import unauthedLayout from './unauthed-layout.jpg';
import authedLayout from './authed-layout.jpg';

/**
 * Layout component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser = 'sarahedo'
 * return (<Layout authedUser={authedUser}><UserList /></Layout>)
 */
const Layout = ({authedUser, children}) => (
  <>
    <Navbar />
    <div
      className="h-100 container--layout"
      style={{
        backgroundImage: authedUser ?
          `url(${authedLayout})` :
          `url(${unauthedLayout})`,
      }}
    >
      {authedUser && <UserCard authedUser={authedUser} />} {children}
    </div>
  </>
);

Layout.propTypes = {
  /**
   * Layout's authedUser
   */
  authedUser: PropTypes.string,
  children: PropTypes.element,
};

Layout.defaultProps = {
  authedUser: 'sarahedo',
};

// Layout export
export default Layout;
