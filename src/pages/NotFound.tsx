import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <Link to="/">Go Home</Link>
      <h1>NotFound</h1>
    </div>
  );
}

export default NotFound;
