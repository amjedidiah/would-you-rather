// Module imports
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import PropTypes from 'prop-types';

// Component imports
import Layout from 'components/presentation/Layout';

/**
 * PrivateRoute component
 * @component
 * @param {*} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const path = {path}
 * return <PrivateRoute path={path}><Home /></PrivateRoute>
 */
const PrivateRoute = ({authedUser, children, ...rest}) => (
  <Route
    {...rest}
    render={({location}) =>
      authedUser ? (
        <Layout authedUser={authedUser}>{children}</Layout>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: {from: location},
          }}
        />
      )
    }
  />
);

PrivateRoute.propTypes = {
  authedUser: PropTypes.string,
  children: PropTypes.element,
};

PrivateRoute.defaultProps = {
  authedUser: '',
  children: <div></div>,
};

/**
 * Maps state to PrivateRoute component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({authedUser});

// Private route export
export default connect(mapStateToProps)(PrivateRoute);
