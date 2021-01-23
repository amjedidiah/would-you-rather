// Module import
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import UserCard from 'components/container/UserCard';

// Selector import
import {getIfAnswered, getQuestion} from 'redux/selectors';
import {Link} from 'react-router-dom';

/**
 * QuestionItem component
 * @component
 * @param {{question: question, setActiveQuestion: function}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const questionID = ''
 * return <QuestionItem  questionID={questionID} />
 */
const QuestionItem = (props) => (
  <div
    className="shadow my-3 p-3 rounded d-flex
  question-item align-items-center bg-white flex-wrap"
  >
    <div className="question--user-container just-width mb-3 mb-md-0 mx-auto">
      <UserCard
        className="card--user-question"
        userID={props.question?.author}
      />
    </div>
    <div className="question-details flex-grow-1 ms-3 text-center">
      <h5>Would You Rather?</h5>
      <p>
        {props.question?.optionOne?.text}
        <br />
        or...
      </p>
      <Link
        to={`/questions/${props.question?.id}`}
        className="btn btn-link mt-2"
      >
        {props.ifAnswered ? 'View results' : 'Answer Poll'}
      </Link>
    </div>
  </div>
);

QuestionItem.propTypes = {
  ifAnswered: PropTypes.bool,
  question: PropTypes.object,
  /**
   * QuestionItem questionID
   */
  questionID: PropTypes.string.isRequired,
};

QuestionItem.defaultProps = {
  ifAnswered: false,
  question: {},
  questionID: '',
};

/**
 * Maps state to QuestionItem component props
 * @param {state} state
 * @param {{questionID: id}} ownProps
 * @return {{question: question}}
 */
const mapStateToProps = ({authedUser, questions}, {questionID}) => ({
  ifAnswered: getIfAnswered(authedUser, questionID, questions),
  question: getQuestion(questionID, questions),
});

// QuestionItem export
export default connect(mapStateToProps)(QuestionItem);
