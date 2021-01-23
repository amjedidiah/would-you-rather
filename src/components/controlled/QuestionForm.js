// Module import
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleSaveQuestion} from 'redux/actions/questions';

/**
 * QuestionForm component
 * @component
 * @constructor
 *
 * @example
 * return <QuestionForm />
 */
class QuestionForm extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  static propTypes = {
    authedUser: PropTypes.string,
    handleSaveQuestion: PropTypes.func,
  }

  static defaultProps = {
    authedUser: '',
    handleSaveQuestion: () => {},
  }

  /**
   * Renders QuestionForm component
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {optionOneText, optionTwoText} = this.state;
    const {authedUser} = this.props;

    return (
      <div>
        <h2>Create New Question</h2>
        <p className="text-muted">Complete the question</p>
        <p className="lead">Would you rather...</p>
        <form className="form">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option one text here..."
              value={optionOneText}
              onChange={({target}) =>
                this.setState({optionOneText: target.value})
              }
              aria-label="Option One"
            />
          </div>
          <p className="text-center fw-bold">OR</p>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter option one text here..."
              value={optionTwoText}
              onChange={({target}) =>
                this.setState({optionTwoText: target.value})
              }
              aria-label="Option Two"
            />
          </div>

          <button
            className={`btn bg-${authedUser} text-white w-100 rounded-pill`}
            onClick={() =>
              this.props.handleSaveQuestion({
                author: authedUser,
                optionOneText,
                optionTwoText,
              })
            } type="button"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
}

/**
 * Maps state to QuestionForm component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({authedUser});


// QuestionForm export
export default connect(mapStateToProps, {handleSaveQuestion})(QuestionForm);
