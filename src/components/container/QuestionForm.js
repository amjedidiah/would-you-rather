// Module import
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleSaveQuestion} from 'redux/actions/questions';
import {withRouter} from 'react-router-dom';

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
    history: PropTypes.object,
  };

  static defaultProps = {
    authedUser: '',
    handleSaveQuestion: () => {},
    history: {},
  };

  /**
   * Renders QuestionForm component
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {optionOneText, optionTwoText} = this.state;
    const {authedUser, history} = this.props;

    return (
      <div>
        <h2>Create New Question</h2>
        <p className="text-muted">Complete the question</p>
        <p className="lead mt-4 mb-2">Would you rather...</p>
        <form className="form w-50">
          <div className="my-3">
            <input
              type="text"
              className="form-control form-control--custom"
              placeholder="Enter option one text here..."
              value={optionOneText}
              onChange={({target}) =>
                this.setState({optionOneText: target.value})
              }
              aria-label="Option One"
            />
          </div>
          <p className="text-center fw-bold">OR</p>
          <div className="my-3">
            <input
              type="text"
              className="form-control form-control--custom"
              placeholder="Enter option one text here..."
              value={optionTwoText}
              onChange={({target}) =>
                this.setState({optionTwoText: target.value})
              }
              aria-label="Option Two"
            />
          </div>

          <button
            className={`btn bg-${authedUser}
            fw-bold px-3 py-1 my-2 rounded-pill text-white`}
            onClick={() =>
              this.props
                  .handleSaveQuestion({
                    author: authedUser,
                    optionOneText,
                    optionTwoText,
                  })
                  .then(() => history.push('/'))
            }
            type="button"
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
export default withRouter(
    connect(mapStateToProps, {handleSaveQuestion})(QuestionForm),
);
