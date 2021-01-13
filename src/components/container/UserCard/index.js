// Module imports
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FaPowerOff} from 'react-icons/fa';

// Action imports
import {unsetAuthedUser} from 'redux/actions/authedUser';

// Selector import
import {
  getAnsweredQuestionsCount,
  getSubmittedQuestionsCount,
  getUser,
} from 'redux/selectors';

// Style import
import './usercard.css';

/**
 * UserCard component
 * @component
 * @param {{
 * className: string,
 * onSetAuthedUser: function,
 * unsetAuthedUser: function,
 * user: user,
 * userID: string,
 * }} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const className = 'card--navbar'
 * const userID = "sarahedo"
 * const onSetAuthedUser = () => action
 *
 * return <UserCard userID={userID} onSetAuthedUser={setAuthedUser}  />
 */
const UserCard = (props) => {
  const {
    answeredQuestions,
    className,
    onSetAuthedUser,
    submittedQuestions,
    unsetAuthedUser,
    user,
    userID,
  } = props;
  const {avatarURL, name} = user;
  const score = answeredQuestions + submittedQuestions;

  return (
    <div
      className={`col-12 ${className}`}
      onClick={() => onSetAuthedUser && onSetAuthedUser(userID)}
    >
      <div className="user-info">
        <div className="rounded-circle img-holder">
          <img src={avatarURL} className="img-fluid" alt={userID} />
        </div>
        <div>
          <p className="card-title">{name}</p>
          <p className="text-muted card-id">@{userID}</p>
        </div>
      </div>
      <div className="user-info--extra">
        <div className="user-stats user-stats--individual text-center flex-row">
          <div className="user-stat flex-grow-1">
            <p className="fw-bold mb-2 question-count">answered</p>
            <p className={`text-${userID} text-count`}>{answeredQuestions}</p>
          </div>
          <div className="user-stat flex-grow-1">
            <p className="fw-bold mb-2 question-count">submitted</p>
            <p className={`text-${userID} text-count`}>{submittedQuestions}</p>
          </div>
        </div>
        <div className="user-stats user-stats--total text-center">
          <p className={`text--${userID} display-4 fw-bold`}>{score}</p>
          <p className=" text-uppercase question-count">score</p>
        </div>
        <button
          className="btn btn-danger w-100 rounded-pill"
          onClick={unsetAuthedUser}
        >
          <span className="d-none d-xl-block">Logout</span>
          <span className="d-xl-none">
            <FaPowerOff />
          </span>
        </button>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  answeredQuestions: PropTypes.number,
  /**
   * UserCard className
   */
  className: PropTypes.string.isRequired,
  /**
   * UserCard onSetAuthedUser
   */
  onSetAuthedUser: PropTypes.func,
  submittedQuestions: PropTypes.number,
  unsetAuthedUser: PropTypes.func,
  user: PropTypes.object,
  /**
   * UserCard userID
   */
  userID: PropTypes.string.isRequired,
};

UserCard.defaultProps = {
  answeredQuestions: 0,
  className: '',
  onSetAuthedUser: null,
  submittedQuestions: 0,
  unsetAuthedUser: null,
  user: {},
  userID: '',
};

/**
 * Maps state to UserCard component props
 * @param {state} state
 * @param {{userID: id}} ownProps
 * @return {{answeredQuestions: number, submittedQuestions: number, user: user}}
 */
const mapStateToProps = ({users}, {userID}) => ({
  answeredQuestions: getAnsweredQuestionsCount(users, userID),
  submittedQuestions: getSubmittedQuestionsCount(users, userID),
  user: getUser(userID, users),
});

// UserCard export
export default connect(mapStateToProps, {unsetAuthedUser})(UserCard);
