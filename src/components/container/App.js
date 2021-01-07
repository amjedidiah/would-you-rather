// Module imports
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';

// Action creator imports
import {handleInitialData} from 'redux/actions/shared';

// Selector imports
import {getLoading} from 'redux/selectors';

/**
 * App component
 */
class App extends Component {
  /**
   * App propTypes
   */
  static propTypes = {
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
    <div className="App">
      <LoadingBar /> {!this.props.loading && <p>Would You Rather</p>}
    </div>
  );
}
/**
 * Maps state to Dashboard component props
 * @param {state} state
 * @return {appStateProps}
 */
const mapStateToProps = ({questions, users}) => ({
  loading: getLoading(questions, users),
});

// App export
export default connect(mapStateToProps, {handleInitialData})(App);
