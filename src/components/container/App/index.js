// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Component imports
import Layout from 'components/presentation/Layout';
import Login from 'components/container/Login';
import QuestionDisplay from 'components/container/QuestionDisplay';


// Selector imports
import {getLoading} from 'redux/selectors';

// Style import
import './app.css';
import NotFound from 'components/presentation/NotFound';
import QuestionForm from 'components/controlled/QuestionForm';

/**
 * App component
 * @component
 *
 * @example
 * return <App />
 */
class App extends Component {
  /**
   * App propTypes
   */
  static propTypes = {
    authedUser: PropTypes.string,
    handleInitialData: PropTypes.func,
    loading: PropTypes.bool,
  };

  /**
   * Executes once component mounts
   * @return {actionCreator}
   */
  componentDidMount = () => this.props.handleInitialData();

  /**
   * Renders the App UI
   * @return {object} - The UI DOM object
   */
  render = () => {
    const {authedUser, loading} = this.props;

    const notFound = false;

    return (
      <>
        <LoadingBar />
        {!loading && (
          <Layout authedUser={authedUser} notFound={notFound}>
            {{true: <NotFound />}[notFound] ||
              (authedUser ? (
                <div className="col-12 col-xl offset-xl-3">
                  <QuestionForm />
                  {/* <QuestionContainer /> */}
                </div>
              ) : (
                <Login />
              ))}
          </Layout>
        )}
      </>
    );
  };
}

/**
 * Maps state to App component props
 * @param {state} state
 * @return {{authedUser: string, loading: boolean}}
 */
const mapStateToProps = ({authedUser, questions, users}) => ({
  authedUser,
  loading: getLoading(questions, users),
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
