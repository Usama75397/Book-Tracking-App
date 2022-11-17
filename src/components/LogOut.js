import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const LogOut = () => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <div className="log-out">
          <Link to="/">
            <LogoutIcon style={{ fontSize: 30, color: "white" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogOut;