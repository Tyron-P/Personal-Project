import { useNavigate } from "react-router-dom";
import noImageAvailable from "./noImageAvailable.png";

export const Card = ({ fetchData, handleCardClick }) => {
  const navigate = useNavigate();
  const releases = [...fetchData.releases];
  const handleClick = (id) => {
    handleCardClick(id);
  };
  return (
    <div
      data-testid="cardRowWrapper"
      className="row row-cols-1 row-cols-md-3 g-4"
    >
      {releases.map((release, index) => {
        return (
          <div
            key={index}
            className="card text-white bg-dark mb-3"
            style={{ width: "18rem", marginLeft: "15px" }}
            id={release.id}
          >
            <img
              src={release.poster_url ? release.poster_url : noImageAvailable}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{release.title}</h5>
              <a
                className="btn btn-primary"
                onClick={() => {
                  navigate("/movie-details");
                  handleClick(release.id);
                }}
              >
                Find out more info
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
