// Module imports
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Selector imports
import {getSortedUserIDs} from 'redux/selectors';
import UserCard from './UserCard';

/**
 * Leaderboard component
 * @component
 * @return {object} - The UI DOM object
 *
 */
const Leaderboard = ({userIDs}) =>
  userIDs.map((id) => (
    <UserCard key={id} className="card card--leaderboard mb-3" userID={id} />
  ));

Leaderboard.propTypes = {
  userIDs: PropTypes.array,
};

Leaderboard.defaultProps = {
  userIDs: [],
};

/**
 *
 * @param {state} state
 * @return {{userIDs: id[]}}
 */
const mapStateToProps = ({users}) => ({userIDs: getSortedUserIDs(users)});

// Leaderboard export
export default connect(mapStateToProps)(Leaderboard);
