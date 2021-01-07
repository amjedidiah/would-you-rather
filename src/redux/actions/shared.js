// API import
import {getInitialData} from 'utils/api';
import {hideLoading, showLoading} from 'react-redux-loading';

// Action creator imports
import {receiveQuestions} from 'redux/actions/questions';
import {receiveUsers} from 'redux/actions/users';

/**
 * Async action creator to handle initial data
 * @return {actionCreator}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(({questions, users}) => {
    dispatch(receiveQuestions(questions));
    dispatch(receiveUsers(users));
    dispatch(hideLoading());
  });
};
