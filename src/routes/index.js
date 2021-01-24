// Module imports
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// Component imports
import NotFound from 'components/presentation/NotFound';
import Layout from 'components/presentation/Layout';
import QuestionForm from 'components/container/QuestionForm';
import QuestionContainer from 'components/container/QuestionContainer';
import QuestionDisplay from 'components/container/QuestionDisplay';
import Login from 'components/container/Login';
import PrivateRoute from './PrivateRoute';
import Leaderboard from 'components/container/Leaderboard';

/**
 * Routes component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <Routes />
 */
const Routes = ({authedUser}) => {
  const basename = window.location.href.includes('localhost') ?
    '/' :
    '/would-you-rather';

  return (
    <Router basename={basename}>
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
            <Layout authedUser={authedUser} notFound={true} {...props}>
              <NotFound {...props} />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
};

Routes.propTypes = {
  authedUser: PropTypes.string,
};

Routes.defaultProps = {
  authedUser: '',
};

/**
 * Maps state to Routes component props
 * @param {state} state
 * @return {{authedUser: id}}
 */
const mapStateToProps = ({authedUser}) => ({
  authedUser,
});

// Routes export
export default connect(mapStateToProps)(Routes);
