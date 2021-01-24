// Module imports
import {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Routes import
import Routes from 'routes';

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
  };

  static defaultProps = {
    handleInitialData: () => {},
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
  render = () => <Routes />;
}

// App export
export default connect(null, {handleInitialData})(App);
