// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import QuestionSwitch from 'components/presentation/QuestionSwitch';
import QuestionItem from 'components/container/QuestionItem';

// Data import
import categories from './categories';

// Selector imports
import {getQuestionIDs} from 'redux/selectors';

/**
 * QuestionContainer component
 * @component
 * @constructor
 *
 * @example
 * const authorID = ''
 * return <QuestionContainer authorID={authorID} />
 */
class QuestionContainer extends Component {
  /**
   * QuestionContainer state
   * @type {{activeCategory: string, questionIDs: id[]}}
   */
  state = {
    activeCategory: '',
    questionIDs: [],
  };

  static propTypes = {
    authedUser: PropTypes.string,
    /**
     * QuestionContainer authorID
     */
    authorID: PropTypes.string,
    questions: PropTypes.object,
  };

  static defaultProps = {
    authedUser: '',
    authorID: '',
    questions: {},
  };

  /**
   * Sets the question category to display
   * @param {string} activeCategory
   * @return {Promise<object>}
   */
  setActiveCategory = (activeCategory) =>
    this.setState(
        () => ({activeCategory}),
        this.setQuestionIDs(activeCategory, this.props.questions),
    );

  /**
   * Sets the question category to display
   * @param {string} activeCategory
   * @param {object} questions
   */
  setQuestionIDs = (activeCategory, questions) => {
    const questionIDs =
      getQuestionIDs(
          questions,
          activeCategory,
          this.props.authorID,
          this.props.authedUser,
      ) || [];

    this.setState(() => ({questionIDs}));
  };

  /**
   * Executes once component mounts
   * @return {function}
   */
  componentDidMount = () => this.setActiveCategory(categories[0]);

  /**
   * Renders QuestionContainer UI
   * @return {object} - The UI DOM object
   */
  render = () => (
    <div>
      <QuestionSwitch
        categories={categories}
        active={this.state.activeCategory}
        onSetActiveCategory={this.setActiveCategory}
      />
      {this.state.questionIDs.length > 0 ? (
        this.state.questionIDs.map((questionID) => (
          <QuestionItem key={questionID} questionID={questionID} />
        ))
      ) : (
        <h4 className="p-4 text-center">No questions here</h4>
      )}
    </div>
  );
}

/**
 * Maps state to QuestionContainer component props
 * @param {state} state
 * @return {{authedUser: id, questions: questions}}
 */
// const mapStateToProps = ({questions}, {authorID}) => ({
//   questionIDs: ,
// });
const mapStateToProps = ({authedUser, questions}) => ({
  authedUser,
  questions,
});

// QuestionContainer export
export default connect(mapStateToProps)(QuestionContainer);
