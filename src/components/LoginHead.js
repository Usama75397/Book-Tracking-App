import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
        <div>
          <Link to="/login"  className="log-sign">
           Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
