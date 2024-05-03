export const Card = ({ fetchData }) => {
  const releases = [...fetchData];
  return (
    <div
      data-testid="cardRowWrapper"
      className="row row-cols-1 row-cols-md-3 g-4"
    >
      {releases.map((release, index) => {
        return (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <img src={release.poster_url} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{release.title}</h5>
              <a href="#" className="btn btn-primary">
                Find out more
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};
