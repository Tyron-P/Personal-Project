import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={() => {
            navigate("/home");
          }}
          style={{ textAlign: "center" }}
        >
          <img
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
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
