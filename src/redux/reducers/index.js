// Module import
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading';

// Reducer imports
import authedUser from 'redux/reducers/authedUser';
import questions from 'redux/reducers/questions';
import users from 'redux/reducers/users';

// Export combineReducers
export default combineReducers({
  authedUser,
  loadingBar: loadingBarReducer,
  questions,
  users,
});
