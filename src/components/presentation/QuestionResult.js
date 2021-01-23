// Module imports
import PropTypes from 'prop-types';

/**
 * QuestionResult component
 * @param {{question: question}} props
 * @return {object} - The UI DOM object
 *
 * @example
 * const authedUser = ''
 * const question = {}
 * return <QuestionResult authedUser={authedUser} question={question} />
 */
const QuestionResult = ({authedUser, question}) => {
  const totalVotes = [
    ...(question?.optionOne?.votes || []),
    ...(question?.optionTwo?.votes || []),
  ].length;

  return (
    <>
      <h4>Results:</h4>

      {[question?.optionOne, question?.optionTwo].map((o) => {
        const votesCount = o?.votes?.length;
        const percentage = Math.round((votesCount / totalVotes) * 100);

        const ifMyOption = (o?.votes || []).includes(authedUser);

        return (
          <div
            className={`card ${
              ifMyOption && `bg-${authedUser} text-white`
            } mt-5 p-3`}
            key={o?.text}
          >
            <p className="lead">Would you rather {o?.text}?</p>

            {ifMyOption && (
              <span
                className={`shadow bg-white text--${authedUser}
              py-2 px-3 position-absolute rounded-circle fw-bolder`}
                style={{right: '-10px', top: '-30px'}}
              >
                Your
                <br />
                Vote
              </span>
            )}

            <div className="progress my-1" style={{height: '20px'}}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{width: `${percentage}%`}}
                aria-valuenow={percentage}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`${percentage}%`}
              </div>
            </div>
            <p className="fw-bolder x-large">
              {`${votesCount} out of ${totalVotes}`}
            </p>
          </div>
        );
      })}
    </>
  );
};

QuestionResult.propTypes = {
  authedUser: PropTypes.string,
  question: PropTypes.object,
};

QuestionResult.defaultProps = {
  /**
   * QuestionResult authedUser
   */
  authedUser: '',
  /**
   * QuestionResult question
   */
  question: {},
};

// QuestionResult export
export default QuestionResult;
