import { Navbar } from "../Components/nav";
import { useFetchTitleDetails } from "../Components/FetchTitleDetails";
import "./website.css";

function MovieDetails({ movieId }) {
  const urlMock = "http://localhost:8000/titleDetails";
  const { data, isPending } = useFetchTitleDetails(movieId, urlMock);

  return (
    <div className="Home">
      <header>
        <Navbar />
      </header>
      <div className="Home-body">
        {!isPending && (
          <div className="container">
            <div className="row row-cols-2">
              <div className="col">
                <img src={data.poster} className="img-fluid" alt="..." />
              </div>
              <div className="col">
                <p className="text-sm-start">{data.plot_overview}</p>
              </div>
              <div className="col">
                {data.title} <br />
                <div>{`User Rating: ${data.user_rating}`}</div>
              </div>
              <div className="col">
                Watch Trailer:
                <a href={data.trailer} className="link">
                  {data.trailer}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
