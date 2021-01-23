// Module import
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action import
import {setAuthedUser} from 'redux/actions/authedUser';

// Component import
import UserCard from 'components/container/UserCard';

// Selector import
import {getUserIDs} from 'redux/selectors';
import {Redirect} from 'react-router-dom';

/**
 * Maps state to Dashboard component props
 * @component
 * @param {{userIDs: id[], setAuthedUser: function}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Login />
 */
const Login = (props) =>
  props.authedUser ? (
    <Redirect to={props.location?.state?.from?.pathname} />
  ) : (
    <div className="col-12 col-xl-5">
      <h2 className="mb-3">Login as:</h2>
      <div className="row row-cols-1">
        {props.userIDs.map((userID) => (
          <UserCard
            className={`card--auth card--auth--${userID}
            shadow mb-2 mb-sm-4 p-3`}
            key={userID}
            userID={userID}
            onSetAuthedUser={props.setAuthedUser}
          />
        ))}
      </div>
    </div>
  );

Login.propTypes = {
  authedUser: PropTypes.string,
  location: PropTypes.object,
  setAuthedUser: PropTypes.func,
  userIDs: PropTypes.array,
};

Login.defaultProps = {
  authedUser: '',
  location: {},
  setAuthedUser: () => {},
  userIDs: [],
};

/**
 * Maps state to Login component props
 * @param {state} state
 * @return {{userIDs: id[]}}
 */
const mapStateToProps = ({authedUser, users}) => ({
  authedUser,
  userIDs: getUserIDs(users),
});

// Login export
export default connect(mapStateToProps, {setAuthedUser})(Login);
