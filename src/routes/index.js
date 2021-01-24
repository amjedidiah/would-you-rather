// Module imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {LoadingBar} from 'react-redux-loading';

// Component imports
import NotFound from 'components/presentation/NotFound';
import Layout from 'components/presentation/Layout';
import QuestionForm from 'components/container/QuestionForm';
import QuestionContainer from 'components/container/QuestionContainer';
import QuestionDisplay from 'components/container/QuestionDisplay';
import Login from 'components/container/Login';
import PrivateRoute from './PrivateRoute';
import Leaderboard from 'components/container/Leaderboard';

// Selector imports
import {getLoading} from 'redux/selectors';

/**
 * Routes component
 * @component
 * @return {object} - The UI DOM object
 */
const Routes = ({authedUser, loading}) => {
  const basename = window.location.href.includes('localhost') ?
    '/' :
    '/would-you-rather';

  return (
    <Router basename={basename}>
      <LoadingBar />
      {!loading && (
        <Switch>
          <Route
            path="/login"
            render={(props) => (
              <Layout authedUser={authedUser}>
                <Login {...props} />
              </Layout>
            )}
          />
          <PrivateRoute exact path="/">
            <QuestionContainer />
          </PrivateRoute>
          <PrivateRoute path="/add">
            <QuestionForm />
          </PrivateRoute>
          <PrivateRoute path="/leaderboard">
            <Leaderboard />
          </PrivateRoute>
          <PrivateRoute path="/questions/:question_id">
            <QuestionDisplay />
          </PrivateRoute>
          <Route
            render={(props) => (
              <Layout authedUser={authedUser} {...props}>
                <NotFound {...props} />
              </Layout>
            )}
          />
        </Switch>
      )}
    </Router>
  );
};

Routes.propTypes = {
  authedUser: PropTypes.string,
  loading: PropTypes.bool,
};

Routes.defaultProps = {
  authedUser: '',
  loading: true,
};

/**
 * Maps state to Routes component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser, questions, users}) => ({
  authedUser,
  loading: getLoading(questions, users),
});

// Routes export
export default connect(mapStateToProps)(Routes);
