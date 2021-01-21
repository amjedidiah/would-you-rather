// Module import
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import UserCard from 'components/container/UserCard';

// Selector import
import {getQuestion} from 'redux/selectors';

// Action creator imports
import {setActiveQuestion} from 'redux/actions/questions';

// Style import
import './questionItem.css';

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
  flex-sm question-item align-items-center bg-white"
  >
    <div className="question--user-container mb-2 mb-md-0">
      <UserCard
        className="card--user-question"
        userID={props.question?.author}
      />
    </div>
    <div className="question-details flex-grow-1 ms-3 text-center">
      <h5>Would You Rather?</h5>
      <p>...{props.question?.optionOne?.text}...</p>
      <button
        className="btn btn-link mt-2"
        onClick={() => props.setActiveQuestion(props.question?.id)}
      >
        View
      </button>
    </div>
  </div>
);

QuestionItem.propTypes = {
  question: PropTypes.object,
  /**
   * QuestionItem questionID
   */
  questionID: PropTypes.string.isRequired,
  setActiveQuestion: PropTypes.func,
};

QuestionItem.defaultProps = {
  question: {},
  questionID: '',
  setActiveQuestion: () => {},
};

/**
 * Maps state to QuestionItem component props
 * @param {state} state
 * @param {{questionID: id}} ownProps
 * @return {{question: question}}
 */
const mapStateToProps = ({questions}, {questionID}) => ({
  question: getQuestion(questionID, questions),
});

// QuestionItem export
export default connect(mapStateToProps, {setActiveQuestion})(QuestionItem);
