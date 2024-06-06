import { useNavigate } from "react-router-dom";
import logo from "./logo.png";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark" style={{ textAlign: "left" }}>
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            navigate("/home");
          }}
          style={{ textAlign: "center" }}
        >
          <img
            src={logo}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Your Latest Entertainment
        </a>
      </div>
    </nav>
  );
};
