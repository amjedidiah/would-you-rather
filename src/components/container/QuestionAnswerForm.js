// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleSaveQuestionAnswer} from 'redux/actions/questions';

/**
 * QuestionAnswerForm component
 * @component
 * @constructor
 *
 * @example
 * const authedUser = {}
 * const question = {}
 * return <QuestionAnswerForm authedUser={authedUser} question={question} />
 */
class QuestionAnswerForm extends Component {
  state = {
    selectedOption: '',
  };

  static propTypes = {
    authedUser: PropTypes.string.isRequired,
    handleSaveQuestionAnswer: PropTypes.func,
    question: PropTypes.object.isRequired,
  };

  static defaultProps = {
    /**
     * QuestionAnswerForm authedUser
     */
    authedUser: '',
    handleSaveQuestionAnswer: () => {},
    /**
     * QuestionAnswerForm question
     */
    question: {},
  };

  /**
   * Gets object key by value
   * @param {object} object
   * @param {string} valueText
   * @return {string}
   */
  getKeyByValueText = (object, valueText) =>
    Object.keys(object).find((key) => object[key]?.text === valueText);

  /**
   * Executes on component mount
   * @return {Promise<object>}
   */
  componentDidMount = () =>
    this.setState({
      selectedOption: this.getKeyByValueText(
          this.props.question,
          this.props.question?.optionOne?.text,
      ),
    });

  /**
   * Renders the QuestionAnswerForm component
   * @return {object} - The UI Dom object
   */
  render = () => {
    const {authedUser, question} = this.props;
    const {selectedOption} = this.state;

    return (
      <>
        <h4>Would You Rather</h4>
        <form className="form mt-3">
          {[question?.optionOne, question?.optionTwo].map((o) => (
            <div className="form-check pointer mb-2" key={o?.text}>
              <input
                aria-label={o?.text}
                className="form-check-input"
                type="radio"
                id={o?.text}
                name={question?.id}
                value={this.getKeyByValueText(question, o?.text)}
                checked={
                  selectedOption === this.getKeyByValueText(question, o?.text)
                }
                onChange={({target}) =>
                  this.setState({selectedOption: target.value})
                }
              />
              <label className="form-check-label pointer" htmlFor={o?.text}>
                {o?.text}
              </label>
            </div>
          ))}

          <button
            className={`btn bg-${question?.author}
    rounded-pill text-white mt-3 px-4`}
            type="button"
            onClick={() =>
              this.props.handleSaveQuestionAnswer(
                  authedUser,
                  question?.id,
                  selectedOption,
              )
            }
          >
            Submit
          </button>
        </form>
      </>
    );
  };
}

// QuestionAnswerForm export
export default connect(null, {handleSaveQuestionAnswer})(QuestionAnswerForm);
