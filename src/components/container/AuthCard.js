// Module imports
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Selector import
import {getUser} from 'redux/selectors';

// Action import
import {setAuthedUser} from 'redux/actions/authedUser';

/**
 * AuthCard component
 * @component
 * @param {{setAuthedUser: function, userID: string, user: user}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const userID = "sarahedo"
 *
 * return <AuthCard userID={userID} />
 */
const AuthCard = (props) => {
  const {user, userID} = props;
  const {avatarURL, name} = user;

  return (
    <div className="col my-0" onClick={() => props.setAuthedUser(userID)}>
      <div
        className={`card mb-2 mb-sm-4 card--auth card--auth--${userID} shadow`}
      >
        <div className="row g-0">
          <div className="col col-sm d-flex justify-content-end py-3">
            <div className="rounded-circle img-holder img-holder--auth-card">
              <img src={avatarURL} className="img-fluid" alt={userID} />
            </div>
          </div>
          <div
            className="col-9
            col-sm-7 d-flex align-items-center justify-content-start"
          >
            <div className="card-body">
              <h3 className="card-title">{name}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthCard.propTypes = {
  setAuthedUser: PropTypes.func,
  user: PropTypes.object,
  /**
   * AuthCard userID
   */
  userID: PropTypes.string,
};

AuthCard.defaultProps = {
  userID: 'sarahedo',
};

/**
 * Maps state to AuthCard component props
 * @param {state} state
 * @param {{userID: id}} ownProps
 * @return {{user: user}}
 */
const mapStateToProps = ({users}, {userID}) => ({
  user: getUser(userID, users),
});

// AuthCard export
export default connect(mapStateToProps, {setAuthedUser})(AuthCard);
