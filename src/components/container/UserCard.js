// Module imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {unsetAuthedUser} from 'redux/actions/authedUser';

/**
 * UserCard component
 * @component
 * @param {{authedUser: string, unsetAuthedUser: function}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser = 'sarahedo'
 * return <UserCard authedUser={authedUser} />
 */
const UserCard = (props) => (
  <div>
    <p>{props.authedUser}</p>{' '}
    <button onClick={props.unsetAuthedUser}>Logout</button>
  </div>
);

UserCard.propTypes = {
  /**
   * UserCard authedUser
   */
  authedUser: PropTypes.string.isRequired,
  unsetAuthedUser: PropTypes.func,
};

UserCard.defaultProps = {
  authedUser: 'sarahedo',
};

// UserCard export
export default connect(null, {unsetAuthedUser})(UserCard);
