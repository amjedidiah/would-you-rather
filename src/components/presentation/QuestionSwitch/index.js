// Module imports
import PropTypes from 'prop-types';

// Style import
import './questionSwitch.css';

/**
 * QuestionSwitch Component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * const active = ''
 * const categories = []
 * const onSetActiveCategory = () => {}
 *
 * return <QuestionSwitch
 *          active={active}
 *          categories={categories}
 *          onSetActiveCategory={setActiveCategory}
 *          />
 */
const QuestionSwitch = ({active, categories, onSetActiveCategory}) => (
  <ul className="nav nav-pills nav-fill">
    {categories.map((category) => (
      <li key={category} className="nav-item"
        onClick={() => onSetActiveCategory(category)}>
        <a
          className={`nav-link ${
            active === category && 'active'
          } nav-link--switch`}
          href="/#"
        >
          {category}
        </a>
      </li>
    ))}
  </ul>
);

QuestionSwitch.propTypes = {
  /**
   * QuestionSwitch active
   */
  active: PropTypes.string.isRequired,
  /**
   * QuestionSwitch categories
   */
  categories: PropTypes.array.isRequired,
  /**
   * QuestionSwitch onSetActiveCategory
   */
  onSetActiveCategory: PropTypes.func.isRequired,
};

QuestionSwitch.defaultProps = {
  active: '',
  categories: [],
  onSetActiveCategory: () => {},
};

// QuestionSwitch export
export default QuestionSwitch;
