// Module import
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Selector import
import {getUserIDs} from 'redux/selectors';

// Style import
import './login.css';

// Component import
import AuthCard from 'components/container/AuthCard';

/**
 * Maps state to Dashboard component props
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Login />
 */
const Login = ({userIDs}) => (
  <div className="h-100" id="loginContainer">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 col-xl-5">
          <h2 className="mb-3">Login as:</h2>
          <div className="row row-cols-1">
            {userIDs.map((userID) => (
              <AuthCard key={userID} userID={userID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {
  userIDs: PropTypes.array,
};

Login.defaultProps = {
  userIDs: ['sarahedo', 'tylermcginnis', 'johndoe'],
};

/**
 * Maps state to Login component props
 * @param {state} state
 * @return {{userIDs: id[]}}
 */
const mapStateToProps = ({users}) => ({userIDs: getUserIDs(users)});

// Login export
export default connect(mapStateToProps)(Login);
