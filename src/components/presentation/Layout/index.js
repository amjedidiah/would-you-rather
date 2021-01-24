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
 * return <Layout authedUser={authedUser} notFound={notFound}><Login /></Layout>
 */
const Layout = ({authedUser, children, notFound, location}) => (
  <div
    className={`${!authedUser && 'h-100'} container--layout`}
    style={{
      backgroundImage:
        authedUser || location?.state?.isQuestionNotFound || notFound ?
          `url(${authedLayout})` :
          `url(${unauthedLayout})`,
    }}
  >
    <Navbar authedUser={authedUser} />
    <div className={`${!authedUser && 'h-100'} container px-4`}>
      <div
        className={`row ${
          authedUser ? 'row--authed' : 'h-100 align-items-center'
        }`}
      >
        {authedUser && !location?.state?.isQuestionNotFound && (
          <UserCard
            className={`card--authed col-xl-2
            d-none d-xl-block position-fixed shadow py-3 px-4`}
          />
        )}
        <div
          className={
            authedUser && !location?.state?.isQuestionNotFound ?
              `col-12 col-xl offset-xl-3 mt-5 py-5 py-xl-0` :
              ''
          }
        >
          {children}
        </div>
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
  location: PropTypes.object,
  /**
   * Layout notFound
   */
  notFound: PropTypes.bool,
};

Layout.defaultProps = {
  authedUser: '',
  notFound: false,
};

// Layout export
export default Layout;
