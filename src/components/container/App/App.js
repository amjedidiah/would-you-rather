// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';

// Style import
import './app.css';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Selector imports
import {getLoading} from 'redux/selectors';

// Component imports
import Layout from 'components/presentation/Layout/Layout';
import Login from 'components/container/Login/Login';

/**
 * App component
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
   * @return {object} The UI DOM object
   */
  render = () => (
    <>
      <LoadingBar />
      {!this.props.loading && (
        <Layout authedUser={this.props.authedUser}>
          {this.props.authedUser && this.props.authedUser !== ' ' ? (
            <p>Would You Rather</p>
          ) : (
            <Login />
          )}
        </Layout>
      )}
    </>
  );
}

/**
 * Maps state to App component props
 * @param {state} state
 * @return {{loading: boolean}}
 */
const mapStateToProps = ({authedUser, questions, users}) => ({
  authedUser,
  loading: getLoading(questions, users),
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
