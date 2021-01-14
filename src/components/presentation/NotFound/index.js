// Module import
import {FaChevronLeft, FaHome} from 'react-icons/fa';

// Style import
import './notfound.min.css';

/**
 * NotFound component
 * @component
 * @return {object} - The UI DOM object
 *
 * @example
 * return <NotFound />
 */
const NotFound = () => {
  // TODO: define lastVisited
  const lastVisited = '';

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <svg
        width="380px"
        height="500px"
        viewBox="0 0 837 1045"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="d-none d-sm-block me-sm-4"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <path
            d="M353,9 L626.664028,170 L626.664028,487 L353,642
            L79.3359724,487 L79.3359724,170 L353,9 Z"
            className="polygon"
            id="Polygon-1"
            stroke="var(--tylermcginnis)"
            strokeWidth="6"
          />
          <path
            d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687
            L10,648.311216 L10,569.186414 L78.5,529 Z"
            className="polygon"
            id="Polygon-2"
            stroke="#EF4A5B"
            strokeWidth="6"
          />
          <path
            d="M773,186 L827,217.538705 L827,279.636651 L773,310
            L719,279.636651 L719,217.538705 L773,186 Z"
            className="polygon"
            id="Polygon-3"
            stroke="#795D9C"
            strokeWidth="6"
          />
          <path
            d="M639,529 L773,607.846761 L773,763.091627 L639,839
            L505,763.091627 L505,607.846761 L639,529 Z"
            className="polygon"
            id="Polygon-4"
            stroke="var(--sarahedo)"
            strokeWidth="6"
          />
          <path
            d="M281,801 L383,861.025276 L383,979.21169 L281,1037
            L179,979.21169 L179,861.025276 L281,801 Z"
            className="polygon"
            id="Polygon-5"
            stroke="var(--johndoe)"
            strokeWidth="6"
          />
        </g>
      </svg>

      <div className="message-box ms-sm-4">
        <h1>404</h1>
        <p>Page not found</p>
        <div>
          <div>
            <a className="btn btn-link ps-0 me-3" href={lastVisited}>
              <FaChevronLeft />
              <span className="ms-1">Go Back</span>
            </a>
            <a className="btn btn-link ps-0 me-3" href="/">
              <FaHome />
              <span className="ms-1">Go to Home Page</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// NotFound export
export default NotFound;
