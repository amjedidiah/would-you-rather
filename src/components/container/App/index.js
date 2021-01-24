// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LoadingBar} from 'react-redux-loading';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Routes import
import Routes from 'routes';

// Selector imports
import {getLoading} from 'redux/selectors';

// Style import
import './app.css';

/**
 * App component
 * @component
 *
 * @example
 * return <App />
 */
class App extends Component {
  static propTypes = {
    handleInitialData: PropTypes.func,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    handleInitialData: () => {},
    loading: true,
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
  render = () => (
    <>
      <LoadingBar />
      {!this.props.loading && <Routes />}
    </>
  );
}


/**
 * Maps state to App component props
 * @param {state} state
 * @return {{loading: bool}}
 */
const mapStateToProps = ({questions, users}) => ({
  loading: getLoading(questions, users),
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
