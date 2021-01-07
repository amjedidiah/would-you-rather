// Module import
import {combineReducers} from 'redux';

// Reducer imports
import authedUser from 'redux/reducers/authedUser';
import {loadingBarReducer} from 'react-redux-loading';
import questions from 'redux/reducers/questions';
import users from 'redux/reducers/users';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  questions,
  users,
});
