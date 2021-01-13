// Module imports
import {FaHome, FaPlus, FaPoll} from 'react-icons/fa';

/**
 * @type {navLink[]}
 */
const navLinks = [
  {
    'text': 'home',
    'to': '/home',
    'icon': <FaHome />,
  },
  {
    'text': 'leaderboard',
    'to': '/leaderboard',
    'icon': <FaPoll />,
  },
  {
    'text': 'new question',
    'to': '/add',
    'icon': <FaPlus />,
  },
];

// navLinks export
export default navLinks;
