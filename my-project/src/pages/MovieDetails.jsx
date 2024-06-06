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
          <div className="container ">
            <div className="row row-cols-2">
              <div className="col" style={{ width: "30rem" }}>
                <div
                  className="card text-white bg-dark mb-3"
                  style={{ width: "18rem" }}
                >
                  <img src={data.poster} className="img-fluid" alt="..." />
                  <br />
                  {data.title}
                </div>
              </div>
              <div className="col">
                {data.trailer && (
                  <div>
                    <iframe
                      width="600"
                      height="340"
                      src={`https://www.youtube.com/embed/${
                        data.trailer.split("=")[1]
                      }`}
                      title="FX&#39;s The Veil | Official Trailer | Starring Elisabeth Moss"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                <p className="fs-5">{data.plot_overview}</p>
                <br />
              </div>
              <div className="col">
                <br />
                <div
                  className="card text-white bg-dark mb-3"
                  style={{ width: "18rem" }}
                >
                  {data.type && (
                    <div className="content">{`Type: ${data.type}`}</div>
                  )}
                  {data.user_rating && (
                    <div className="content">{`User Rating: ${data.user_rating}`}</div>
                  )}
                  {data.release_date && (
                    <div className="content">{`Release date: ${data.release_date}`}</div>
                  )}
                  {data.runtime_minutes && (
                    <div className="content">{`Runtime: ${data.runtime_minutes} minutes`}</div>
                  )}
                  {data.genre_names && (
                    <div className="content">{`Genres: ${data.genre_names}`}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
