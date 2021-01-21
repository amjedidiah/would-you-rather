// Module imports
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Component imports
import UserCard from 'components/container/UserCard';
import QuestionAnswerForm from './QuestionAnswerForm';
import QuestionResult from './QuestionResult';

// Selector imports
import {getIfAnswered, getQuestion} from 'redux/selectors';

/**
 * QuestionDisplay component
 * @component
 * @constructor
 *
 * @example
 * const questionID = '';
 * return <QuestionDisplay questionID={questionID} />
 */
const QuestionDisplay = ({authedUser, ifAnswered, question}) => (
  <div
    className="card card--question-display
      d-flex flex-wrap align-items-center py-3 my-5 my-xl-0"
  >
    <div className="just-width mx-auto mb-3 mb-sm-0 text-center px-4">
      <UserCard userID={question?.author} />
    </div>
    <div
      className="flex-grow-1 py-2 px-4 border border-secondary
        border-top-0 border-end-0 border-bottom-0"
    >
      {ifAnswered ? (
        <QuestionResult authedUser={authedUser} question={question} />
      ) : (
        <QuestionAnswerForm authedUser={authedUser} question={question} />
      )}
    </div>
  </div>
);

QuestionDisplay.propTypes = {
  authedUser: PropTypes.string,
  ifAnswered: PropTypes.bool,
  question: PropTypes.object,
  /**
   * QuestionDisplay questionID
   */
  questionID: PropTypes.string,
};

QuestionDisplay.defaultProps = {
  authedUser: '',
  ifAnswered: false,
  question: {},
  questionID: '',
};

/**
 * Maps state to QuestionDisplay component props
 * @param {state} state
 * @param {{questionID: id}} ownProps
 * @return {{question: question}}
 */
const mapStateToProps = (
    {authedUser, questions},
    {questionID, question},
) => ({
  authedUser,
  ifAnswered: getIfAnswered(authedUser, questionID, questions, question),
  question: getQuestion(questionID, questions),
});

// QuestionDisplay export
export default connect(mapStateToProps)(QuestionDisplay);
